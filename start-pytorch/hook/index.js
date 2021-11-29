async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n    __________        ___________                  .__     
    \\______   \\___.__.\\__    ___/__________   ____ |  |__  
     |     ___<   |  |  |    | /  _ \\_  __ \\_/ ___\\|  |  \\ 
     |    |    \\___  |  |    |(  <_> )  | \\/\\  \\___|   Y  \\
     |____|    / ____|  |____| \\____/|__|    \\___  >___|  /
               \\/                                \\/     \\/ 
                                        `)
    console.log(`\n    Welcome to the image-prediction-app application
     This application requires to open these services: 
         FC : https://fc.console.aliyun.com/
         CR : https://cr.console.aliyun.com/
     This application can help you quickly deploy the image-prediction-app project.
         Full yaml configuration : https://github.com/devsapp/fc/blob/jiangyu-docs/docs/zh/yaml.md
     The application homepage: https://github.com/devsapp/start-ai\n`)
}

module.exports = {
    postInit,
    preInit
}
