# URL Shortener

總覺得網址太長不好記，傳給親朋友好友訊息又占版面嗎？使用 URL Shortener 立刻解決網址過長的困擾吧！

網站建構使用 Node.js + Express + Express-handlebars + Boostrap + Font-awesome

## 頁面呈現

<p float="left"><img src="https://raw.githubusercontent.com/z88243310/url-shortener/main/public/images/homePage.png" width="40%">
<img src="https://raw.githubusercontent.com/z88243310/url-shortener/main/public/images/showPage.png" width="40%">
<img src="/public/images/shortener.gif" width="40%"></p>

## 功能描述

- 使用者輸入任意網址
- 網址縮短功能
- 一鍵清除功能
- 一鍵複製功能
- 網址檢查功能

## 環境建置需求

- [Node.js](https://nodejs.org/en/)
- Terminal | CMD | [Git Bash](https://gitforwindows.org/)
- MongoDB 管理工具 ( [Robo 3T](https://robomongo.org/) )

## 安裝與執行步驟

1.打開終端機 cd 到指定路徑 ( 以 windows 桌面 為例 )

```text
cd C:\Users\'使用者名稱'\Desktop
```

2.下載 url-shortener 專案到本地電腦上

```text
git clone https://github.com/z88243310/url-shortener.git
```

3.進入 url-shortener 路徑

```text
cd url-shortener
```

4.在 url-shortener 路徑中，依照 package-lock.json 安裝 Express、Express-handlebars 與其他必要套件

```text
npm install
```

5.製造種子資料 ( `須先確定 MongoDB 已啟動` )

```text
npm run seed
```

6.執行專案 ( 伺服器啟動後會顯示 `App is running on http://localhost:3000` )

```text
npm run start
```

7.開啟瀏覽器輸入網址 <http://localhost:3000>

## 開發工具版本

- Node.js 14.16.0
- Express 4.17.1
- Express-handlebars 5.3.4
- Mongoose 6.0.12
- Boostrap 4.4.1 ( 搭配 popper 1.16.0 + jquery 3.4.1 )
- Font-awesome 5.6.3
- is-url 1.2.4
- Robo 3T 1.4

更新時間 : 2021.11.12
