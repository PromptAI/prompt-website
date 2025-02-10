import "twin.macro";
import tw from "twin.macro";

import Container from "~/components/Atoms/Container";
import {useState} from "react";
import {Highlight, themes} from "prism-react-renderer";
import {MicaCode} from "~/data/mica";
import {CompareCode} from "~/data/compare";

function CompareLayout({filesData}) {
    const softwareList = Object.keys(filesData);
    const [activeSoftware, setActiveSoftware] = useState(softwareList[0]);
    const [activeFile, setActiveFile] = useState(Object.keys(filesData[activeSoftware])[0]);
    const [copyStatus, setCopyStatus] = useState('Copy');  // 添加复制状态

    return (
        <div
            tw="w-full max-w-4xl flex border rounded-lg overflow-hidden h-[550px] backdrop-blur-sm bg-white/80 shadow-[0_4px_20px_-2px_rgba(66,153,225,0.18),0_0_15px_-3px_rgba(66,153,225,0.2)] border-[#e1e4e8]">
            {/* 左侧软件切换按钮 */}
            <div tw="w-1/5 border-r border-[#e1e4e8] p-2 bg-gray-50/50 backdrop-blur-sm flex flex-col gap-2">
                {softwareList.map((software, index) => (
                    <button
                        key={index}
                        tw="block text-left px-3 py-2 rounded-lg text-sm transition-all duration-200"
                        css={[
                            activeSoftware === software
                                ? tw`bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md`
                                : tw`hover:bg-blue-50 hover:shadow-sm`
                        ]}
                        onClick={() => {
                            setActiveSoftware(software);
                            setActiveFile(Object.keys(filesData[software])[0]);
                            setCopyStatus('Copy');  // 重置复制状态
                        }}
                    >
                        {software}
                    </button>
                ))}
            </div>

            {/* 右侧内容区域 */}
            <div tw="w-4/5 flex flex-col">
                {/* 顶部文件选择 */}
                <div tw="flex items-center justify-between border-b border-[#e1e4e8] p-2 bg-gray-50/50 backdrop-blur-sm">
                    <div tw="flex space-x-2">
                        {Object.keys(filesData[activeSoftware]).map((file, index) => (
                            <button
                                key={index}
                                tw="block text-left px-3 py-2 rounded-lg text-sm transition-all duration-200"
                                css={[
                                    activeFile === file
                                        ? tw`bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md`
                                        : tw`hover:bg-blue-50 hover:shadow-sm`
                                ]}
                                onClick={() => {
                                    setActiveFile(file);
                                    setCopyStatus('Copy');  // 重置复制状态
                                }}
                            >
                                {file}
                            </button>
                        ))}
                    </div>

                    <button
                        tw="px-2.5 py-1 text-xs rounded-md text-gray-600 transition-all duration-200 
                           border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        onClick={() => {
                            navigator.clipboard.writeText(filesData[activeSoftware][activeFile])
                                .then(() => setCopyStatus('Copied!'))
                                .catch(err => console.error('复制失败：', err));
                        }}
                    >
                        {copyStatus}
                    </button>
                </div>

                {/* 代码显示区 */}
                <div tw="relative flex-1 p-4 text-sm bg-[#f6f8fa] overflow-auto">

                    <Highlight
                        theme={themes.github}
                        code={filesData[activeSoftware][activeFile]}
                        language={activeFile.endsWith('.js') ? 'javascript' :
                            activeFile.endsWith('.ts') ? 'typescript' :
                                activeFile.endsWith('.yml') ? 'yaml' :
                                    activeFile.endsWith('.py') ? 'python' :
                                        activeFile.endsWith('.css') ? 'css' :
                                            activeFile.endsWith('.scss') ? 'scss' : 'plaintext'}
                    >
                        {({className, style, tokens, getLineProps, getTokenProps}) => (
                            <pre tw="whitespace-pre-wrap" className={className} style={style}>
                                {tokens.map((line, i) => (
                                    <div {...getLineProps({line, key: i})}>
                                        {line.map((token, key) => (
                                            <span {...getTokenProps({token, key})} />
                                        ))}
                                    </div>
                                ))}
                            </pre>
                        )}
                    </Highlight>
                </div>
            </div>
        </div>
    );
}

export default function Compare() {
    const micaCode = MicaCode;
    const others = CompareCode;

    return (
        <section tw="bg-cover bg-no-repeat pt-[4.5rem] -mt-[4.5rem]">
            <Container tw="flex flex-row items-center p-5 pb-10 gap-10">
                <CompareLayout filesData={micaCode}/>
                <CompareLayout filesData={others}/>
            </Container>
        </section>
    );
}
