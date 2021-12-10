# Start OCR Application

## 简介

在开始之前，我们首先介绍下几个重要的概念：

```text
OCR(光学字符识别): 光学字符识别（Optical Character Recognition, OCR）是指对文本资料的图像文件进行分析识别处理，获取文字及版面信息的过程。亦即将图像中的文字进行识别，并以文本的形式返回。

Tesserocr：Tesserocr 是 python 的一个 OCR 识别库，但其实是对 tesseract 做的一层 python API 封装，所以它的核心是 tesseract。

函数计算（Function Compute）：函数计算是一个事件驱动的服务，通过函数计算，用户无需管理服务器等运行情况，只需编写代码并上传。函数计算准备计算资源，并以弹性伸缩的方式运行用户代码，而用户只需根据实际代码运行所消耗的资源进行付费。

Serverless Devs: 一款可以在Serverless应用全生命周期发挥作用的开发者工具，更多请参考 http://www.serverless-devs.com/
```

## 前置条件

### 必要条件

1. 注册[阿里云](https://www.aliyun.com/)账号
2. 开通[函数计算](https://fc.console.aliyun.com/fc/)
3. 下载 nodejs
- [macos](https://qianfeng-test-buc.oss-accelerate.aliyuncs.com/start_todo_list/nodejs/node-v14.17.3.pkg)
- [windows x64](https://qianfeng-test-buc.oss-accelerate.aliyuncs.com/start_todo_list/nodejs/node-v14.17.3-x64.msi)
- [windows x86](https://qianfeng-test-buc.oss-accelerate.aliyuncs.com/start_todo_list/nodejs/node-v14.17.3-x86.msi)
4. 下载 [Serverless Devs](http://www.serverless-devs.com/docs/install)
5. 配置阿里云密钥:
```bash
$ s config add --AccessKeyID xxx --AccessKeySecret xxx --AccountID xxx -a default
```
6. 开通[阿里云镜像服务](https://cr.console.aliyun.com/)

### 可选条件

以下条件为可选条件，用于进行本地调试、端云联调、本地实时观看日志以及压测功能。

1. 开通[阿里云日志服务](https://sls.console.aliyun.com/)
2. 安装 docker
- [macos](https://qianfeng-test-buc.oss-accelerate.aliyuncs.com/start_todo_list/docker/Docker.dmg)
- [windows](https://qianfeng-test-buc.oss-accelerate.aliyuncs.com/start_todo_list/docker/Docker%20Desktop%20Installer.exe)

## 动手实践

接下来，基于 Serverless Devs 来快速开发部署一个通用文字识别服务。

### 初始化

首先初始化该示例项目。

```bash
$ s init devsapp/start-ocr
$ cd start-ocr
```

### 本地构建

可选步骤，可以直接使用示例中已经构建好的镜像，若要自行构建，可以修改 s.yml 中 `customContainerConfig` 配置下的 `image` 选项，然后执行如下指令：

```bash
$ s build --use-docker
```

本案例为 custom container runtime，因此构建过程中基于 [Dockerfile](./Dockerfile) 进行了构建镜像的操作。

#### 本地调试

本示例是 http 函数，因此使用 `local start` 指令来进行本地调试，若是 event 函数，需要使用 `local invoke`
 指令来进行调试，详情请参考[这里](https://github.com/devsapp/fc/blob/main/docs/Usage/local.md)。

```bash

# 启动本地调试
$ s local start auto
[2021-08-14T20:59:17.218] [INFO ] [S-CLI] - Start ...
[2021-08-14T20:59:19.127] [INFO ] [FC-LOCAL-INVOKE] - Using trigger for start: name: httpTrigger
type: http
config:
  authType: anonymous
  methods:
    - GET
    - POST

[2021-08-14T20:59:19.132] [INFO ] [FC-LOCAL-INVOKE] - CustomDomain auto of tesserocr/tesserocr was registered
        url: http://localhost:7890/
        methods: GET,POST
        authType: anonymous

Tips for next step
======================
* Deploy Resources: s deploy
fc-tesserocr-tesserocr:
  status: succeed

function compute app listening on port 7890!
```

此时访问上述 `url: http://localhost:7890/` 字段即可访问本地启动的函数服务。

### 部署

接下来我们可以进行部署操作。

```bash
$ s deploy
```

若发现配置有问题，可以修改对应的配置，然后利用 `deploy` 指令只部署修改后的配置，例如我们这里可以修改 s.yml 中函数的 `description` ，然后只部署函数配置:

```bash
$ s deploy function --type config
```

部署完成后，我们需要保存返回的 `url` 字段，供后续调用使用。

此外，我们可以通过 `info` 指令来获取部署后的资源信息。

```bash
# 查看部署后的资源信息
$ s info
```

## 查看日志

利用 `logs` 指令能实时查看函数生成的日志，但是得在 s.yml 中的 `service` 下配置 `logConfig` 字段。本示例中已经配置了 `logConfig: auto`，这会在账号下自动生成一个 logproject 和 logstore，因此需要有对应的权限。

```bash
# 实时查看日志
$ s logs -t

# 查看某一时间段内的日志
$ s logs -s 2021-07-22T12:00:00+08:00 -e 2021-07-23T10:00:00+08:00
```

### 对服务进行访问

服务部署完成后，可以直接通过 `s invoke` 对线上服务发起调用，查看服务是否运行正常。也可以对线上服务进行压力测试：

```bash
# 调用函数
$ s invoke

# 压力测试
$ s stress start --num-user 6 --spawn-rate 10 --run-time 30 --function-type http --url xxx --method GET
```

压力测试后会返回简单的压测结果信息，若要查看详细的汇报信息，请打开生成的 html 文件:

```bash
Html report flie: /Users/zqf/.s/cache/fc-stress/html/url#2021-07-23T09-59-41.html
Execute 'open /Users/zqf/.s/cache/fc-stress/html/url#2021-07-23T09-59-41.html' on macos for html report with browser.
Average: 17
Fails: 0
Failures/s: 0
Max: 10111
Method: GET
Min: 7
Name: /
RPS: 333
Requests: 9989
p50: 13
p60: 14
p70: 16
p90: 21
p95: 25
p99: 43
```

### 可观测性

通过 `metrics` 指令来查看函数的运行指标:

```bash
$ s metrics
[2021-07-23T10:21:29.023] [INFO ] [S-CLI] - Start ...
[2021-07-23T10:21:30.444] [INFO ] [FC-METRICS] - Creating serivce: Metrics start...
End of method: metrics
[2021-07-23T10:21:30.625] [INFO ] [FC-METRICS] - Getting domain: http://localhost:3000, 请用浏览器访问Uri地址进行查看
```

`s metrics` 指令会返回上述 url，访问该 url 就可以查看函数的指标信息。

### 发布

上述测试完成后，可以进行发布操作：

```bash
# 发布版本
$ s version publish --description 'this is a version 1'

# 发布别名
$ s alias publish --alias-name testAlias --version 1
```

发布完成后，可以查看已经发布的版本/别名。

```bash
# 查看已经发布的版本信息
$ s version list --table
s
# 查看已经发布的别名
$ s alias list --table
```

### CICD

若要想要将上述流程在自动化，可以选择 cicd 组件来生成 cicd 模版，目前支持生成 Github Action 模版和 Gitee Go 模版。以 Github Action 为例。

```bash
# 初始化 Github Action 模版
$ s cli cicd github
```

上述指令会在当前项目下生成 .github/workflows/serverless-devs.yml 文件，文件内容：

```yaml
name: Serverless Devs Project CI/CD

on:
  push:
    branches: [ main ]

jobs:
  serverless-devs-cd:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 12
          registry-url: https://registry.npmjs.org/
      - run: npm install
      - run: npm install -g @serverless-devs/s
      # 默认密钥配置指令是阿里云密钥配置指令，更多可以参考：
      # 如何通过Github Action使用Serverless Devs做CI/CD：http://short.devsapp.cn/cicd/github/action/usage
      # Serverless Devs的官网是通过Serverless Devs部署的: http://short.devsapp.cn/cicd/github/action/practice
      - run: s config add --AccountID ${{secrets.AccountID}} --AccessKeyID ${{secrets.AccessKeyID}} --AccessKeySecret ${{secrets.AccessKeySecret}} -a default
      - run: s deploy
```

此时 push 到 main 分支的操作会触法上述流程，目前流程主要只会执行 `s deploy` 操作，若需要进行其他操作，需要手工添加 `- run: ${command}` 即可。

注：需要将阿里云密钥信息设置在对应 repo 中的 `Secrets` 中，包括： AccountID、AccessKeyID 和 AccessKeySecret 三个变量。

### 删除

最后，我们可以通过 `s remove service` 指令来删除上述部署的资源。
