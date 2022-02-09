"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const fs_1 = __importDefault(require("fs"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_1.default.launch({ headless: true });
    const page = yield browser.newPage();
    yield page.goto("https://www.aljazeera.com/news/");
    // await page.screenshot({path:'ss.png'})
    const grabParagraph = yield page.evaluate(() => {
        const headline = document.querySelectorAll('.u-clickable-card__link span');
        let arr = [];
        headline.forEach(e => {
            arr.push(e.innerHTML);
        });
        return arr;
    });
    const data = grabParagraph;
    console.log(data);
    fs_1.default.writeFile("data.txt", data[0], (err) => {
        if (err)
            console.log(err);
        else
            console.log('done');
    });
    yield browser.close();
}))();
//# sourceMappingURL=app.js.map