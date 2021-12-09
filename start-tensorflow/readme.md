## 简介

首先初始化该示例项目。

```bash
$ s init devsapp/start-tensorflow -d start-tensorflow
$ cd start-tensorflow
```

1. 构建

修改 s.yml 中 `customContainerConfig` 配置下的 `image` 选项，修改成您自己的阿里云容器服务 ACR 镜像地址，然后执行如下指令：

```bash
$ s build --use-docker --dockerfile ./code/Dockerfile
```

> 本案例为 custom container runtime，因此构建过程中基于 [Dockerfile](./Dockerfile) 进行了构建镜像的操作。

> 本案例在 Action 中已经声明了这个步骤，所以是可以自动化执行的。

2. 部署

```bash
$ s deploy  -y
```

3. 调用函数

```
$ s invoke -e "hello tensorflow"
```

## 注意事项

如果您 s deploy 失败的原因， 是由于镜像过大超过 1G, 请提工单，提供主账号 uid 和 region, 申请更大的镜像限制
