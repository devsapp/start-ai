async function preInit(inputObj) {
    console.log(`\n     ___   __   __  _______  _______  _______ 
    |   | |  |_|  ||   _   ||       ||       |
    |   | |       ||  |_|  ||    ___||    ___|
    |   | |       ||       ||   | __ |   |___ 
    |   | |       ||       ||   ||  ||    ___|
    |   | | ||_|| ||   _   ||   |_| ||   |___ 
    |___| |_|   |_||__| |__||_______||_______|
                                        `)
}

async function postInit(inputObj) {

    console.log(`\n    Welcome to the image-prediction-app application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
         NAS: https://nas.console.aliyun.com/
     
     * 关于项目的介绍，可以参考：https://github.com/devsapp/start-ai/tree/master/image-prediction-app/src
     * 项目初始化完成，您可以直接进入项目目录下
        1. 对s.yaml进行升级，例如将image字段内容替换为自己的ACR对应镜像地址（目标镜像地址）
        2. 项目部署：s deploy --use-local -y\n`)
}


module.exports = {
    postInit,
    preInit
}
