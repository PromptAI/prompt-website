export const CompareCode = {
    "Swarm": {
        "Agents.py": `import json

from swarm import Agent


def get_weather(location, time="now"):
    """Get the current weather in a given location. Location MUST be a city."""
    return json.dumps({"location": location, "temperature": "65", "time": time})


def send_email(recipient, subject, body):
    print("Sending email...")
    print(f"To: {recipient}")
    print(f"Subject: {subject}")
    print(f"Body: {body}")
    return "Sent!"


weather_agent = Agent(
    name="Weather Agent",
    instructions="You are a helpful agent.",
    functions=[get_weather, send_email],
)`,
        "run.py": `from swarm.repl import run_demo_loop
from agents import weather_agent

if __name__ == "__main__":
    run_demo_loop(weather_agent, stream=True)`
    },

    //https://github.com/microsoft/autogen

    "autogen":{
      "agents.py":`import json
from autogen import AssistantAgent, UserProxyAgent

def get_weather(location: str, time: str = "now") -> str:
    """Get the current weather in a given location. Location MUST be a city."""
    return json.dumps({"location": location, "temperature": "65", "time": time})

def send_email(recipient: str, subject: str, body: str) -> str:
    print("Sending email...")
    print(f"To: {recipient}")
    print(f"Subject: {subject}")
    print(f"Body: {body}")
    return "Sent!"

weather_agent = AssistantAgent(
    name="Weather Agent",
    system_message="You are a helpful agent that provides weather updates and sends emails.",
    function_map={"get_weather": get_weather, "send_email": send_email},
)

user = UserProxyAgent(name="User")

# Example interaction
response = user.initiate_chat(weather_agent, message="Get the weather for San Francisco.")
print(response)

if __name__ == "__main__":
    main()
`
    },
    // https://github.com/awslabs/multi-agent-orchestrator
    "Multi-Agent Orchestrator": {
        "main.py": `import asyncio
import uuid
import sys
from typing import Any, List
from multi_agent_orchestrator.orchestrator import MultiAgentOrchestrator, OrchestratorConfig
from multi_agent_orchestrator.classifiers import ClassifierResult
from multi_agent_orchestrator.agents import AgentResponse, Agent, BedrockFlowsAgent, BedrockFlowsAgentOptions
from multi_agent_orchestrator.types import ConversationMessage, ParticipantRole

async def handle_request(_orchestrator: MultiAgentOrchestrator,agent:Agent, _user_input:str, _user_id:str, _session_id:str):
    classifier_result = ClassifierResult(selected_agent=agent, confidence=1.0)
    response:AgentResponse = await _orchestrator.agent_process_request(
        _user_input,
        _user_id,
        _session_id,
        classifier_result)

    print(response.output.content[0].get('text'))


def flow_input_encoder(agent:Agent, input: str, **kwargs) -> Any:
    global flow_tech_agent
    if agent == flow_tech_agent:
        chat_history:List[ConversationMessage] = kwargs.get('chat_history', [])

        chat_history_string = '\\n'.join(f"{message.role}:{message.content[0].get('text')}" for message in chat_history)

        return {
                "question": input,
                "history":chat_history_string
            }
    else:
        return input

def flow_output_decode(agent:Agent, response: Any, **kwargs) -> Any:
    global flow_tech_agent
    if agent == flow_tech_agent:
        return ConversationMessage(
            role=ParticipantRole.ASSISTANT.value,
            content=[{'text': response}]
        )
    else:
        return ConversationMessage(
            role=ParticipantRole.ASSISTANT.value,
            content=[{'text': response}]
        )

if __name__ == "__main__":

    # Initialize the orchestrator with some options
    orchestrator = MultiAgentOrchestrator(options=OrchestratorConfig(
        LOG_AGENT_CHAT=True,
        LOG_CLASSIFIER_CHAT=True,
        LOG_CLASSIFIER_RAW_OUTPUT=True,
        LOG_CLASSIFIER_OUTPUT=True,
        LOG_EXECUTION_TIMES=True,
        MAX_RETRIES=3,
        USE_DEFAULT_AGENT_IF_NONE_IDENTIFIED=False,
        MAX_MESSAGE_PAIRS_PER_AGENT=10
    ))

    flow_tech_agent = BedrockFlowsAgent(BedrockFlowsAgentOptions(
        name="tech-agent",
        description="Specializes in handling tech questions about AWS services",
        flowIdentifier='BEDROCK-FLOW-ID',
        flowAliasIdentifier='BEDROCK-FLOW-ALIAS-ID',
        enableTrace=False,
        flow_input_encoder=flow_input_encoder,
        flow_output_decoder=flow_output_decode
    ))
    orchestrator.add_agent(flow_tech_agent)

    USER_ID = "user123"
    SESSION_ID = str(uuid.uuid4())

    print("Welcome to the interactive Multi-Agent system. Type 'quit' to exit.")

    while True:
        # Get user input
        user_input = input("\\nYou: ").strip()

        if user_input.lower() == 'quit':
            print("Exiting the program. Goodbye!")
            sys.exit()

        # Run the async function
        asyncio.run(handle_request(orchestrator, flow_tech_agent, user_input, USER_ID, SESSION_ID))`,
        "main.ts": "import readline from \"readline\";\n" +
            "import {\n" +
            "  MultiAgentOrchestrator,\n" +
            "  Logger,\n" +
            "  BedrockFlowsAgent,\n" +
            "  Agent,\n" +
            "} from \"multi-agent-orchestrator\";\n" +
            "\n" +
            "\n" +
            "const flowInputEncoder = (\n" +
            "    agent: Agent,\n" +
            "    input: string,\n" +
            "    kwargs: {\n" +
            "        userId?: string,\n" +
            "        sessionId?: string,\n" +
            "        chatHistory?: any[],\n" +
            "        [key: string]: any  // This allows any additional properties\n" +
            "      }\n" +
            ") => {\n" +
            "    const chat_history_string = kwargs.chatHistory?.map((message: { role: string; content: { text?: string }[] }) =>\n" +
            "      `${message.role}:${message.content[0]?.text || ''}`\n" +
            "    )\n" +
            "    .join('\\n');\n" +
            "\n" +
            "    if (agent == flowTechAgent){\n" +
            "        return {\n" +
            "        \"question\":input,\n" +
            "        \"history\":chat_history_string\n" +
            "        };\n" +
            "    } else {\n" +
            "        return input\n" +
            "    }\n" +
            "}\n" +
            "\n" +
            "const flowTechAgent = new BedrockFlowsAgent({\n" +
            "    name: \"Tech Agent\",\n" +
            "    description:\n" +
            "      \"Specializes in technology areas including software development, hardware, AI, cybersecurity, blockchain, cloud computing, emerging tech innovations, and pricing/costs related to technology products and services.\",\n" +
            "    flowIdentifier:'BEDROCK-FLOW-ID',\n" +
            "    flowAliasIdentifier:'BEDROCK-FLOW-ALIAS-ID',\n" +
            "    flowInputEncoder: flowInputEncoder\n" +
            "  });\n" +
            "\n" +
            "function createOrchestrator(): MultiAgentOrchestrator {\n" +
            "  const orchestrator = new MultiAgentOrchestrator({\n" +
            "    config: {\n" +
            "      LOG_AGENT_CHAT: true,\n" +
            "      LOG_EXECUTION_TIMES: true,\n" +
            "      MAX_MESSAGE_PAIRS_PER_AGENT: 10,\n" +
            "    },\n" +
            "    logger: console,\n" +
            "  });\n" +
            "\n" +
            "  // Add a Tech Agent to the orchestrator\n" +
            "  orchestrator.addAgent(\n" +
            "    flowTechAgent\n" +
            "  );\n" +
            "\n" +
            "  return orchestrator;\n" +
            "}\n" +
            "\n" +
            "const uuidv4 = () => {\n" +
            "  return \"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g, function (c) {\n" +
            "    var r = (Math.random() * 16) | 0,\n" +
            "      v = c == \"x\" ? r : (r & 0x3) | 0x8;\n" +
            "    return v.toString(16);\n" +
            "  });\n" +
            "};\n" +
            "\n" +
            "// Function to run local conversation\n" +
            "async function runLocalConversation(): Promise<void> {\n" +
            "  const orchestrator = createOrchestrator();\n" +
            "  // Generate random uuid 4\n" +
            "\n" +
            "  const userId = uuidv4();\n" +
            "  const sessionId = uuidv4();\n" +
            "\n" +
            "  const allAgents = orchestrator.getAllAgents();\n" +
            "  Logger.logger.log(\"Here are the existing agents:\");\n" +
            "  for (const agentKey in allAgents) {\n" +
            "    const agent = allAgents[agentKey];\n" +
            "    Logger.logger.log(`Name: ${agent.name}`);\n" +
            "    Logger.logger.log(`Description: ${agent.description}`);\n" +
            "    Logger.logger.log(\"--------------------\");\n" +
            "  }\n" +
            "\n" +
            "  orchestrator.analyzeAgentOverlap();\n" +
            "\n" +
            "  const rl = readline.createInterface({\n" +
            "    input: process.stdin,\n" +
            "    output: process.stdout,\n" +
            "  });\n" +
            "\n" +
            "  Logger.logger.log(\n" +
            "    \"Welcome to the interactive AI agent. Type your queries and press Enter. Type 'exit' to end the conversation.\"\n" +
            "  );\n" +
            "\n" +
            "  const askQuestion = (): void => {\n" +
            "    rl.question(\"You: \", async (userInput: string) => {\n" +
            "      if (userInput.toLowerCase() === \"exit\") {\n" +
            "        Logger.logger.log(\"Thank you for using the AI agent. Goodbye!\");\n" +
            "        rl.close();\n" +
            "        return;\n" +
            "      }\n" +
            "\n" +
            "      try {\n" +
            "\n" +
            "        const response = await orchestrator.agentProcessRequest(\n" +
            "            userInput,\n" +
            "            userId,\n" +
            "            sessionId,\n" +
            "            {\n" +
            "                selectedAgent:flowTechAgent,\n" +
            "                confidence:1.0\n" +
            "            }\n" +
            "        );\n" +
            "\n" +
            "        // Handle non-streaming response (AgentProcessingResult)\n" +
            "        Logger.logger.log(\"\\n** RESPONSE ** \\n\");\n" +
            "        Logger.logger.log(`> Agent ID: ${response.metadata.agentId}`);\n" +
            "        Logger.logger.log(`> Agent Name: ${response.metadata.agentName}`);\n" +
            "        Logger.logger.log(`> User Input: ${response.metadata.userInput}`);\n" +
            "        Logger.logger.log(`> User ID: ${response.metadata.userId}`);\n" +
            "        Logger.logger.log(`> Session ID: ${response.metadata.sessionId}`);\n" +
            "        Logger.logger.log(\n" +
            "        `> Additional Parameters:`,\n" +
            "        response.metadata.additionalParams\n" +
            "        );\n" +
            "        Logger.logger.log(`\\n> Response: ${response.output}`);\n" +
            "      } catch (error) {\n" +
            "        Logger.logger.error(\"Error:\", error);\n" +
            "      }\n" +
            "      askQuestion(); // Continue the conversation\n" +
            "    });\n" +
            "  };\n" +
            "\n" +
            "  askQuestion(); // Start the conversation\n" +
            "}\n" +
            "\n" +
            "// Check if this script is being run directly (not imported as a module)\n" +
            "if (require.main === module) {\n" +
            "  // This block will only run when the script is executed locally\n" +
            "  runLocalConversation();\n" +
            "}"
    }
};