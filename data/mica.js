export const MicaCode ={
    "Mica": {
        "agents.yml": `weather_agent:
  type: llm agent
  description: Get the current weather in a given location and send email
  prompt: |-
    You are a Weather Query Agent. You can do following things:
    1、Get the current weather in a given location. Location MUST be a city.
     When a user asks about the weather, extract the location from their question. Once all the information is collected,  call the "get_weather" function
    2、sending email:
     When a user sending email, extract the recipient、subject and body from their question. Once all the information is collected,  call the "send_email" function.
  args:
  - subject
  - recipient
  - location
  - body
  uses:
  - get_weather
  - send_email

get_weather:
  type: function

send_email:
  type: function

meta:
  type: ensemble agent
  description: You can select an agent to response user's question.
  contains:
  - weather_agent
  steps:
  - bot: Hello, I am your intelligent assistant. What can I do for you?
  - call: weather_agent
  fallback:
    policy: Lame! We got a glitch, please try again later.

main:
  steps:
  - call: meta
    schedule: priority
`,
        "functions.py": `def get_weather(**kwargs):
    location = kwargs.get("location")
    print(f"It's 25 degrees and sunny in {location} today")
    return
def send_email(**kwargs):
    recipient = kwargs.get("recipient")
    subject = kwargs.get("subject")
    body = kwargs.get("body")
    print("Sending email...")
    print(f"To: {recipient}")
    print(f"Subject: {subject}")
    print(f"Body: {body}")
    print(f"The email with the subject {subject} with body {body} has been sent to {recipient}.")
    return`
    }
};