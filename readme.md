# 人工智能项目案例

- [PyTorch案例](#Pytorch)
- [Tensorflow案例](#Tensorflow)
- [OCR案例](#OCR案例)
- [目标检测案例](#目标检测案例)

### Pytorch

只需几步就可以快速在阿里云函数计算服务上体验 PyTorch 项目

- 初始化项目：`s init start-pytorch -d start-pytorch`
- 进入项目：`cd start-pytorch`
- 将 s.yaml 中的部分配置进行修改，例如容器镜像地址等
- 部署项目：`s deploy`
- 触发项目：`s invoke`

文档相关可以参考对应项目的[文档内容](./start-pytorch/src)

### Tensorflow

只需几步就可以快速在阿里云函数计算服务上体验 Tensorflow 项目

- 初始化项目：`s init start-tensorflow -d start-tensorflow`
- 进入项目：`cd start-tensorflow`
- 将 s.yaml 中的部分配置进行修改，例如容器镜像地址等
- 部署项目：`s deploy`
- 触发项目：`s invoke`

文档相关可以参考对应项目的[文档内容](./start-tensorflow/src)

### OCR案例

只需几步就可以快速在阿里云函数计算服务上体验 OCR 项目

- 初始化项目：`s init start-ocr -d start-ocr`
- 进入项目：`cd start-ocr`
- 将 s.yaml 中的部分配置进行修改，例如容器镜像地址等
- 构建项目：`s build --use-docker --dockerfile ./code/Dockerfile`
- 部署项目：`s deploy`
- 触发项目：`s invoke`

文档相关可以参考对应项目的[文档内容](./start-ocr/src)

### 目标检测案例

只需几步就可以快速在阿里云函数计算服务上体验目标检测项目

- 初始化项目：`s init image-prediction-app -d image-prediction-app`
- 进入项目：`cd image-prediction-app`
- 将 s.yaml 中的部分配置进行修改，例如VPC等
- 部署项目：`s deploy`
- 触发项目：`s invoke`

文档相关可以参考对应项目的[文档内容](./image-prediction-app/src)

## 参考

> - Serverless Devs 项目：https://www.github.com/serverless-devs/serverless-devs
> - Serverless Devs 文档：https://www.github.com/serverless-devs/docs
> - Serverless Devs 钉钉交流群：33947367
