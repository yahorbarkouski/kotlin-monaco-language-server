"use client";
import React from 'react';
import {MonacoEditorReactComp} from '@typefox/monaco-editor-react';
import {UserConfig} from 'monaco-editor-wrapper';
import 'monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution.js';
import {buildWorkerDefinition} from 'monaco-editor-workers';
import {snippets} from "@/data/snippets";

buildWorkerDefinition('../node_modules/monaco-editor-workers/dist/workers', import.meta.url, false);

export default function KotlinEditor() {
    const rootElem = document.getElementById('root-editor')!;

    const initialUserConfig: UserConfig = {
        htmlElement: rootElem,
        wrapperConfig: {
            serviceConfig: {
                enableKeybindingsService: true,
                debugLogging: true
            },
            editorAppConfig: {
                $type: 'classic',
                languageId: 'kotlin',
                useDiffEditor: false,
                theme: "vs-dark",
                codeUri: '/tmp/model/Main.kt',
                code: snippets[Math.floor(Math.random() * snippets.length)].code!!,
                languageExtensionConfig: {
                    id: 'Kotlin',
                    extensions: ['.kts', '.kt'],
                    aliases: ['KOTLIN', 'kotlin'],
                    mimetypes: ['text/x-kotlin-source', 'text/x-kotlin'],
                },
                editorOptions: {
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 14,
                    minimap: {
                        enabled: false
                    },
                    scrollBeyondLastLine: false,
                    tabSize: 2,
                    padding: {
                        top: 15
                    },
                    lineNumbersMinChars: 1,
                }
            }
        },
        languageClientConfig: {
            options: {
                $type: 'WebSocketUrl',
                url: 'ws://localhost:30000/kotlin',
                stopOptions: {
                    onCall: () => {
                        console.log('Disconnected from socket.');
                    },
                    reportStatus: false
                },
                startOptions: {
                    onCall: () => {
                        console.log('Connected to a socket.');
                    },
                    reportStatus: false
                },
            }
        }
    }

    const onTextChanged = (text: string) => {
        console.log('Text changed: ', text)
    }

    return (
        <MonacoEditorReactComp
            style={{height: '85%', width: '100%'}}
            userConfig={initialUserConfig}
            onTextChanged={onTextChanged}
        />
    );
}
