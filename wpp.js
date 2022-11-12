const puppeteer = require('puppeteer');



module.exports = async function (page,phone,mensagem) {
    await page.goto('https://web.whatsapp.com/send?phone=+' + phone + '&text=' + mensagem + '');
    await delay(10000);
    console.log("Enviando mensagem");

    await page.click("span[data-testid='send']");
    await delay(1000);
     return
 

}
function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}