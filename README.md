# 一、概述

本项目可作为使用到 html 的 js 模块 开发(如 canvas、audio) 可使用 `import` ESModule 语法引入模块，打包后可在 node 或 webpack 环境中使用。

## 安装

pnpnm install

## 运行开发环境

pnpm run dev

## 打包测试

pnpm run buildTest

## 打包生产

pnpm run build

## 发布 npm

1. 登录 npm
2. 更新版本 `$ npm version patch`
3. 发布 `$ npm run build && npm publish`
