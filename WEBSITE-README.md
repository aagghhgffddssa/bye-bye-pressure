# Bye Bye Pressure 一頁式介紹網站

## 編輯與預覽

目前部署為無須安裝套件的靜態網站。Vinext 起始範本仍保留，實際網站由以下檔案構成：

- `website/index.html`：網站內容、導覽、服務與聯絡入口。
- `website/style.css`：桌機、平板與手機版面。
- `website/script.js`：LINE ID 複製與不支援剪貼簿時的提示。
- `public/workshop-0.jpg` 至 `workshop-3.jpg`：已壓縮的實際工作坊照片。
- `.openai/hosting.json`：網站 ID 與靜態部署設定。

執行 `node scripts/build-static.mjs` 產生 `dist/`；執行 `node scripts/preview-static.mjs`，開啟 http://127.0.0.1:4173。

## 內容來源

- 介紹簡報：https://drive.google.com/file/d/1ulnbgheokhw7zyzOr9kKt2Dw0AGAyznf/view
- 照片與影片索引：https://docs.google.com/document/d/1PGU-LU1rEdCamXPbtV_ri2mGpCKcjvGAwkOkgec8vMM/edit
- 企業現場精選：https://drive.google.com/drive/folders/1Dkfau7RI_9yuVKelFdxmyiEWgY9G3D2N
- 玉山銀行照片：https://drive.google.com/drive/folders/1WFjJacNgsxGUvznhgSFjxmmQDC2BwYQR
- 營隊影片：https://drive.google.com/drive/folders/1OcmDYmo_FdbLTTiRb1moNz5qhvBvGC6S

「裕融集團」名稱以介紹簡報為準；照片索引的上一層資料夾名稱是「裕隆集團」。26 年與 150 場以上的數據依 2026 年介紹簡報。營隊自評結果保留 9 份有效問卷及單一案例的適用範圍。

聯絡資訊依簡報：劉欣宜（糖糖）、02-8631-0133、whatsyoung@gmail.com、LINE ID lina5310。沒有建立收件後端或假送出表單；Email 和電話直接交由使用者裝置開啟。影片與相簿開啟原 Google Drive 資料夾，讀取權限依原設定。

## 驗證

已以 Microsoft Edge headless 檢查 1440、390、320 px 寬度，檢查圖片載入、水平溢出、FAQ 展開、頁內導覽、LINE 提示及 mailto / tel 連結。截圖及結果保存在本機 `outputs/`，不隨網站部署。未實際寄信、撥號，或送出任何聯絡訊息。

Google Fonts 載入失敗時使用系統 sans-serif / serif 字型。依使用者發布要求，Sites 網站已開放公開訪客；GitHub Pages 使用 `.github/workflows/pages.yml`，每次推送 `main` 自動重新發布，僅上傳 `dist/` 網站內容。

新增介紹照片：IMG_8058.JPG，來源 https://drive.google.com/file/d/1XWU03xDzJlZbipCtf6EGhbmd8KtdEK3A/view ，網站檔名 public/workshop-discussion.jpg。以原始比例顯示，不裁切。服務對象、練習內容及安排參考依既有 2026 介紹簡報整理；案例時數作為參考，非固定方案承諾。

2026-11-11 閱讀架構調整：首頁 → 需求快速入口 → 服務摘要及可展開細節 → 戲劇工作坊方法／八堂課路徑 → 結構化案例／營隊影片 → 專業團隊 → FAQ → 合作聯絡。每案保留原日期、對象、人數、時數與回饋；五張活動照片各用一次，新增案例連結。案例與團隊照片改以完整比例顯示，避免裁切人物；手機首圖也保留完整比例。
