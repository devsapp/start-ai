# Artificial intelligence project case

<p align="center"><b> <a href="./readme.md"> 中文 </a> | English </b></p>

- [PyTorch case](#Pytorch)
- [Tensorflow case](#Tensorflow)
- [OCR case](#OCR-case)
- [Object detection case](#Object-detection-case)

### Pytorch

You can quickly experience PyTorch projects on Alibaba Cloud Function Compute in just a few steps

- Initialize the project: `s init start-pytorch -d start-pytorch`
- Enter the project: `cd start-pytorch`
- Modify some configurations in s.yaml, such as container image address, etc.
- Deploy the project: `s deploy`
- Trigger item: `s invoke`

For documentation, please refer to the [document content](./start-pytorch/src) of the corresponding project

### Tensorflow

You can quickly experience Tensorflow projects on Alibaba Cloud Function Compute in just a few steps

- Initialize the project: `s init start-tensorflow -d start-tensorflow`
- Enter the project: `cd start-tensorflow`
- Modify some configurations in s.yaml, such as container image address, etc.
- Deploy the project: `s deploy`
- Trigger item: `s invoke`

For documentation, please refer to the [document content](./start-tensorflow/src) of the corresponding project

### OCR Case

You can quickly experience OCR projects on Alibaba Cloud Function Compute in just a few steps

- Initialize the project: `s init start-ocr -d start-ocr`
- Enter the project: `cd start-ocr`
- Modify some configurations in s.yaml, such as container image address, etc.
- Build the project: `s build --use-docker --dockerfile ./code/Dockerfile`
- Deploy the project: `s deploy`
- Trigger item: `s invoke`

For documentation, please refer to the [document content](./start-ocr/src) of the corresponding project

### Object detection case

You can quickly experience the target detection project on Alibaba Cloud Function Compute Service in just a few steps

- Initialize the project: `s init image-prediction-app -d image-prediction-app`
- Go to the project: `cd image-prediction-app`
- Modify some configurations in s.yaml, such as VPC, etc.
- Deploy the project: `s deploy`
- Trigger item: `s invoke`

For documentation, please refer to the [document content](./image-prediction-app/src) of the corresponding project

## Refer to

> - Serverless Devs project: https://www.github.com/serverless-devs/serverless-devs
> - Serverless Devs Documentation: https://www.github.com/serverless-devs/docs
> - Serverless Devs DingTalk Group: 33947367