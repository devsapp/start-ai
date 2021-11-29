## 简介

首先初始化该示例项目。

```bash
$ s init devsapp/start-pytorch -d start-pytorch
$ cd start-pytorch
```

1. 构建

修改 s.yml 中 `customContainerConfig` 配置下的 `image` 选项，修改成您自己的阿里云容器服务 ACR 镜像地址，然后执行如下指令：

```bash
$ s build --use-docker --dockerfile ./code/Dockerfile
```

本案例为 custom container runtime，因此构建过程中基于 [Dockerfile](./Dockerfile) 进行了构建镜像的操作。

2. 部署

```bash
$ s deploy --push-registry acr-internet  -y
```

3. 调用函数

```
$ s invoke -e "hello torch"
```

## 注意事项

如果您 s deploy 失败的原因， 是由于镜像过大超过 1G, 请提工单，提供主账号 uid 和 region, 申请更大的镜像限制
