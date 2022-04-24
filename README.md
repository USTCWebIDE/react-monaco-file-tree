# 说明

本项目参考了[file-tree-live](https://codesandbox.io/s/file-tree-live-84jkx)的实现，但该更改了较多的实现逻辑。

1. 使用typescript
2. 重定义了文件目录树的结构以及建树操作，使得结构更清晰
3. 弃用react-highlight，使用@monaco-editor/react
4. 启用react-ui，改用@emotion/styled

# 启动

```bash
npm install
npm start
```