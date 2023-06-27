# vue-activity

一个 vue2 活动页面项目，基于 vue cli5，多页面，统一管理每个活动页面。可以一键打包所有页面，也可以单独打包每个页面。

<p align="center">
  <img src="https://img.shields.io/badge/-Vue2-42b983?logo=vue.js&logoColor=white" />
  <img src="https://img.shields.io/badge/-Sass-cc6699?logo=sass&logoColor=white" alt="Less">
  <img src="https://img.shields.io/badge/-ESLint-4b32c3?logo=eslint&logoColor=white" />
  <img src="https://img.shields.io/badge/-prettier-yellow?logo=prettier&logoColor=white" />
</p>

## 一、IDE

- 运行环境：[Node](http://nodejs.cn/)
- 开发工具：[VS Code](https://code.visualstudio.com/)
- 必要的 VS Code 插件：[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- 包管理器：npm

## 二、使用

```bash
# 安装依赖
npm i

# 运行
npm run serve page=src/pages下的模块名 # 例：npm run serve page=test

# 单独打包模块
npm run build page=src/pages下的模块名 # 例：npm run build page=test

#打包所有模块
npm run build
```

## 三、项目结构

```
vue-activity
├─ .vscode                # vscode推荐配置
├─ build
├─ public                 # 静态资源文件（忽略打包）
├─ src
│  ├─ components          # 公共组件
│  ├─ pages               # 页面
│  ├─ styles              # 公共样式
│  └─ utils               # 公共工具方法
├─ .browserslistrc        # 配置兼容浏览器
├─ .editorconfig          # 代码规范
├─ .eslintrc.js           # eslint 配置文件
├─ .prettierrc            # prettier 配置文件
├─ babel.config.js        # babel 配置文件
├─ jsconfig.json
├─ package-lock.json      # 定义依赖包的精确版本
├─ package.json
├─ postcss.config.js      # postcss 配置文件
├─ README.md
└─ vue.config.js          # vue 项目配置文件
```
