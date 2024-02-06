const puppeteer = require('puppeteer')

async function start() {
    const browser = await puppeteer.launch({headless: 'true',});
    const page = await browser.newpage();
    await page.goto('https://https://www.coingecko.com/');
    await page.screenshot({path: 'example.png'});

    await browser.close();

    run();
}