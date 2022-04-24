import React from 'react'
import Editor from "@monaco-editor/react";
import {File} from "../utils/file-manager";
import styled from "@emotion/styled";

export const Code = ({selectedFile}: { selectedFile: File | undefined }) => {
  if (!selectedFile)
    return null

  const code = selectedFile.content
  let extension = selectedFile.name.split('.').pop()

  return (
    <Div>
      <Editor
        height="100vh"
        language={extension === "js" ? "javascript" : extension}
        value={code}
        theme="vs-dark"
      />
    </Div>
  )
}

const Div = styled.div`
  width: calc(100% - 250px);
  margin: 0;
  font-size: 16px;
  overflow: scroll;
`
