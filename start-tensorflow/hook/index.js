async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n      __                                     _____.__                 
    _/  |_  ____   ____   __________________/ ____\\  |   ______  _  __
    \\   __\\/ __ \\ /    \\ /  ___/  _ \\_  __ \\   __\\|  |  /  _ \\ \\/ \\/ /
     |  | \\  ___/|   |  \\\\___ (  <_> )  | \\/|  |  |  |_(  <_> )     / 
     |__|  \\___  >___|  /____  >____/|__|   |__|  |____/\\____/ \\/\\_/  
               \\/     \\/     \\/                                       
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
