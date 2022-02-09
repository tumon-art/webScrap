import  Puppeteer  from "puppeteer";
import fs from 'fs'


(async () => {
    const browser = await Puppeteer.launch({headless:true})
    const page = await browser.newPage()
    await page.goto("https://www.aljazeera.com/news/")
    // await page.screenshot({path:'ss.png'})

    const grabParagraph = await page.evaluate(()=>{
        const headline = document.querySelectorAll('.u-clickable-card__link span')
        let arr = []
        headline.forEach(e=>{
            arr.push(e.innerHTML)
        })
        return arr
    })

    const data :any = grabParagraph
    console.log(data)
    fs.writeFile("data.txt",data[0],(err)=>{
        if (err) console.log(err)
        else console.log('done')
    })
    
    await browser.close()
})();
