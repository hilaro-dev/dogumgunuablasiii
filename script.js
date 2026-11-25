/* ==========================================================================
   COZY BIRTHDAY WEBSITE FOR ELİF - CONFIGURATION & INTERACTIVE ENGINE
   ========================================================================== */

/**
 * TÜM ÖZELLEŞTİRİLEBİLİR İÇERİKLER (CONFIG)
 * Fotoğrafları (1..20), başlıkları, notları, Elif & Zeynep'in
 * konuşma balonlarını ve final doğum günü mektubunu buradan kolayca düzenleyebilirsiniz.
 */
const CONFIG = {
  siteTitle: "İyi ki Doğdun Elif!",

  // 20 Adet Polaroid Fotoğraf ve Arkasındaki Notlar
  // Kendi fotoğraflarınızı "images/1.jpg" ... "images/19.jpg" ve "images/20.gif" olarak klasöre ekleyebilirsiniz.
  // Dosya henüz yoksa otomatik olarak tatlı pastel illüstrasyonlar gösterilir.
  // Not: Bu diziden fotoğraf ekler veya çıkarırsanız sayaç (0 / N Anı Açıldı) otomatik uyum sağlar.
  photos: [
    {
      id: 1,
      image: "images/1.jpg",
      title: "Kahve & Sonsuz Sohbet",
      note: "Bir fincan kahve, sonsuz sohbet ve senin o güzel enerjin... Yeni yaşında daha da güzel kafelerde otururuz umarımmmm",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #f9d5c6 0%, #e7c8f2 100%)",
        icon: "coffee"
      }
    },
    {
      id: 2,
      image: "images/2.jpg",
      title: "İkiye Katlanan Neşe",
      note: "Gülüşlere bakk biz bir araya gelince ortamın neşesi anında ikiye katlanıyor. İyi ki varsınn",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #ffd4e2 0%, #ffefca 100%)",
        icon: "sunflower"
      }
    },
    {
      id: 3,
      image: "images/3.jpg",
      title: "Bu Ne Şıklık",
      note: "Bu ne şıklık küçük, maşallah vallaaa",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #f7c6d8 0%, #ffd9b8 100%)",
        icon: "sunglasses"
      }
    },
    {
      id: 4,
      image: "images/4.jpg",
      title: "Sıcak Sarılmalarımız",
      note: "Şu kareden akan sevgiye bak ya... Ne kadar büyürsek büyüyelim yanağıma kondurduğun öpücükler ve o sıcak sarılmalarımız hiç değişmesin ablam.",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #dcd0f5 0%, #ffd6e0 100%)",
        icon: "sparkles"
      }
    },
    {
      id: 5,
      image: "images/5.jpg",
      title: "Keyifler Yerinde",
      note: "Koltuklara kurulmuşuz, keyifler yerindee. Seninle yan yana oturup vakit geçirdiğim her an benim için paha biçilemez ablişko",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #cce8db 0%, #fef0c9 100%)",
        icon: "coffee"
      }
    },
    {
      id: 6,
      image: "images/6.jpg",
      title: "En Sağlam Dağım",
      note: "Sımsıkı sarıldığımız, yüzümüzde kocaman gülümsemelerle dolu o güzel gün... Hayatta sırtımı yaslayabileceğim en sağlam dağ sensin ablam.",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #c6e7f7 0%, #fff0c9 100%)",
        icon: "sunflower"
      }
    },
    {
      id: 7,
      image: "images/7.jpg",
      title: "Ayna Selfiesi",
      note: "Birlikte bir yere gidip de ayna selfiesi çekmezsek olmazdı tabii! Seninle en sıradan anlar bile komik ve unutulmaz bir anıya dönüşüyor abla.",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #d7c7f4 0%, #f8c9d8 100%)",
        icon: "camera"
      }
    },
    {
      id: 8,
      image: "images/8.jpg",
      title: "Ayrı Bir Uyum",
      note: "Nerede bir ayna, orada biz! Yan yana durduğumuz her karede ayrı bir uyumumuz var. İyi ki benim ablamsın!",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #ffe2a8 0%, #ffb8d0 100%)",
        icon: "sparkles"
      }
    },
    {
      id: 9,
      image: "images/9.jpg",
      title: "En Güzel Manzara",
      note: "Arkada koca bir manzara ama benim gözümde en güzel manzara her zaman senin o mutlu gülüşün ablam. Birlikte daha nice yeni yerler keşfedelim!",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #ffd8c2 0%, #f7d6e6 100%)",
        icon: "sunflower"
      }
    },
    {
      id: 10,
      image: "images/10.jpg",
      title: "Taş Sokaklar & Biz",
      note: "Taş sokaklar, güzel anılar ve yine biz... Seninle yola çıkmak, yeni yerler görmek dünyanın en güzel şeyi ablişkom.",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #e2d1f9 0%, #c8eadf 100%)",
        icon: "camera"
      }
    },
    {
      id: 11,
      image: "images/11.jpg",
      title: "Her Zaman Yan Yana",
      note: "Sana böyle sımsıkı sarıldığımda içim hep çok rahatlıyor. Ne olursa olsun her zaman birbirimizin yanındayız ablam, bunu hiç unutma!",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #f9c8d9 0%, #ffecb8 100%)",
        icon: "sparkles"
      }
    },
    {
      id: 12,
      image: "images/12.jpg",
      title: "Gece Işıkları",
      note: "Gece ışıkları, serin hava ve ikimizin bitmeyen sohbeti... Karanlıkta bile etrafı aydınlatan o güzel enerjin hiç sönmesin abla!",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #cdebd8 0%, #f9d8c6 100%)",
        icon: "sparkles"
      }
    },
    {
      id: 13,
      image: "images/13.jpg",
      title: "Omuz Omuza",
      note: "Hava biraz soğuk ve rüzgarlı ama montlara sarılıp yine gülümsüyoruz! Hayattaki tüm rüzgarlara karşı hep böyle omuz omuza duralım ablişkom.",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #f5d3c8 0%, #dcd2f7 100%)",
        icon: "sunflower"
      }
    },
    {
      id: 14,
      image: "images/14.jpg",
      title: "En Eğlenceli İkili",
      note: "Kalabalık salonların en eğlenceli ikilisi! İzlediğimiz şey ne olursa olsun, asıl güzelliği yanında senin olman ablam.",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #fff1b8 0%, #ffd1dc 100%)",
        icon: "camera"
      }
    },
    {
      id: 15,
      image: "images/15.jpg",
      title: "Çimlerde Kahve Keyfi",
      note: "Ice Latte Machiato’lar elde, yüzlerde o klasik tatlı şapşallığımız. Seninle kahve içip çimlerde oturmayı hiçbir şeye değişmem bebeğimm",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #e8cdf5 0%, #ffdfba 100%)",
        icon: "coffee"
      }
    },
    {
      id: 16,
      image: "images/16.jpg",
      title: "En Büyük Şansım",
      note: "Bu karenin yeri bende bambaşka... O gün o kadar güzel, o kadar zariftin ki! Hayatının her yeni sayfasında mutluluğuna en yakından şahit olmak benim en büyük şansım ablam.",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #ffd6c9 0%, #fff2c2 100%)",
        icon: "sparkles"
      }
    },
    {
      id: 17,
      image: "images/17.jpg",
      title: "En Doğal Halimiz",
      note: "En doğal, en biz halimiz! Süslü planlara hiç gerek yok; seninle aynı ortamda gülüp konuşmak bile bana yetiyor abla.",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #f7c5d8 0%, #d4e8f7 100%)",
        icon: "sunglasses"
      }
    },
    {
      id: 18,
      image: "images/18.jpg",
      title: "Kocaman Sevgin",
      note: "Karabaşı severken yüzlerimizde açan çiçeklere bak! Hayvanlara, insanlara, hayata olan o kocaman sevgin hep böyle taşsın ablişkom.",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #d1ecd9 0%, #ffe0d1 100%)",
        icon: "sunflower"
      }
    },
    {
      id: 19,
      image: "images/19.jpg",
      title: "Sıcak Gülüşün",
      note: "En sevdiğim karelerden biri! Şu sıcak gülüşün ömrün boyunca yüzünden hiç eksik olmasın ablam. Yeni yaşın sana en güzel sürprizleri getirsin!",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #ffe5b4 0%, #f6c4e2 100%)",
        icon: "sparkles"
      }
    },
    {
      id: 20,
      image: "images/20.gif",
      title: "Kahkahalar & Şarkılar",
      note: "Ve tabii ki finalde bizim klasik halimiz: kahkahalar, şarkılar ve sınırsız eğlence! Yeni yaşında da hep böyle avaz avaz şarkı söyleyip kahkahalar atalım ablişkom. İyi ki doğdun, seni çok seviyorum!",
      placeholderTheme: {
        bg: "linear-gradient(145deg, #ffe2a8 0%, #ffb8d0 100%)",
        icon: "cake"
      }
    }
  ],

  // Elif ve Zeynep'in Konuşma Balonu Replikleri (Emojisiz, sade düz metin)
  speechLines: {
    zeynep: [
      "İyi ki doğdun Elif!",
      "En iyi abla ödülü",
      "20 anının hepsini çevirdin mi?",
      "İyi ki benim ablamsın Elif!",
      "Bugün senin günün, dilek tut!",
      "Güneş gözlüğün yine çok havalı",
      "Seni çok seviyorum abla!"
    ],
    elif: [
      "Pasta nerede?",
      "Canım kardeşim Zeynep!",
      "Gözlüğüm başımda, keyfim yerinde",
      "Bu çayır ve peri ışıkları harika olmuş!",
      "Fotoğrafların arkasındaki notlar çok tatlı",
      "Pasta dilimimi büyük isterim!",
      "İyi ki varsın Zeynep!"
    ],
    // Elif ve Zeynep çayırda yan yana gelip birbirine baktığında gerçekleşen mini diyaloglar (Emojisiz düz metin)
    dialogues: [
      {
        firstSpeaker: "zeynep",
        firstText: "İyi ki doğdun Elif!",
        secondSpeaker: "elif",
        secondText: "İyi ki varsın canım kardeşim Zeynep!"
      },
      {
        firstSpeaker: "elif",
        firstText: "Pasta nerede?",
        secondSpeaker: "zeynep",
        secondText: "Önce bütün anıları açalım abla!"
      },
      {
        firstSpeaker: "zeynep",
        firstText: "En iyi abla ödülü",
        secondSpeaker: "elif",
        secondText: "En tatlı kardeş ödülü de Zeynep'in!"
      },
      {
        firstSpeaker: "elif",
        firstText: "20 fotoğrafın hepsi çok güzel!",
        secondSpeaker: "zeynep",
        secondText: "Daha birlikte yüzlercesini çekeceğiz!"
      }
    ]
  },

  // Tüm Anılar açıldığında beliren Final Doğum Günü Mektubu
  finalLetter: {
    title: "Canım Ablam Elif'e Doğum Günü Mektubu 💌",
    paragraphs: [
      "Canım ablam Elif, hayatımın her anında yanımda olduğun, düştüğümde elimden tuttuğun ve en güzel kahkahalarımı seninle paylaştığım için dünyanın en şanslı kardeşiyim.",
      "Sadece ablam değil; aynı zamanda en yakın arkadaşım, sırdaşım ve en büyük ilham kaynağımsın. Senin o güzel enerjin, zarafetin ve sıcacık kalbin etrafındaki herkese neşe saçıyor.",
      "Yeni yaşında hayalini kurduğun her şeyin tek tek gerçeğe dönüşmesini, yüzündeki o güzel gülümsemenin hiç eksilmemesini diliyorum. Birlikte biriktireceğimiz daha yüzlerce Polaroid anımız olsun! İyi ki doğdun, iyi ki varsın!"
    ],
    signature: "Seni çok seven kardeşin Zeynep 💖"
  }
};

/* ==========================================================================
   STATE & DOM REFERENCES
   ========================================================================== */

const state = {
  openedIds: new Set(),
  allCompleted: false,
  modalAutoOpened: false,
  currentPage: 0,
  hasSwipedOnce: false
};

const dom = {
  siteTitle: document.getElementById("site-title"),
  progressPill: document.getElementById("progress-pill"),
  progressIcon: document.getElementById("progress-icon"),
  progressText: document.getElementById("progress-text"),
  openLetterBtn: document.getElementById("open-letter-btn"),
  polaroidTrack: document.getElementById("polaroid-track"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  counterPill: document.getElementById("counter-pill"),
  swipeHint: document.getElementById("swipe-hint"),
  starsContainer: document.getElementById("stars-container"),
  cloudsContainer: document.getElementById("clouds-container"),
  fairyLightsRow: document.getElementById("fairy-lights-row"),
  meadowDecor: document.getElementById("meadow-decor"),
  avatarStage: document.getElementById("avatar-stage"),
  avatarParticles: document.getElementById("avatar-particles"),
  letterModal: document.getElementById("letter-modal"),
  letterBadge: document.getElementById("letter-badge"),
  letterModalTitle: document.getElementById("letter-modal-title"),
  letterBody: document.getElementById("letter-body"),
  letterSignature: document.getElementById("letter-signature"),
  closeLetterBtn: document.getElementById("close-letter-btn"),
  keepExploringBtn: document.getElementById("keep-exploring-btn"),
  replayConfettiBtn: document.getElementById("replay-confetti-btn"),
  confettiCanvas: document.getElementById("confetti-canvas")
};

/* ==========================================================================
   1. ATMOSPHERE: SKY STARS, PIXEL CLOUDS, FAIRY LIGHTS & MEADOW WILDFLOWERS
   ========================================================================== */

function initAtmosphere() {
  if (dom.siteTitle && CONFIG.siteTitle) {
    dom.siteTitle.textContent = CONFIG.siteTitle;
  }

  const totalPhotos = CONFIG.photos.length;
  if (dom.progressText) {
    dom.progressText.textContent = `0 / ${totalPhotos} Anı Açıldı`;
  }
  if (dom.counterPill) {
    dom.counterPill.textContent = `1 / ${totalPhotos}`;
  }
  if (dom.letterBadge) {
    dom.letterBadge.textContent = `${totalPhotos} / ${totalPhotos} Anı Tamamlandı • Sürpriz Açıldı!`;
  }

  createSkyStars();
  createPixelClouds();
  createFairyLights();
  createMeadowWildflowers();
}

function createSkyStars() {
  const starCount = 22;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "sky-star";
    star.style.left = `${(i * 19 + 7) % 96}%`;
    star.style.top = `${(i * 13 + 5) % 85}%`;
    star.style.setProperty("--twinkle-dur", `${2.2 + (i % 4) * 0.65}s`);
    star.style.setProperty("--twinkle-delay", `${(i % 5) * 0.4}s`);
    fragment.appendChild(star);
  }
  dom.starsContainer.appendChild(fragment);
}

function getPixelCloudSVG(palette) {
  return `
    <svg viewBox="0 0 32 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
      <rect x="10" y="3" width="8" height="2" fill="${palette.top}" />
      <rect x="7" y="5" width="16" height="2" fill="${palette.top}" />
      <rect x="4" y="7" width="23" height="3" fill="${palette.mid}" />
      <rect x="2" y="10" width="28" height="2" fill="${palette.mid}" />
      <rect x="3" y="12" width="26" height="2" fill="${palette.shade}" />
    </svg>
  `;
}

function createPixelClouds() {
  const cloudConfigs = [
    { top: "7%", width: "165px", speed: "76s", delay: "-12s", opacity: 0.85, type: "cream" },
    { top: "16%", width: "130px", speed: "58s", delay: "-34s", opacity: 0.78, type: "pink" },
    { top: "11%", width: "190px", speed: "88s", delay: "-52s", opacity: 0.82, type: "cream" },
    { top: "24%", width: "140px", speed: "66s", delay: "-20s", opacity: 0.74, type: "pink" },
    { top: "29%", width: "120px", speed: "54s", delay: "-43s", opacity: 0.7, type: "peach" }
  ];

  const palettes = {
    cream: { top: "#fff9ef", mid: "#ffe9d6", shade: "#f4cbbd" },
    pink: { top: "#ffeaf2", mid: "#fbd0e0", shade: "#e8afc7" },
    peach: { top: "#fff3e2", mid: "#ffd8be", shade: "#f1b59d" }
  };

  cloudConfigs.forEach((cfg) => {
    const cloud = document.createElement("div");
    cloud.className = "pixel-cloud";
    cloud.style.setProperty("--cloud-top", cfg.top);
    cloud.style.setProperty("--cloud-width", cfg.width);
    cloud.style.setProperty("--cloud-speed", cfg.speed);
    cloud.style.setProperty("--cloud-delay", cfg.delay);
    cloud.style.setProperty("--cloud-opacity", cfg.opacity);
    cloud.innerHTML = getPixelCloudSVG(palettes[cfg.type]);
    dom.cloudsContainer.appendChild(cloud);
  });
}

function createFairyLights() {
  const bulbCount = 18;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < bulbCount; i++) {
    const t = (i + 0.5) / bulbCount;
    const waveY = 28 + Math.sin(t * Math.PI * 2) * 9;

    const bulb = document.createElement("div");
    bulb.className = "fairy-bulb";
    bulb.style.left = `${t * 100}%`;
    bulb.style.top = `${waveY}px`;
    bulb.style.setProperty("--bulb-dur", `${1.7 + (i % 4) * 0.45}s`);
    bulb.style.setProperty("--bulb-delay", `${(i % 5) * 0.35}s`);
    fragment.appendChild(bulb);
  }
  dom.fairyLightsRow.appendChild(fragment);
}

function createMeadowWildflowers() {
  const fragment = document.createDocumentFragment();

  // 1) Pixel grass tufts
  const tuftCount = 26;
  for (let i = 0; i < tuftCount; i++) {
    const tuft = document.createElement("div");
    tuft.className = "grass-tuft";
    const leftPct = (i * 4.1 + (i % 3) * 1.3) % 97;
    const bottomPx = 14 + (i * 17) % 68;
    tuft.style.left = `${leftPct}%`;
    tuft.style.bottom = `${bottomPx}px`;
    tuft.innerHTML = `
      <svg viewBox="0 0 7 5" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <rect x="0" y="2" width="1" height="3" fill="#3a7228"/>
        <rect x="1" y="3" width="1" height="2" fill="#3a7228"/>
        <rect x="3" y="0" width="1" height="5" fill="#437f2f"/>
        <rect x="5" y="3" width="1" height="2" fill="#3a7228"/>
        <rect x="6" y="1" width="1" height="4" fill="#437f2f"/>
      </svg>
    `;
    fragment.appendChild(tuft);
  }

  // 2) Swaying pixel wildflowers
  const flowerColors = [
    { petal: "#ffdde8", center: "#f7b538" },
    { petal: "#fff5bd", center: "#e87a90" },
    { petal: "#f4b8d0", center: "#fff7d6" },
    { petal: "#e5d4ff", center: "#f7c04a" }
  ];

  const flowerCount = 18;
  for (let i = 0; i < flowerCount; i++) {
    const color = flowerColors[i % flowerColors.length];
    const flower = document.createElement("div");
    flower.className = "wildflower";
    const leftPct = (i * 5.7 + 2.5) % 96;
    const bottomPx = 18 + (i * 23) % 64;
    flower.style.left = `${leftPct}%`;
    flower.style.bottom = `${bottomPx}px`;
    flower.style.setProperty("--flower-dur", `${2.8 + (i % 4) * 0.5}s`);
    flower.style.setProperty("--flower-delay", `${(i % 5) * 0.4}s`);
    flower.innerHTML = `
      <svg viewBox="0 0 7 9" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
        <rect x="3" y="4" width="1" height="5" fill="#366b24"/>
        <rect x="2" y="6" width="1" height="1" fill="#4a8a34"/>
        <rect x="4" y="7" width="1" height="1" fill="#4a8a34"/>
        <rect x="3" y="1" width="1" height="1" fill="${color.petal}"/>
        <rect x="2" y="2" width="1" height="1" fill="${color.petal}"/>
        <rect x="4" y="2" width="1" height="1" fill="${color.petal}"/>
        <rect x="3" y="3" width="1" height="1" fill="${color.petal}"/>
        <rect x="3" y="2" width="1" height="1" fill="${color.center}"/>
      </svg>
    `;
    fragment.appendChild(flower);
  }

  dom.meadowDecor.appendChild(fragment);
}

/* ==========================================================================
   2. HANGING 20 POLAROIDS, FALLBACK ILLUSTRATIONS & RESPONSIVE CAROUSEL
   ========================================================================== */

function getPlaceholderIllustrationSVG(iconType) {
  switch (iconType) {
    case "sunflower":
      return `
        <svg class="placeholder-illustration" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24" fill="rgba(255,255,255,0.55)"/>
          <g fill="#f7b733">
            <ellipse cx="32" cy="14" rx="5" ry="9"/>
            <ellipse cx="32" cy="50" rx="5" ry="9"/>
            <ellipse cx="14" cy="32" rx="9" ry="5"/>
            <ellipse cx="50" cy="32" rx="9" ry="5"/>
            <ellipse cx="19" cy="19" rx="6" ry="8" transform="rotate(-45 19 19)"/>
            <ellipse cx="45" cy="45" rx="6" ry="8" transform="rotate(-45 45 45)"/>
            <ellipse cx="45" cy="19" rx="6" ry="8" transform="rotate(45 45 19)"/>
            <ellipse cx="19" cy="45" rx="6" ry="8" transform="rotate(45 19 45)"/>
          </g>
          <circle cx="32" cy="32" r="10" fill="#6b3e26"/>
          <circle cx="29" cy="30" r="1.5" fill="#fff"/>
          <circle cx="35" cy="30" r="1.5" fill="#fff"/>
          <path d="M29 34 Q32 37 35 34" stroke="#ffcad4" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
      `;
    case "coffee":
      return `
        <svg class="placeholder-illustration" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24" fill="rgba(255,255,255,0.55)"/>
          <path d="M25 18 Q23 14 26 11" stroke="#b07d62" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M33 17 Q31 13 34 10" stroke="#b07d62" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M18 24 H42 V36 C42 43 36 47 30 47 C24 47 18 43 18 36 Z" fill="#fff8f0" stroke="#7d4f38" stroke-width="2.5"/>
          <path d="M42 27 H46 C49 27 49 35 46 35 H42" fill="none" stroke="#7d4f38" stroke-width="2.5"/>
          <path d="M27 33 C27 31 24 31 24 33 C24 35 27 37 27 37 C27 37 30 35 30 33 C30 31 27 31 27 33 Z" fill="#e36b84"/>
          <ellipse cx="30" cy="48" rx="16" ry="3" fill="#e6ccb2"/>
        </svg>
      `;
    case "camera":
      return `
        <svg class="placeholder-illustration" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24" fill="rgba(255,255,255,0.55)"/>
          <rect x="14" y="22" width="36" height="26" rx="5" fill="#fff7eb" stroke="#5d4037" stroke-width="2.5"/>
          <path d="M23 22 L26 17 H38 L41 22 Z" fill="#e5989b" stroke="#5d4037" stroke-width="2"/>
          <circle cx="32" cy="35" r="8" fill="#8ecae6" stroke="#5d4037" stroke-width="2.5"/>
          <circle cx="30" cy="33" r="2.2" fill="#fff"/>
          <circle cx="43" cy="27" r="2" fill="#ffb703"/>
        </svg>
      `;
    case "sunglasses":
      return `
        <svg class="placeholder-illustration" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24" fill="rgba(255,255,255,0.55)"/>
          <rect x="12" y="26" width="17" height="13" rx="4" fill="#3b2832" stroke="#8d2d46" stroke-width="2.5"/>
          <rect x="35" y="26" width="17" height="13" rx="4" fill="#3b2832" stroke="#8d2d46" stroke-width="2.5"/>
          <path d="M29 30 Q32 27 35 30" stroke="#8d2d46" stroke-width="2.5" fill="none"/>
          <line x1="15" y1="29" x2="20" y2="35" stroke="rgba(255,255,255,0.55)" stroke-width="2" stroke-linecap="round"/>
          <line x1="38" y1="29" x2="43" y2="35" stroke="rgba(255,255,255,0.55)" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `;
    case "sparkles":
      return `
        <svg class="placeholder-illustration" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24" fill="rgba(255,255,255,0.55)"/>
          <path d="M32 14 L36 27 L49 31 L36 35 L32 48 L28 35 L15 31 L28 27 Z" fill="#f6bd60" stroke="#9c5264" stroke-width="2"/>
          <path d="M47 14 L48.5 19 L53.5 20.5 L48.5 22 L47 27 L45.5 22 L40.5 20.5 L45.5 19 Z" fill="#f28482"/>
          <path d="M18 40 L19.5 44 L23.5 45.5 L19.5 47 L18 51 L16.5 47 L12.5 45.5 L16.5 44 Z" fill="#e5989b"/>
        </svg>
      `;
    case "cake":
    default:
      return `
        <svg class="placeholder-illustration" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="24" fill="rgba(255,255,255,0.55)"/>
          <rect x="16" y="32" width="32" height="16" rx="3" fill="#fff3e6" stroke="#7f4f43" stroke-width="2.5"/>
          <path d="M16 37 Q21 41 26 37 T37 37 T48 37" fill="none" stroke="#e56b86" stroke-width="3" stroke-linecap="round"/>
          <rect x="30" y="21" width="4" height="11" fill="#ffd166" stroke="#7f4f43" stroke-width="1.5"/>
          <path d="M32 13 C29 17 30 20 32 20 C34 20 35 17 32 13 Z" fill="#ff9f1c"/>
        </svg>
      `;
  }
}

let pointerDragMoved = false;

function initPolaroids() {
  dom.polaroidTrack.innerHTML = "";

  // Organic wind sway variations cycled across the 20 cards
  const swayPresets = [
    { dur: "4.8s", delay: "-0.4s", left: "-2.3deg", right: "2.5deg" },
    { dur: "5.5s", delay: "-1.9s", left: "-2.7deg", right: "2.1deg" },
    { dur: "4.5s", delay: "-3.1s", left: "-2.0deg", right: "2.8deg" },
    { dur: "5.2s", delay: "-1.1s", left: "-2.6deg", right: "2.3deg" },
    { dur: "5.8s", delay: "-2.5s", left: "-2.2deg", right: "2.6deg" },
    { dur: "4.9s", delay: "-3.7s", left: "-2.5deg", right: "2.2deg" },
    { dur: "5.3s", delay: "-0.8s", left: "-2.1deg", right: "2.7deg" },
    { dur: "4.7s", delay: "-2.2s", left: "-2.8deg", right: "2.0deg" }
  ];

  const totalPhotos = CONFIG.photos.length;

  CONFIG.photos.forEach((photo, index) => {
    const sway = swayPresets[index % swayPresets.length];

    const slot = document.createElement("div");
    slot.className = "polaroid-slot";
    slot.dataset.index = index;

    const themeBg = photo.placeholderTheme?.bg || "linear-gradient(135deg, #ffd6e0, #ffefca)";
    const themeIcon = photo.placeholderTheme?.icon || "sparkles";

    slot.innerHTML = `
      <!-- Continuous Draped Rope Segment connecting seamlessly end-to-end across all 20 Polaroids -->
      <svg class="slot-rope-svg" viewBox="0 0 300 26" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,11 Q150,21 300,11" fill="none" stroke="rgba(75, 42, 28, 0.22)" stroke-width="4.5" />
        <path d="M0,9 Q150,19 300,9" fill="none" stroke="#8c5a3c" stroke-width="3.2" stroke-dasharray="6 2" />
      </svg>
      <div class="slot-fairy-light light-left" style="--bulb-dur: ${1.9 + (index % 3) * 0.4}s; --bulb-delay: ${(index % 5) * 0.25}s" aria-hidden="true"></div>
      <div class="slot-fairy-light light-mid" style="--bulb-dur: ${2.4 + (index % 2) * 0.35}s; --bulb-delay: ${(index % 4) * 0.3 + 0.15}s" aria-hidden="true"></div>
      <div class="slot-fairy-light light-right" style="--bulb-dur: ${2.1 + (index % 4) * 0.3}s; --bulb-delay: ${(index % 6) * 0.2 + 0.2}s" aria-hidden="true"></div>

      <div class="polaroid-sway-wrapper" style="--sway-duration: ${sway.dur}; --sway-delay: ${sway.delay}; --sway-angle-left: ${sway.left}; --sway-angle-right: ${sway.right};">
        <div class="clothespin" aria-hidden="true"></div>

        <article class="polaroid-card" role="button" tabindex="0" aria-label="${photo.title} fotoğraf kartı (${index + 1} / ${totalPhotos}). Notu okumak için dokun." data-id="${photo.id}" data-index="${index}">
          <div class="polaroid-inner">
            <!-- FRONT FACE -->
            <div class="polaroid-face polaroid-front">
              <span class="opened-badge">✓ Açıldı</span>
              <div class="photo-frame">
                <img class="photo-img" src="${photo.image}" alt="${photo.title}" loading="lazy" />
                <div class="photo-placeholder" style="--placeholder-bg: ${themeBg}; display: none;">
                  ${getPlaceholderIllustrationSVG(themeIcon)}
                  <span class="placeholder-label">${photo.title}</span>
                  <span class="placeholder-path">${photo.image}</span>
                </div>
              </div>
              <div class="polaroid-caption-bar">
                <span class="polaroid-title">${photo.title}</span>
                <span class="polaroid-turn-icon" aria-hidden="true">Çevir ↻</span>
              </div>
            </div>

            <!-- BACK FACE (Only handwritten note & card number, no date/location) -->
            <div class="polaroid-face polaroid-back">
              <div class="washi-tape" aria-hidden="true"></div>
              <div class="back-header">
                <span class="back-number">#${index + 1} / ${totalPhotos}</span>
              </div>
              <div class="back-note-container">
                <p class="back-note">${photo.note}</p>
              </div>
              <div class="back-footer">
                <span class="back-flip-prompt">Fotoğraf ↺</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    `;

    // Graceful fallback if images/1.jpg..20.gif does not exist yet
    const imgEl = slot.querySelector(".photo-img");
    const placeholderEl = slot.querySelector(".photo-placeholder");

    imgEl.addEventListener("error", () => {
      imgEl.style.display = "none";
      placeholderEl.style.display = "flex";
    });

    imgEl.addEventListener("load", () => {
      imgEl.style.display = "block";
      placeholderEl.style.display = "none";
    });

    // 3D Flip interaction on click or Enter/Space key
    const cardEl = slot.querySelector(".polaroid-card");
    const swayWrapper = slot.querySelector(".polaroid-sway-wrapper");

    const toggleCardFlip = () => {
      if (pointerDragMoved) return;
      const isNowFlipped = swayWrapper.classList.toggle("is-flipped");
      if (isNowFlipped) {
        registerMemoryOpened(photo.id, cardEl);
      }
    };

    cardEl.addEventListener("click", toggleCardFlip);
    cardEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleCardFlip();
      }
    });

    dom.polaroidTrack.appendChild(slot);
  });

  setupCarouselNavigation();
}

function isMobilePortraitSingleCardView() {
  return (
    (window.innerWidth <= 768 && window.matchMedia("(orientation: portrait)").matches) ||
    window.innerWidth <= 640
  );
}

function scrollToCardIndex(index) {
  const slots = dom.polaroidTrack.querySelectorAll(".polaroid-slot");
  if (!slots.length) return;
  const clamped = Math.max(0, Math.min(index, slots.length - 1));
  const slot = slots[clamped];

  if (isMobilePortraitSingleCardView()) {
    const offset =
      slot.offsetLeft - (dom.polaroidTrack.clientWidth - slot.clientWidth) / 2;
    dom.polaroidTrack.scrollTo({ left: offset, behavior: "smooth" });
  } else {
    const maxStartIndex = Math.max(0, slots.length - 3);
    const targetSlot = slots[Math.min(clamped, maxStartIndex)];
    dom.polaroidTrack.scrollTo({ left: targetSlot.offsetLeft, behavior: "smooth" });
  }
}

function setupCarouselNavigation() {
  const track = dom.polaroidTrack;

  const updateCarouselUI = () => {
    const slots = track.querySelectorAll(".polaroid-slot");
    if (!slots.length) return;

    const scrollLeft = track.scrollLeft;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);

    if (dom.prevBtn && dom.nextBtn) {
      dom.prevBtn.disabled = scrollLeft <= 10;
      dom.nextBtn.disabled = scrollLeft >= maxScroll - 10;
    }

    // Fade out "Kaydır →" hint after the first meaningful horizontal swipe/scroll
    if (!state.hasSwipedOnce && scrollLeft > 28) {
      state.hasSwipedOnce = true;
      if (dom.swipeHint) {
        dom.swipeHint.classList.add("fade-out");
      }
    }

    // Determine active card index for the compact "1 / 20" pill indicator
    let closestIndex = 0;
    let minDistance = Infinity;
    const referenceX =
      scrollLeft +
      (isMobilePortraitSingleCardView() ? track.clientWidth / 2 : track.clientWidth / 6);

    slots.forEach((slot, idx) => {
      const slotCenter = slot.offsetLeft + slot.clientWidth / 2;
      const dist = Math.abs(slotCenter - referenceX);
      if (dist < minDistance) {
        minDistance = dist;
        closestIndex = idx;
      }
    });

    state.currentPage = closestIndex;
    const total = CONFIG.photos.length;

    if (dom.counterPill) {
      dom.counterPill.textContent = `${closestIndex + 1} / ${total}`;
    }
  };

  track.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateCarouselUI);
  });

  // Left / Right Arrow Navigation Buttons
  if (dom.prevBtn) {
    dom.prevBtn.addEventListener("click", () => {
      const step = isMobilePortraitSingleCardView() ? 1 : 3;
      scrollToCardIndex(state.currentPage - step);
    });
  }

  if (dom.nextBtn) {
    dom.nextBtn.addEventListener("click", () => {
      const step = isMobilePortraitSingleCardView() ? 1 : 3;
      scrollToCardIndex(state.currentPage + step);
    });
  }

  // Mouse Wheel Horizontal Scroll Support on Desktop/Landscape
  track.addEventListener(
    "wheel",
    (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        track.scrollBy({
          left: e.deltaY * 1.15,
          behavior: "auto"
        });
      }
    },
    { passive: false }
  );

  // Mouse Drag-to-Scroll Support on Desktop
  let isPointerDown = false;
  let startX = 0;
  let startScrollLeft = 0;

  track.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    isPointerDown = true;
    pointerDragMoved = false;
    startX = e.pageX;
    startScrollLeft = track.scrollLeft;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isPointerDown) return;
    const dx = e.pageX - startX;
    if (Math.abs(dx) > 7) {
      pointerDragMoved = true;
      track.classList.add("is-dragging");
      track.scrollLeft = startScrollLeft - dx;
    }
  });

  const endDrag = () => {
    if (!isPointerDown) return;
    isPointerDown = false;
    track.classList.remove("is-dragging");
    setTimeout(() => {
      pointerDragMoved = false;
    }, 40);
  };

  window.addEventListener("mouseup", endDrag);
  window.addEventListener("resize", updateCarouselUI);
  setTimeout(updateCarouselUI, 60);
}

/* ==========================================================================
   3. PROGRESS TRACKING & FINAL BIRTHDAY SURPRISE FOR ELİF
   ========================================================================== */

function registerMemoryOpened(photoId, cardEl) {
  cardEl.classList.add("was-opened");

  if (state.openedIds.has(photoId)) {
    return;
  }

  state.openedIds.add(photoId);
  const count = state.openedIds.size;
  const total = CONFIG.photos.length;

  dom.progressText.textContent = `${count} / ${total} Anı Açıldı`;
  dom.progressPill.classList.remove("bump");
  void dom.progressPill.offsetWidth;
  dom.progressPill.classList.add("bump");

  if (count === total && !state.allCompleted) {
    state.allCompleted = true;
    triggerAllMemoriesUnlocked();
  }
}

function triggerAllMemoriesUnlocked() {
  const total = CONFIG.photos.length;
  dom.progressIcon.textContent = "👑";
  dom.progressPill.classList.add("completed");
  dom.openLetterBtn.classList.remove("hidden");

  if (dom.letterBadge) {
    dom.letterBadge.textContent = `${total} / ${total} Anı Tamamlandı • Sürpriz Açıldı!`;
  }

  // 1) Burst pastel & gold confetti!
  launchConfettiBurst(160);

  // 2) Both Elif & Zeynep pixel avatars jump excitedly with heart particles!
  triggerCelebrationAvatarJump();

  // 3) Auto-open the Final Birthday Letter modal once after a short moment
  if (!state.modalAutoOpened) {
    state.modalAutoOpened = true;
    setTimeout(() => {
      openLetterModal();
    }, 1800);
  }
}

function initLetterModal() {
  if (CONFIG.finalLetter) {
    dom.letterModalTitle.textContent = CONFIG.finalLetter.title;
    dom.letterBody.innerHTML = CONFIG.finalLetter.paragraphs
      .map((p) => `<p>${p}</p>`)
      .join("");
    dom.letterSignature.textContent = CONFIG.finalLetter.signature;
  }

  dom.openLetterBtn.addEventListener("click", () => {
    openLetterModal();
    launchConfettiBurst(80);
  });

  dom.closeLetterBtn.addEventListener("click", closeLetterModal);
  dom.keepExploringBtn.addEventListener("click", closeLetterModal);

  dom.letterModal.addEventListener("click", (e) => {
    if (e.target === dom.letterModal) {
      closeLetterModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !dom.letterModal.classList.contains("hidden")) {
      closeLetterModal();
    }
  });

  dom.replayConfettiBtn.addEventListener("click", () => {
    launchConfettiBurst(140);
    triggerCelebrationAvatarJump();
  });
}

function openLetterModal() {
  dom.letterModal.classList.remove("hidden");
}

function closeLetterModal() {
  dom.letterModal.classList.add("hidden");
}

/* ==========================================================================
   4. WALKING PIXEL-ART CHIBI AVATARS IN THE MEADOW (ELİF & ZEYNEP)
   ========================================================================== */

const PALETTE = {
  H: "#231614",
  h: "#3b2622",
  G: "#14131a",
  g: "#59607a",
  S: "#fcd6b8",
  E: "#241717",
  B: "#f3959b",
  M: "#c85b64",
  R: "#8b1e3f",
  r: "#6b132e",
  L: "#16141a",
  K: "#f2c65e",
  P: "#262530",
  p: "#1d1c25",
  F: "#15141a",
  T: "#4e3528",
  t: "#3a261b",
  N: "#eaf2ff"
};

// ELİF SPRITE (16x20): Shoulder-length wavy dark hair, sunglasses on head, burgundy long-sleeve top, belt buckle, dark pants
const ELIF_BASE_TOP = [
  "....HHHHHHHH....",
  "...HHhHHHHhHH...",
  "..HGgGGHHGGgGH..",
  "..HGGGGHHGGGGH..",
  "..HHHHHSSHHHHH..",
  "..HHhSSSSSShHH..",
  ".HHSSSSSSSSSSHH.",
  ".HhSSEBSSBESShH.",
  ".HHSSSSSSSSSSHH.",
  ".HhHSSSMMSSSHhH.",
  "..HHhHSSSShHHH..",
  "..H.RRRRRRRR.H..",
  "....rRRRRRRr....",
  "...RRRRRRRRRR...",
  "...RRrRRRRrRR...",
  "...SSRrRRrRSS...",
  "....LLLKKLLL...."
];

const ELIF_LEGS = {
  idle: [
    "....PPP..PPP....",
    "....PPP..PPP....",
    "....FFF..FFF...."
  ],
  walk1: [
    "....PPP..pp.....",
    "...PPP....pp....",
    "...FFF....FF...."
  ],
  walk2: [
    ".....pp..PPP....",
    "....pp....PPP...",
    "....FF....FFF..."
  ]
};

// ZEYNEP SPRITE (16x20): Shoulder-length wavy dark hair, relaxed dark brown t-shirt, tiny silver necklace (NN), dark pants
const ZEYNEP_BASE_TOP = [
  "....HHHHHHHH....",
  "...HHhHHHHhHH...",
  "..HHHHHHHHHHHH..",
  "..HHhHHHHHHhHH..",
  "..HHHHHSSHHHHH..",
  "..HHhSSSSSShHH..",
  ".HHSSSSSSSSSSHH.",
  ".HhSSEBSSBESShH.",
  ".HHSSSSSSSSSSHH.",
  ".HhHSSSMMSSSHhH.",
  "..HHhHSSSShHHH..",
  "..H.TTTNNTTT.H..",
  "....tTTNNTTt....",
  "...TTTTTTTTTT...",
  "...SS.TTTT.SS...",
  "...SS.tTTt.SS...",
  "....PPPPPPPP...."
];

const ZEYNEP_LEGS = {
  idle: [
    "....PPP..PPP....",
    "....PPP..PPP....",
    "....FFF..FFF...."
  ],
  walk1: [
    "....PPP..pp.....",
    "...PPP....pp....",
    "...FFF....FF...."
  ],
  walk2: [
    ".....pp..PPP....",
    "....pp....PPP...",
    "....FF....FFF..."
  ]
};

function drawPixelSprite(canvas, topRows, legRows) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const rows = [...topRows, ...legRows];
  const scale = 2; // 16x20 -> 32x40 canvas

  for (let y = 0; y < rows.length; y++) {
    const row = rows[y];
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch !== "." && PALETTE[ch]) {
        ctx.fillStyle = PALETTE[ch];
        ctx.fillRect(x * scale, y * scale, scale, scale);
      }
    }
  }
}

const avatars = {
  elif: {
    id: "elif",
    wrapper: document.getElementById("avatar-elif"),
    canvas: document.getElementById("canvas-elif"),
    bubble: document.getElementById("bubble-elif"),
    topRows: ELIF_BASE_TOP,
    legs: ELIF_LEGS,
    x: 0.36,
    targetX: 0.45,
    facing: 1,
    state: "idle",
    frame: 0,
    frameTimer: 0,
    waitTimer: 40,
    bubbleTimeout: null
  },
  zeynep: {
    id: "zeynep",
    wrapper: document.getElementById("avatar-zeynep"),
    canvas: document.getElementById("canvas-zeynep"),
    bubble: document.getElementById("bubble-zeynep"),
    topRows: ZEYNEP_BASE_TOP,
    legs: ZEYNEP_LEGS,
    x: 0.62,
    targetX: 0.54,
    facing: -1,
    state: "idle",
    frame: 0,
    frameTimer: 0,
    waitTimer: 60,
    bubbleTimeout: null
  }
};

let dialogueCooldown = 140;

function initAvatars() {
  drawPixelSprite(avatars.elif.canvas, avatars.elif.topRows, avatars.elif.legs.idle);
  drawPixelSprite(avatars.zeynep.canvas, avatars.zeynep.topRows, avatars.zeynep.legs.idle);

  updateAvatarDOMPosition(avatars.elif);
  updateAvatarDOMPosition(avatars.zeynep);

  // Interactive click/tap & keyboard handlers for Elif and Zeynep
  Object.values(avatars).forEach((av) => {
    const handleInteract = (e) => {
      e.stopPropagation();
      makeAvatarJumpAndSparkle(av);
      const lines = CONFIG.speechLines[av.id] || [];
      if (lines.length > 0) {
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        showSpeechBubble(av, randomLine, 3200);
      }
    };

    av.wrapper.addEventListener("click", handleInteract);
    av.wrapper.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleInteract(e);
      }
    });
  });

  // Initial friendly greeting shortly after page load
  setTimeout(() => {
    triggerAvatarConversation();
  }, 1200);

  // Start autonomous meadow game loop
  window.requestAnimationFrame(avatarGameLoop);
}

function updateAvatarDOMPosition(av) {
  const stageWidth = dom.avatarStage.clientWidth || window.innerWidth;
  const avatarWidth = 76;
  const minPx = 18;
  const maxPx = Math.max(minPx + 40, stageWidth - avatarWidth - 18);
  const pixelX = minPx + av.x * (maxPx - minPx);

  av.wrapper.style.transform = `translate3d(${pixelX.toFixed(1)}px, 0, 0)`;
  av.wrapper.style.setProperty("--facing", av.facing);

  // Keep speech bubble from clipping near screen edges
  if (av.bubble) {
    if (av.x < 0.16) {
      av.bubble.style.left = "95%";
    } else if (av.x > 0.84) {
      av.bubble.style.left = "5%";
    } else {
      av.bubble.style.left = "50%";
    }
  }
}

function showSpeechBubble(av, text, duration = 3400) {
  if (!av.bubble) return;
  if (av.bubbleTimeout) {
    clearTimeout(av.bubbleTimeout);
  }
  av.bubble.textContent = text;
  av.bubble.classList.remove("hidden");

  av.bubbleTimeout = setTimeout(() => {
    av.bubble.classList.add("hidden");
  }, duration);
}

function makeAvatarJumpAndSparkle(av) {
  av.wrapper.classList.remove("is-jumping");
  void av.wrapper.offsetWidth;
  av.wrapper.classList.add("is-jumping");

  setTimeout(() => {
    av.wrapper.classList.remove("is-jumping");
  }, 560);

  // Emit tiny floating pixel hearts & sparkles
  spawnAvatarParticles(av, ["💖", "✨", "🌸", "💕"]);
}

function spawnAvatarParticles(av, symbols) {
  const stageWidth = dom.avatarStage.clientWidth || window.innerWidth;
  const avatarWidth = 76;
  const minPx = 18;
  const maxPx = Math.max(minPx + 40, stageWidth - avatarWidth - 18);
  const centerX = minPx + av.x * (maxPx - minPx) + avatarWidth / 2;

  for (let i = 0; i < 4; i++) {
    const p = document.createElement("span");
    p.className = "pixel-particle";
    p.textContent = symbols[i % symbols.length];
    const offsetX = (Math.random() - 0.5) * 44;
    const driftX = (Math.random() - 0.5) * 34;
    p.style.left = `${centerX + offsetX}px`;
    p.style.bottom = `${72 + i * 7}px`;
    p.style.setProperty("--dx", `${driftX.toFixed(1)}px`);
    dom.avatarParticles.appendChild(p);

    setTimeout(() => {
      p.remove();
    }, 1200);
  }
}

function triggerCelebrationAvatarJump() {
  const total = CONFIG.photos.length;
  // Face each other and celebrate
  if (avatars.elif.x <= avatars.zeynep.x) {
    avatars.elif.facing = 1;
    avatars.zeynep.facing = -1;
  } else {
    avatars.elif.facing = -1;
    avatars.zeynep.facing = 1;
  }
  updateAvatarDOMPosition(avatars.elif);
  updateAvatarDOMPosition(avatars.zeynep);

  makeAvatarJumpAndSparkle(avatars.elif);
  makeAvatarJumpAndSparkle(avatars.zeynep);

  showSpeechBubble(avatars.zeynep, `${total} / ${total} Anı Açıldı! İyi ki doğdun Elif!`, 4500);
  setTimeout(() => {
    showSpeechBubble(avatars.elif, "En güzel doğum günü sürprizi!", 4500);
  }, 700);
}

function triggerAvatarConversation() {
  const dialogues = CONFIG.speechLines.dialogues;
  if (!dialogues || !dialogues.length) return;
  const pair = dialogues[Math.floor(Math.random() * dialogues.length)];

  // Face each other
  if (avatars.elif.x <= avatars.zeynep.x) {
    avatars.elif.facing = 1;
    avatars.zeynep.facing = -1;
  } else {
    avatars.elif.facing = -1;
    avatars.zeynep.facing = 1;
  }

  avatars.elif.state = "idle";
  avatars.zeynep.state = "idle";
  avatars.elif.waitTimer = 210;
  avatars.zeynep.waitTimer = 210;

  drawPixelSprite(avatars.elif.canvas, avatars.elif.topRows, avatars.elif.legs.idle);
  drawPixelSprite(avatars.zeynep.canvas, avatars.zeynep.topRows, avatars.zeynep.legs.idle);
  updateAvatarDOMPosition(avatars.elif);
  updateAvatarDOMPosition(avatars.zeynep);

  const firstAv = avatars[pair.firstSpeaker] || avatars.zeynep;
  const secondAv = avatars[pair.secondSpeaker] || avatars.elif;

  showSpeechBubble(firstAv, pair.firstText, 3000);
  setTimeout(() => {
    showSpeechBubble(secondAv, pair.secondText, 3200);
  }, 1500);
}

function avatarGameLoop() {
  if (dialogueCooldown > 0) {
    dialogueCooldown--;
  }

  Object.values(avatars).forEach((av) => {
    if (av.state === "idle") {
      av.waitTimer--;
      if (av.waitTimer <= 0) {
        av.targetX = 0.08 + Math.random() * 0.84;
        av.state = "walk";
      }
    } else if (av.state === "walk") {
      const diff = av.targetX - av.x;
      const speed = 0.0016;

      if (Math.abs(diff) <= speed * 1.5) {
        av.x = av.targetX;
        av.state = "idle";
        av.waitTimer = 110 + Math.floor(Math.random() * 140);
        drawPixelSprite(av.canvas, av.topRows, av.legs.idle);
      } else {
        av.facing = diff > 0 ? 1 : -1;
        av.x += Math.sign(diff) * speed;

        // 2-frame walking animation
        av.frameTimer++;
        if (av.frameTimer >= 12) {
          av.frameTimer = 0;
          av.frame = av.frame === 0 ? 1 : 0;
          const legFrame = av.frame === 0 ? av.legs.walk1 : av.legs.walk2;
          drawPixelSprite(av.canvas, av.topRows, legFrame);
        }
      }
      updateAvatarDOMPosition(av);
    }
  });

  // Check if Elif & Zeynep are near each other and ready for a spontaneous chat
  const distance = Math.abs(avatars.elif.x - avatars.zeynep.x);
  if (distance > 0.09 && distance < 0.24 && dialogueCooldown === 0) {
    if (Math.random() < 0.015) {
      dialogueCooldown = 420;
      triggerAvatarConversation();
    }
  }

  window.requestAnimationFrame(avatarGameLoop);
}

/* ==========================================================================
   5. WARM PASTEL & GOLD CONFETTI ENGINE
   ========================================================================== */

let confettiParticles = [];
let confettiAnimId = null;

function resizeConfettiCanvas() {
  if (!dom.confettiCanvas) return;
  dom.confettiCanvas.width = window.innerWidth;
  dom.confettiCanvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeConfettiCanvas);

function launchConfettiBurst(count = 120) {
  resizeConfettiCanvas();
  const colors = [
    "#f5b942", // warm gold
    "#ff8da1", // pastel rose
    "#ffd166", // sunny yellow
    "#e5b3fe", // soft lavender
    "#ffc6ae", // warm peach
    "#a8e6cf", // mint pastel
    "#fff4d2"  // cream gold
  ];

  const w = dom.confettiCanvas.width;
  const h = dom.confettiCanvas.height;

  for (let i = 0; i < count; i++) {
    const fromLeft = i % 2 === 0;
    const startX = fromLeft ? w * (0.15 + Math.random() * 0.25) : w * (0.6 + Math.random() * 0.25);
    const startY = h * (0.35 + Math.random() * 0.25);

    confettiParticles.push({
      x: startX,
      y: startY,
      vx: (Math.random() - 0.5) * 14,
      vy: -6 - Math.random() * 11,
      size: 6 + Math.random() * 6,
      color: colors[i % colors.length],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 11,
      gravity: 0.22 + Math.random() * 0.08,
      drag: 0.985,
      wobble: Math.random() * 10,
      wobbleSpeed: 0.08 + Math.random() * 0.08,
      opacity: 1,
      shape: i % 3 === 0 ? "circle" : "rect"
    });
  }

  if (!confettiAnimId) {
    confettiAnimId = window.requestAnimationFrame(updateConfetti);
  }
}

function updateConfetti() {
  const ctx = dom.confettiCanvas.getContext("2d");
  ctx.clearRect(0, 0, dom.confettiCanvas.width, dom.confettiCanvas.height);

  confettiParticles = confettiParticles.filter(
    (p) => p.opacity > 0.04 && p.y < dom.confettiCanvas.height + 40
  );

  confettiParticles.forEach((p) => {
    p.vx *= p.drag;
    p.vy += p.gravity;
    p.x += p.vx + Math.sin(p.wobble) * 0.9;
    p.y += p.vy;
    p.rotation += p.rotationSpeed;
    p.wobble += p.wobbleSpeed;

    if (p.y > dom.confettiCanvas.height * 0.72) {
      p.opacity -= 0.018;
    }

    ctx.save();
    ctx.globalAlpha = Math.max(0, p.opacity);
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;

    if (p.shape === "circle") {
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.55, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
    }
    ctx.restore();
  });

  if (confettiParticles.length > 0) {
    confettiAnimId = window.requestAnimationFrame(updateConfetti);
  } else {
    confettiAnimId = null;
    ctx.clearRect(0, 0, dom.confettiCanvas.width, dom.confettiCanvas.height);
  }
}

/* ==========================================================================
   INITIALIZE APPLICATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initAtmosphere();
  initPolaroids();
  initLetterModal();
  initAvatars();
});
