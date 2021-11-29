# 阿里云函数计算：OCR 服务

## 简介

在开始之前，我们首先介绍下几个重要的概念：

```text
OCR（光学字符识别）：光学字符识别（Optical Character Recognition, OCR）是指对文本资料的图像文件进行分析识别处理，获取文字及版面信息的过程。亦即将图像中的文字进行识别，并以文本的形式返回。

Tesserocr：Tesserocr 是 python 的一个 OCR 识别库，但其实是对 tesseract 做的一层 python API 封装，所以它的核心是 tesseract。

函数计算（Function Compute）：函数计算是一个事件驱动的服务，通过函数计算，用户无需管理服务器等运行情况，只需编写代码并上传。函数计算准备计算资源，并以弹性伸缩的方式运行用户代码，而用户只需根据实际代码运行所消耗的资源进行付费。

Serverless Devs: 一款可以在Serverless应用全生命周期发挥作用的开发者工具，更多请参考 http://www.serverless-devs.com/
```

通过该应用，您可以简单快速的创建一个 OCR 服务到阿里云函数计算服务。

- 下载命令行工具：`npm install -g @serverless-devs/s`
- 初始化一个模版项目：`s init devsapp/start-ocr`
- 进入项目后部署项目：`s deploy`

-----

> - Serverless Devs 项目：https://www.github.com/serverless-devs/serverless-devs   
> - Serverless Devs 文档：https://www.github.com/serverless-devs/docs   
> - Serverless Devs 钉钉交流群：33947367    
