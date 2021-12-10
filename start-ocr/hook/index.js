async function preInit(inputObj) {
    console.log(`\n          ___           ___           ___     
         /\\  \\         /\\  \\         /\\  \\    
        /::\\  \\       /::\\  \\       /::\\  \\   
       /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\  
      /:/  \\:\\  \\   /:/  \\:\\  \\   /::\\~\\:\\  \\ 
     /:/__/ \\:\\__\\ /:/__/ \\:\\__\\ /:/\\:\\ \\:\\__\\
     \\:\\  \\ /:/  / \\:\\  \\  \\/__/ \\/_|::\\/:/  /
      \\:\\  /:/  /   \\:\\  \\          |:|::/  / 
       \\:\\/:/  /     \\:\\  \\         |:|\\/__/  
        \\::/  /       \\:\\__\\        |:|  |    
         \\/__/         \\/__/         \\|__|    
                                        `)
}

async function postInit(inputObj) {

    console.log(`\n    Welcome to the image-prediction-app application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
         ACR: https://cr.console.aliyun.com/
     
     * 关于项目的介绍，可以参考：https://github.com/devsapp/start-ai/tree/master/start-ocr/src
     * 项目初始化完成，您可以直接进入项目目录下
        1. 对s.yaml进行升级，例如将image字段内容替换为自己的ACR对应镜像地址（目标镜像地址）
        2. 进行构建：s build --use-docker --dockerfile ./code/Dockerfile
        3. 项目部署：s deploy --use-local -y
     * 如果您 s deploy 失败的原因， 是由于镜像过大超过 1G, 请提工单，提供主账号 uid 和 region, 申请更大的镜像限制\n`)
}

module.exports = {
    postInit,
    preInit
}
