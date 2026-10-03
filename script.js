// =============================
// CUSTOMIZE YOUR WEBSITE HERE
// =============================

const correctPassword = "10/07/26";
const girlfriendName = "Maby";
const yourName = "Bryle";
const monthsaryNumber = "1";
const relationshipStartDate = "2026-09-07T00:00:00";
const backgroundMusicID = "GDND88fqt1o";
const favoriteSongID = "_BuaVVyyCs8";
const mainTitle = "Happy Monthsary, Maby ❤️";
const mainSubtitle = "One month down, and many more memories to go.";
const homeMessage =
  "You came into my life unexpectedly, but you stayed intentionally. Thank you for every late-night call, every laugh, and every moment we share.";
const surpriseMessage = `Thank you for being part of my life. ❤️

Here's to more memories,
more laughs,
more adventures,
and many more months together.

I love you.`;

const letterText = `Hi Maby, happy monthsary! ❤️

To the unexpected person who came into my life, happy monthsary sa atin. Honestly, hindi ko rin in-expect na darating ka sa buhay ko. You were someone I never thought would become so important to me. At first, I didn't know where this would lead us. Hindi ko rin alam kung hanggang saan tayo aabot, pero habang tumatagal, mas lalo kitang nakikilala at mas lalo kitang naa-appreciate. Yung oras na binibigay mo sa akin kahit sobrang pagod ka na, nag-a-alarm ka pa para lang magising at makapag-video call tayo, tapos tutulugan lang kita! 😁 At mag-ML lang ako. I'm sorry for those times, and thank you so much for the time you give me. Sobrang naa-appreciate ko talaga.

I know one month is just the beginning, pero sana marami pa tayong monthsary na maipagdiwang together. I hope that with every month that passes, mas makikilala pa natin ang isa't isa, mas maiintindihan, mas mamahalin, at mas pipiliin natin ang isa't isa.

You came to my life unexpectedly, but you stayed intentionally.

Happy monthsary sa atin, Maby! ❤️
I LOVE YOU! ❤️`;

const memories = [
  {
    image: "images/memories/e6926c22486c46f78d223b9e89cc8019.webp",
    date: "September 07",
    caption: "The kind of closeness that makes everything feel softer."
  },
  {
    image: "images/memories/IMG_20260908_221258_537@57036664.jpg",
    date: "September 08",
    caption: "A quiet night, a shared smile, and my favorite person."
  },
  {
    image: "images/memories/IMG_20260908_221328_983@-1755875081.jpg",
    date: "September 08",
    caption: "Even our silly faces are worth keeping forever."
  },
  {
    image: "images/memories/IMG_20260908_221343_410@-2047290097.jpg",
    date: "September 08",
    caption: "You make ordinary moments feel like celebrations."
  },
  {
    image: "images/memories/IMG_20260913_221136_101@1831493942.jpg",
    date: "September 13",
    caption: "A little light, a little laughter, and a lot of us."
  },
  {
    image: "images/memories/IMG_20260913_221526_988@-2119237982.jpg",
    date: "September 13",
    caption: "The look that says I would choose you all over again."
  },
  {
    image: "images/memories/IMG_20260913_221534_063@1839682995.jpg",
    date: "September 13",
    caption: "Small adventures become the memories I miss most."
  },
  {
    image: "images/memories/IMG_20260920_160134_132@-968944644.jpg",
    date: "September 20",
    caption: "My favorite place is wherever I get to be with you."
  },
  {
    image: "images/memories/IMG_20260925_212526_111.png",
    date: "September 25",

  },
  {
    image: "images/memories/IMG_20260925_212539_469.png",
    date: "September 25",
    caption: "Here is to every month still waiting for us. ❤️"
  },
  {
    image: "images/memories/IMG_20260927_102402_595@14055154.jpg",
    date: "September 27",
    caption: "A fresh little memory, blooming right alongside our story."
  },
  {
    image: "images/memories/IMG_20260927_124002_081.jpg",
    date: "September 27",
    caption: "Another beautiful moment I want to keep close."
  },
  {
    image: "images/memories/IMG_20260927_124023_454.jpg",
    date: "September 27",
    caption: "First church together."
  },
  {
    image: "images/memories/Screenshot_20260904-212732.png",
    date: "September 04",
    caption: "Videocall time with my favorite person."
  }
];

// =============================
// DOM ELEMENTS
// =============================
const loginScreen = document.getElementById("login-screen");
const homeScreen = document.getElementById("home-screen");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const loginError = document.getElementById("login-error");
const mainTitleElement = document.getElementById("main-title");
const subtitleElement = document.getElementById("subtitle");
const homeMessageElement = document.getElementById("home-message");
const galleryElement = document.getElementById("gallery");
const letterTextElement = document.getElementById("letter-text");
const replayLetterButton = document.getElementById("replay-letter");
const surpriseBtn = document.getElementById("surprise-btn");
const surpriseScreen = document.getElementById("surprise-screen");
const surpriseMessageElement = document.getElementById("surprise-message");
const surpriseSignoffElement = document.getElementById("surprise-signoff");
const counterElements = {
  months: document.getElementById("counter-months"),
  days: document.getElementById("counter-days"),
  hours: document.getElementById("counter-hours"),
  minutes: document.getElementById("counter-minutes"),
  seconds: document.getElementById("counter-seconds")
};
const youtubePlayer = document.getElementById("youtube-player");
const backgroundPlayer = document.getElementById("background-player");
const playSongBtn = document.getElementById("play-song-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxDate = document.getElementById("lightbox-date");
const lightboxCaption = document.getElementById("lightbox-caption");

let activeScreen = "login";
let currentLightboxIndex = 0;
let letterTypingTimer = null;
let favoritePlayer = null;
let backgroundMusicWasPlaying = false;
let youtubeApiReady = false;
let favoriteSongRequested = false;
let relationshipCounterTimer = null;

// =============================
// BASIC WEBSITE SETUP
// =============================
function initializeWebsite() {
  mainTitleElement.textContent = mainTitle;
  subtitleElement.textContent = mainSubtitle;
  homeMessageElement.textContent = homeMessage;
  surpriseMessageElement.innerHTML = formatSurpriseText(surpriseMessage);
  surpriseSignoffElement.textContent = `Happy Monthsary, ${girlfriendName} ❤️`;

  renderMemoryGallery();
  startRelationshipCounter();
  initializeBackgroundDecor();
  attachEventListeners();

  if (sessionStorage.getItem("monthsary-unlocked") === "true") {
    loginScreen.classList.add("hidden");
    startBackgroundMusic();
    showScreen("home");
  }
}

function startRelationshipCounter() {
  updateRelationshipCounter();
  relationshipCounterTimer = setInterval(updateRelationshipCounter, 1000);
}

function updateRelationshipCounter() {
  const startDate = new Date(relationshipStartDate);
  const now = new Date();

  if (Number.isNaN(startDate.getTime()) || now < startDate) return;

  let months = (now.getFullYear() - startDate.getFullYear()) * 12;
  months += now.getMonth() - startDate.getMonth();

  const anniversary = new Date(startDate);
  anniversary.setMonth(startDate.getMonth() + months);

  if (anniversary > now) {
    months -= 1;
    anniversary.setMonth(startDate.getMonth() + months);
  }

  const remainingMilliseconds = now - anniversary;
  const days = Math.floor(remainingMilliseconds / 86400000);
  const hours = Math.floor((remainingMilliseconds % 86400000) / 3600000);
  const minutes = Math.floor((remainingMilliseconds % 3600000) / 60000);
  const seconds = Math.floor((remainingMilliseconds % 60000) / 1000);

  counterElements.months.textContent = months;
  counterElements.days.textContent = days;
  counterElements.hours.textContent = hours;
  counterElements.minutes.textContent = minutes;
  counterElements.seconds.textContent = seconds;
}

function formatSurpriseText(text) {
  return text.replace(/\n/g, "<br>");
}

function attachEventListeners() {
  passwordForm.addEventListener("submit", handlePasswordSubmit);

  document.querySelectorAll(".option-card").forEach((card) => {
    card.addEventListener("click", () => {
      const targetScreen = card.dataset.section;
      showScreen(targetScreen);
    });
  });

  document.querySelectorAll(".back-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const screenName = button.dataset.back || "home";
      showScreen(screenName);
    });
  });

  replayLetterButton.addEventListener("click", startLetterAnimation);

  surpriseBtn.addEventListener("click", () => {
    showScreen("surprise");
  });

  playSongBtn.addEventListener("click", () => {
    pauseBackgroundMusic();
    favoriteSongRequested = true;
    youtubePlayer.src =
      `https://www.youtube.com/embed/${favoriteSongID}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1`;

    if (favoritePlayer) {
      favoritePlayer.loadVideoById(favoriteSongID);
    } else if (youtubeApiReady) {
      initializeFavoritePlayer();
    }

    playSongBtn.textContent = "🎵 Playing...";
    playSongBtn.disabled = true;
  });

  document.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
  document.querySelector(".lightbox-nav.prev").addEventListener("click", () => changeLightboxImage(-1));
  document.querySelector(".lightbox-nav.next").addEventListener("click", () => changeLightboxImage(1));

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("hidden")) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        changeLightboxImage(-1);
      }

      if (event.key === "ArrowRight") {
        changeLightboxImage(1);
      }
    }
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

function startBackgroundMusic() {
  backgroundPlayer.src =
    `https://www.youtube.com/embed/${backgroundMusicID}?autoplay=1&loop=1&playlist=${backgroundMusicID}` +
    "&controls=0&enablejsapi=1&rel=0&modestbranding=1";
  backgroundMusicWasPlaying = true;
}

function controlBackgroundMusic(command) {
  if (!backgroundPlayer.contentWindow) return;

  backgroundPlayer.contentWindow.postMessage(
    JSON.stringify({
      event: "command",
      func: command,
      args: []
    }),
    "*"
  );
}

function pauseBackgroundMusic() {
  if (!backgroundMusicWasPlaying) return;
  controlBackgroundMusic("pauseVideo");
}

function resumeBackgroundMusic() {
  if (!backgroundMusicWasPlaying) return;
  controlBackgroundMusic("playVideo");
}

function stopFavoriteSong() {
  if (!favoritePlayer && !youtubePlayer.src) return;

  favoriteSongRequested = false;

  if (favoritePlayer) {
    favoritePlayer.stopVideo();
  } else {
    youtubePlayer.src = "";
  }

  playSongBtn.textContent = "🎵 Play Our Song";
  playSongBtn.disabled = false;
  resumeBackgroundMusic();
}

function initializeFavoritePlayer() {
  if (!window.YT || !window.YT.Player || favoritePlayer) return;

  favoritePlayer = new window.YT.Player(youtubePlayer, {
    events: {
      onReady: (event) => {
        if (favoriteSongRequested) {
          event.target.loadVideoById(favoriteSongID);
        }
      },
      onStateChange: (event) => {
        if (event.data === window.YT.PlayerState.ENDED) {
          stopFavoriteSong();
        }
      }
    }
  });
}

function loadYouTubeApi() {
  window.onYouTubeIframeAPIReady = () => {
    youtubeApiReady = true;
    if (favoriteSongRequested) {
      initializeFavoritePlayer();
    }
  };
  const apiScript = document.createElement("script");
  apiScript.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(apiScript);
}

// =============================
// PASSWORD GATE
// =============================
function handlePasswordSubmit(event) {
  event.preventDefault();

  const enteredValue = normalizeInput(passwordInput.value);
  const correctValue = normalizeInput(correctPassword);

  if (enteredValue === correctValue) {
    sessionStorage.setItem("monthsary-unlocked", "true");
    startBackgroundMusic();
    passwordInput.value = "";
    loginError.classList.remove("visible");
    loginScreen.classList.add("unlocking");

    setTimeout(() => {
      showScreen("home");
      loginScreen.classList.remove("unlocking");
      loginScreen.classList.remove("active");
      loginScreen.classList.add("hidden");
    }, 420);

    return;
  }

  showPasswordError();
}

function normalizeInput(value) {
  return String(value).trim().replace(/[\s/-]+/g, "").toLowerCase();
}

function showPasswordError() {
  loginError.textContent = "Almost, my love ❤️ Try again.";
  loginError.classList.add("visible");
  passwordInput.classList.remove("shake");
  void passwordInput.offsetWidth;
  passwordInput.classList.add("shake");
  passwordInput.focus();
}

// =============================
// SCREEN NAVIGATION
// =============================
function showScreen(screenName) {
  const previousScreen = activeScreen;

  if (screenName === "login" && sessionStorage.getItem("monthsary-unlocked") === "true") {
    screenName = "home";
  }
  const screenMap = {
    login: loginScreen,
    home: homeScreen,
    flowers: document.getElementById("flowers-screen"),
    letters: document.getElementById("letters-screen"),
    song: document.getElementById("song-screen"),
    surprise: surpriseScreen
  };

  Object.entries(screenMap).forEach(([key, element]) => {
    const isActive = key === screenName;
    element.classList.toggle("active", isActive);
  });

  activeScreen = screenName;

  if (screenName === "home") {
    document.body.classList.remove("no-scroll");
  }

  if (previousScreen === "song" && screenName !== "song") {
    stopFavoriteSong();
  }

  if (screenName === "surprise") {
    surpriseScreen.classList.add("active");
  }

  if (screenName === "letters") {
    startLetterAnimation();
  }
}

// =============================
// MEMORY GALLERY
// =============================
function renderMemoryGallery() {
  galleryElement.innerHTML = memories
    .map(
      (memory, index) => `
        <figure class="memory-card" data-index="${index}" tabindex="0" role="button" aria-label="Open memory ${index + 1}">
          <img src="${memory.image}" alt="${memory.caption}" loading="lazy" />
          <figcaption>
            <span class="memory-date">${memory.date}</span>
            <span class="memory-caption">${memory.caption}</span>
          </figcaption>
        </figure>
      `
    )
    .join("");

  galleryElement.querySelectorAll(".memory-card").forEach((card) => {
    card.addEventListener("click", () => {
      openLightbox(Number(card.dataset.index));
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(Number(card.dataset.index));
      }
    });
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  const memory = memories[index];

  if (!memory) return;

  lightboxImage.src = memory.image;
  lightboxImage.alt = memory.caption;
  lightboxDate.textContent = memory.date;
  lightboxCaption.textContent = memory.caption;

  lightbox.classList.remove("hidden");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightbox.setAttribute("aria-hidden", "true");
}

function changeLightboxImage(direction) {
  const nextIndex = (currentLightboxIndex + direction + memories.length) % memories.length;
  currentLightboxIndex = nextIndex;
  openLightbox(nextIndex);
}

// =============================
// LETTER ANIMATION
// =============================
function startLetterAnimation() {
  clearInterval(letterTypingTimer);
  letterTextElement.innerHTML = "";

  let index = 0;
  let typedText = "";

  letterTypingTimer = setInterval(() => {
    typedText += letterText[index] || "";
    letterTextElement.innerHTML = typedText + '<span class="cursor"></span>';
    index += 1;

    if (index >= letterText.length) {
      clearInterval(letterTypingTimer);
      letterTextElement.innerHTML = typedText;
    }
  }, 20);
}

// =============================
// FLOATING BACKGROUND DECOR
// =============================
function initializeBackgroundDecor() {
  createFloatingHearts();
  createRosePetals();
  createParticles();
}

function createFloatingHearts() {
  const container = document.getElementById("floating-hearts");

  for (let i = 0; i < 14; i += 1) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = i % 2 === 0 ? "♥" : "❤";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = `${-10 - Math.random() * 20}%`;
    heart.style.animationDuration = `${12 + Math.random() * 18}s`;
    heart.style.animationDelay = `${Math.random() * 8}s`;
    heart.style.opacity = (Math.random() * 0.4 + 0.5).toFixed(2);
    container.appendChild(heart);
  }
}

function createRosePetals() {
  const container = document.getElementById("petal-layer");

  for (let i = 0; i < 18; i += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${10 + Math.random() * 16}s`;
    petal.style.animationDelay = `${Math.random() * 8}s`;
    petal.style.opacity = (Math.random() * 0.4 + 0.35).toFixed(2);
    container.appendChild(petal);
  }
}

function createParticles() {
  const container = document.getElementById("particle-layer");

  for (let i = 0; i < 40; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.width = `${Math.random() * 7 + 3}px`;
    particle.style.height = particle.style.width;
    particle.style.opacity = (Math.random() * 0.7 + 0.15).toFixed(2);
    particle.style.animationDuration = `${10 + Math.random() * 12}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(particle);
  }
}

initializeWebsite();
loadYouTubeApi();
