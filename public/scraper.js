const puppeteer = require('puppeteer');

async function scrapeItems(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    // await page.screenshot({path: 'example.png'})

    const poster = await page.evaluate(()=> document.querySelector("h1").textContent);

    const title = await page.evaluate(() => 
        Array.from(document.querySelectorAll("div.p13n-sc-truncate-desktop-type2.p13n-sc-truncated")).map(product => 
            product.innerHTML.trim()
        )
    );

    const image = await page.evaluate(() => 
        Array.from(document.querySelectorAll("div.a-section.a-spacing-small img")).map(productImage => 
            productImage.src
        )
    );

    const price = await page.evaluate(() => 
        Array.from(document.querySelectorAll("span.a-size-medium.a-color-price")).map(product => 
            product.innerHTML.trim()
        )
    );

    const prices = document.querySelector('#price');

    let dropdown = document.createElement('div')

    prices.appendChild(price);

    // console.log(price);
    browser.close();

}

// scrapeItems('https://www.amazon.co.uk/best-sellers-books-Amazon/zgbs/books/ref=zg_bs_books_home_all');




// async function scrapeProduct(url) {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);

//     const [el] = await page.$x('//*[@id="landingImage"]');
//     const src = await el.getProperty('src');
//     const srcTxt = await src.jsonValue();

//     const [el2] = await page.$x('//*[@id="productTitle"]');
//     const txt = await el2.getProperty('textContent');
//     const rawTxt = await txt.jsonValue();

//     const [el3] = await page.$x('//*[@id="price_inside_buybox"]');
//     const txt2 = await el3.getProperty('textContent');
//     const priceTxt = await txt2.jsonValue();


//     console.log({srcTxt, rawTxt, priceTxt});

//     browser.close();
// }

// scrapeProduct('https://www.amazon.co.uk/dp/B084DWCZXZ/ref=s9_acss_bw_pg_WFpfn19u_1_i?pf_rd_m=A3P5ROKL5A1OLE&pf_rd_s=merchandised-search-top-1&pf_rd_r=R48S00D2SYWE46ETA16J&pf_rd_t=101&pf_rd_p=0c44426e-d33d-4160-a332-ac28f6a1534a&pf_rd_i=15601480031');


// scraper 2
// async function scrapeItemDetails(url) {

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);


// }