/**
 * ============================================================================
 * 個人資料核心數據中心 (PERSONAL PROFILE DATA SOURCE)
 * 姓名：裴維戰 (BUI DUY CHIEN)
 * 學校：醒吾科技大學 (HWU) | 資訊科技應用系 (四年級)
 * 
 * 【教學說明】：
 * 本檔案集中管理全站所有個人資料、實習經歷、技能清單與專案作品。
 * 若日後需要更新學歷、新增工作經驗或更換專案，直接修改此處即可，全站自動連動！
 * ============================================================================
 */

var PERSONAL_DATA = {
  // 1. 基本身分資訊
  profile: {
    brandName: "CHIEN — PERSONAL PORTFOLIO",
    nameZh: "裴維戰",
    nameEn: "BUI DUY CHIEN",
    badgeTitle: "IT APPLICATION STUDENT | ASPIRING DEVELOPER",
    nationality: "越南 (Vietnam)",
    birthday: "2004/12/17",
    university: "醒吾科技大學 (Hsing Wu University)",
    department: "資訊科技應用系",
    academicStatus: "大學四年級 (Senior Student)",
    location: "台灣 (Taiwan) / 越南 (Vietnam)",
    heroQuote: "「我知道自己想要什麼，剩下的只是時間。」",
    heroQuoteVi: "“Tôi biết mình muốn gì. Phần còn lại chỉ là thời gian.”",
    heroDescription: "「一名來自越南、在台灣學習資訊科技的學生，持續累積實務經驗，探索程式設計與遊戲開發，並朝自己的目標前進。」",
    heroDescriptionVi: "Một sinh viên Việt Nam đang học Công nghệ thông tin tại Đài Loan, tích lũy kinh nghiệm thực tế, khám phá lập trình và phát triển game, đồng thời từng bước tiến tới mục tiêu của mình.",
    avatarUrl: "./images/profile/avatar.svg"
  },

  // 2. 關於我 (About Me)
  about: {
    title: "不只是學習，而是不斷成長。",
    paragraphs: [
      "我是一名來自越南、目前於台灣醒吾科技大學就讀「資訊科技應用系」的大四學生。在異地求學的這幾年中，我不僅掌握了繁體中文的日常生活與職場溝通能力，更將專注力投注於資訊科技與軟體實務的核心領域。",
      "我的主要興趣涵蓋電腦程式設計、現代網頁全端架構、電腦視覺 (Computer Vision) 以及 3D 遊戲開發。對我而言，學習程式語言不僅僅是為了應付課堂作業，而是為了親手打造出能夠真正運作、具備實質價值的數位產品。",
      "在課堂理論之外，我也透過企業現場實習累積了珍貴的團隊協作與工業製程經驗。我深信『紮實的實作是最好的學習捷徑』，並期許自己持續保持謙遜與求知慾，在科技領域扎根成長。"
    ],
    highlights: [
      { label: "就學背景", val: "台灣大專院校 • 資訊科技應用系" },
      { label: "語言能力", val: "越南語 (母語) • 繁體中文 • 專業英語" },
      { label: "專業追求", val: "物件導向程式設計 • 演算法邏輯 • 實務除錯" },
      { label: "工作態度", val: "守時負責 • 跨部門適應力 • 重視細節規範" }
    ]
  },

  // 3. 語言能力 (Languages) - 真實陳述，不造假百分比
  languages: [
    { name: "越南語 (Tiếng Việt)", level: "母語 (Native Speaker)", note: "流暢口語表達、書寫與專業溝通" },
    { name: "繁體中文 (Traditional Chinese)", level: "在台求學與實習通用", note: "具備台灣職場工作指示理解、日常會話與學術閱讀能力" },
    { name: "英語 (English)", level: "技術文檔閱讀與日常應用", note: "能閱讀英文官方開發手冊、API 規格書與程式註解" }
  ],

  // 4. 學歷背景 (Education Timeline)
  education: [
    {
      period: "2023 - 至今 (在學中)",
      school: "醒吾科技大學 (Hsing Wu University)",
      degree: "學士學位 (在學)",
      major: "資訊科技應用系 (Department of Applied Information Technology)",
      status: "大學四年級 (即將畢業)",
      location: "新北市林口區，台灣",
      courses: [
        "物件導向程式設計 (C# / Python)",
        "資料庫系統與應用 (MySQL / 3NF 正規化)",
        "網頁前端設計與應用 (HTML5 / CSS3 / JavaScript)",
        "電腦網路與資訊安全基礎",
        "演算法與資料結構基礎"
      ],
      description: "系統性學習電腦軟硬體整合、資料庫規劃、前端互動設計與軟體工程流程，並積極將課堂作業轉化為個人公開實作成果。"
    }
  ],

  // 5. 工作經歷與實習 (Work Experience) - 真實嚴謹，不誇大
  experience: [
    {
      period: "實習期間 (在學實務養成)",
      company: "景碩科技股份有限公司 (Kinsus Interconnect Technology Corp.)",
      role: "生產製造部 實習生 (Manufacturing & Operations Intern)",
      department: "主要服務：Plasma (電漿表面處理) 部門 / 機動跨區支援",
      location: "桃園市 / 新竹縣，台灣",
      duties: [
        "嚴格遵循無塵室安全規範 (SOP) 與標準作業程序，負責生產機台進出料與製程參數監控。",
        "於 Plasma (電漿處理) 關鍵工段協助技術人員排除日常操作異常，確保產品表面清潔度符合晶圓封裝要求。",
        "具備高度團隊配合度與敏捷度，當其他製程區域面臨人力吃緊時，積極主動跨區支援產線運轉。",
        "在快節奏與高標準的半導體載板製造環境中，鍛鍊出抗壓性、細心度、同理心與嚴謹的責任感。"
      ]
    }
  ],

  // 6. 專業技能 (Skills) - 不使用虛假百分比，標註真實狀態
  skillsCategories: [
    {
      category: "Programming (程式語言)",
      description: "核心邏輯與語法掌握，專注於語意規範與演算法練習",
      items: [
        { name: "C#", status: "學習中", type: "core", desc: "物件導向基礎、類別繼承、介面設計與 Unity 腳本邏輯" },
        { name: "HTML5 / CSS3", status: "熟練應用", type: "proficient", desc: "語意化排版、Flexbox、CSS Grid、響應式斷點 (RWD)" },
        { name: "JavaScript (ES6+)", status: "實作應用", type: "applied", desc: "DOM 操作、非同步 Fetch、事件監聽、純前端架構" },
        { name: "Python", status: "學習中", type: "core", desc: "基本資料型態、演算法練習、OpenCV 影像處理整合" }
      ]
    },
    {
      category: "Development Interests (開發領域與探索)",
      description: "長期投入之核心技術方向與實踐目標",
      items: [
        { name: "Game Development", status: "核心目標", type: "target", desc: "3D 物理引擎概念、角色移動狀態機、遊戲迴圈邏輯" },
        { name: "Web Development", status: "持續實作", type: "applied", desc: "個人作品集平台、動態搜尋過濾、無框架輕量化部署" },
        { name: "Computer Vision", status: "專案探索", type: "learning", desc: "OpenCV 影像灰階轉換、Haar 人臉偵測、相機即時串流" }
      ]
    },
    {
      category: "Tools & Environment (工具與開發環境)",
      description: "日常開發、協作與版本控制工具鏈",
      items: [
        { name: "Visual Studio Code", status: "主要 IDE", type: "proficient", desc: "模組化擴充套件、Live Server、前端與 Python 除錯" },
        { name: "Git & GitHub", status: "版本控制", type: "applied", desc: "Commit 規範、Branch 分支管理、GitHub Pages 線上發布" },
        { name: "OpenCV (cv2)", status: "學習中", type: "learning", desc: "電腦視覺函式庫呼叫、影像特徵分析與標籤繪製" },
        { name: "MySQL Workbench", status: "課堂實務", type: "applied", desc: "ER Diagram 實體關聯模型規劃、多表 JOIN 複合查詢" }
      ]
    }
  ],

  // 7. 專案作品 (Projects) - 結構化卡片
  projects: [
    {
      id: "proj-opencv",
      title: "OpenCV 人臉偵測與辨識技術學習紀錄",
      category: "Computer Vision",
      status: "學習中",
      statusClass: "status-learning",
      technologies: ["Python", "OpenCV", "Haar Cascade", "Computer Vision"],
      description: "運用 Python 與 OpenCV 開源電腦視覺函式庫，實作即時網路攝影機 (Webcam) 視訊串流之人臉捕捉、特徵點標記與座標繪製。探索影像灰階處理、高斯模糊降噪與特徵比對之底層演算法概念。",
      imageUrl: "./images/projects/opencv.svg",
      demoUrl: "https://github.com/duychien0903",
      githubUrl: "https://github.com/duychien0903",
      features: [
        "攝影機即時視訊串流解析 (cv2.VideoCapture)",
        "預訓練 Haar Cascade 分類器進行多尺度人臉特徵搜尋",
        "動態繪製偵測邊界框與置信度 (Confidence) 即時標籤",
        "記錄不同光影與角度下模型辨識率之實作心得筆記"
      ]
    },
    {
      id: "proj-portfolio",
      title: "大專院校個人作業成果展示平台",
      category: "Web Development",
      status: "已完成",
      statusClass: "status-completed",
      technologies: ["HTML5", "CSS3", "JavaScript", "Decoupled Data", "GitHub Pages"],
      description: "為大學日常實作課程量身規劃之成果呈報網站。採『數據與介面完全解耦』純原生架構，具備即時關鍵字搜尋、課程領域分類標籤、作業詳情彈窗與佐證截圖高清無損燈箱檢視等功能。",
      imageUrl: "./images/projects/assignment-platform.svg",
      demoUrl: "https://duychien0903.github.io/student-assignment-portfolio/",
      githubUrl: "https://github.com/duychien0903/student-assignment-portfolio",
      features: [
        "無須 Node/Webpack 編譯，雙擊即開，100% 離線與靜態部署相容",
        "Hero 即時統計看板（動態計算已發布總數、通過率、最近更新日）",
        "全螢幕佐證截圖 Lightbox 檢視器，支援鍵盤 ESC 與手勢",
        "已成功部署發布於 GitHub Pages 與 Neocities 公開網址"
      ]
    },
    {
      id: "proj-game-plan",
      title: "3D 遊戲開發學習計畫與物理架構探索",
      category: "Game Development",
      status: "學習中的個人目標",
      statusClass: "status-target",
      technologies: ["C#", "Unity Engine (3D)", "Mathematics", "Physics"],
      description: "結合物件導向 C# 程式設計基礎，探索 3D 空間座標系、向量運算（內積/外積）、剛體碰撞 (Rigidbody) 與攝影機視角跟隨演算法。目標在畢業前完成一款具備基礎關卡機制之 3D 原型展示 Demo。",
      imageUrl: "./images/projects/game-dev.svg",
      demoUrl: "#projects",
      githubUrl: "https://github.com/duychien0903",
      features: [
        "紮實練習 C# 物件導向三大特性（封裝、繼承、多型）於遊戲物件之應用",
        "深入理解 3D 空間變換矩陣與歐拉角/四元數旋轉原理",
        "規劃角色有限狀態機 (FSM: Idle / Run / Jump / Attack)",
        "以開源社群技術文檔為依託，建立循序漸進之實作學習路線"
      ]
    }
  ],

  // 8. 職涯目標 (Career Goals) - 「把目標變成實力」
  careerGoals: [
    {
      step: "01",
      title: "紮實深耕程式設計與演算法能力",
      desc: "持續精進 C#、Python 與 JavaScript 核心語法，重視資料結構、演算法複雜度與乾淨代碼 (Clean Code) 實踐。"
    },
    {
      step: "02",
      title: "累積具備實際價值的個人作品集",
      desc: "拒絕空洞理論，每一季堅持完成至少一項具備完整 GitHub 原始碼、清晰 README 與可線上試玩/預覽之實質專案。"
    },
    {
      step: "03",
      title: "深入掌握軟體與遊戲開發完整工作流",
      desc: "從需分析、架構規劃、版本控制到自動化部署，逐步熟悉軟體工程團隊之標準開發生命週期。"
    },
    {
      step: "04",
      title: "保持高度跨文化團隊適應力與溝通素養",
      desc: "將在台求學與景碩科技實習所磨練之跨語言抗壓性與嚴謹態度，轉化為進入科技產業的最佳職場競爭力。"
    },
    {
      step: "05",
      title: "銜接科技產業，邁向全方位軟體工程師",
      desc: "做好萬全準備迎接畢業後的科技業實習與工程師職位，將每一份投入轉化為實際解決問題的工程能力。"
    }
  ],

  // 9. 聯絡方式與社交連結 (Contact Links)
  contact: {
    email: "duychien17122004@gmail.com", // 學生電子信箱（可替換）
    emailPlaceholderNote: "歡迎透過電子信箱洽詢技術交流或實習工作機會",
    github: "https://github.com/duychien0903",
    neocities: "https://hwu1111310133.neocities.org",
    assignmentSite: "https://duychien0903.github.io/student-assignment-portfolio/",
    linkedin: "https://linkedin.com/in/duychien-bui" // 預留 LinkedIn 欄位
  }
};

// 掛載至全域 window 物件確保無論瀏覽器載入順序皆能存取
if (typeof window !== "undefined") {
  window.PERSONAL_DATA = PERSONAL_DATA;
}
