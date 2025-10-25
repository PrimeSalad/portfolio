const interval = setInterval(() => {
  const viewer = document.querySelector("spline-viewer");
  if (viewer && viewer.shadowRoot) {
    const logo = viewer.shadowRoot.querySelector("#logo");
    if (logo) {
      logo.remove();
      clearInterval(interval);
    }
  }
}, 500);

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

const titles = [
  "Software Developer",
  "Game Developer",
  "Graphics Artist",
  "Video Editor",
];

let currentIndex = 0;
let charIndex = 0;
const typedText = document.getElementById("typed-text");
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1500;

let currentWords = titles[currentIndex].split(" ");
let firstWord = currentWords[0];
let secondWord = currentWords[1];

function type() {
  const fullText = `${firstWord} ${secondWord}`;
  if (charIndex < fullText.length) {
    let typed = fullText.substring(0, charIndex + 1);

    if (typed.includes(" ")) {
      const splitIndex = typed.indexOf(" ");
      const visibleFirst = typed.substring(0, splitIndex);
      const visibleSecond = typed.substring(splitIndex + 1);

      typedText.innerHTML = `${visibleFirst} <span class="highlight">${visibleSecond}</span>`;
    } else {
      typedText.textContent = typed;
    }

    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  const fullText = `${firstWord} ${secondWord}`;
  if (charIndex > 0) {
    charIndex--;
    let typed = fullText.substring(0, charIndex);

    if (typed.includes(" ")) {
      const splitIndex = typed.indexOf(" ");
      const visibleFirst = typed.substring(0, splitIndex);
      const visibleSecond = typed.substring(splitIndex + 1);

      typedText.innerHTML = `${visibleFirst} <span class="highlight">${visibleSecond}</span>`;
    } else {
      typedText.textContent = typed;
    }

    setTimeout(erase, erasingSpeed);
  } else {
    currentIndex = (currentIndex + 1) % titles.length;
    currentWords = titles[currentIndex].split(" ");
    firstWord = currentWords[0];
    secondWord = currentWords[1];
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 1000);
});
function copyEmail() {
  const email = document.getElementById("email-text").innerText;
  navigator.clipboard.writeText(email).catch((err) => {
    console.error("Failed to copy: ", err);
  });
}

feather.replace();

function toggleSortMenu() {
  const menu = document.getElementById("sortMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.addEventListener("click", function (e) {
  const menu = document.getElementById("sortMenu");
  const button = document.querySelector(".sort-btn");
  if (!button.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = "none";
  }
});

function toggleSortMenu() {
  const menu = document.getElementById("sortMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function filterProjects(category) {
  const projects = document.querySelectorAll(".project-thumb");

  projects.forEach((project) => {
    const type = project.getAttribute("data-category");

    if (category === "all" || type === category) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });

  // Close the menu
  document.getElementById("sortMenu").style.display = "none";
}

// Optional: close menu on outside click
window.addEventListener("click", function (e) {
  const menu = document.getElementById("sortMenu");
  const button = document.querySelector(".sort-btn");
  if (!menu.contains(e.target) && !button.contains(e.target)) {
    menu.style.display = "none";
  }
});

// Project data controller
const projects = [
  {
    title: "Threadify",
    subtitle: "Mobile Application",
    description:
      "Threadify is a digital platform that makes sending and receiving money simple and secure. Built for everyday use, it offers a clean interface and practical tools to help users manage their finances with ease. Whether you're transferring money to friends, keeping track of your expenses, or handling day-to-day transactions, Threadify is designed to make the process fast, reliable, and hassle-free. It puts convenience and security first, giving you control over your money in a cashless world.",
    image: "images/thredify.gif",
    downloadLink: "https://github.com/PrimeSalad/Threadify.git",
    githubLink: "https://github.com/PrimeSalad/Threadify.git",
  },
  {
    title: "Worlds Hardest Game",
    subtitle: "PC Game",
    description:
      "Worlds Hardest Game is a skill-based puzzle platformer that puts your reflexes and focus to the test. The objective is to collect keys and reach the goal, but each level is filled with fast-moving traps and mind-bending patterns. Success depends on quick thinking, perfect timing, and steady hands. Every move matters, and even the smallest mistake can send you back to the start. Designed for players who enjoy intense, unforgiving gameplay.",
    image: "images/whg.gif",
    downloadLink:
      "https://drive.google.com/drive/folders/1hBHlzhg0d_DdV4E63j4xKaSUEszw4b0s?usp=sharing",
    githubLink: "https://github.com/user/hardest-game",
  },
  {
    title: "Alertify Mobile",
    subtitle: "Mobile Application",
    description:
      "Alertify Mobile is a powerful emergency app designed to get help to you fast. With one tap, you can instantly alert police, ambulance, or fire services—all at once or individually—based on your situation. The app automatically sends your location, even without an internet connection, ensuring responders know exactly where to go. Built for speed and reliability, Alertify removes the barriers in moments that matter most. ",
    image: "images/alertify.gif",
    downloadLink: "https://github.com/ardalis/under-construction",
    githubLink: "https://github.com/ardalis/under-construction",
  },
];

let currentProject = 0;

function renderProject(index) {
  const project = projects[index];

  // Update image
  document.querySelector(".project-image img").src = project.image;

  // Custom title formatting
  let titleHtml;
  if (project.title === "Threadify") {
    titleHtml = `<span style="color: white;">Thread</span><span style="color: #FFE600;">ify</span>`;
  } else {
    const titleWords = project.title.split(" ");
    const firstWord = titleWords[0];
    const rest = titleWords.slice(1).join(" ");
    titleHtml = `${firstWord} <span class="highlight">${rest}</span>`;
  }

  // Update title
  document.querySelector(".project-info h2").innerHTML = titleHtml;

  // Update subtitle and description
  document.querySelector(".project-info .sub").textContent = project.subtitle;
  document.querySelector(".project-info .description").textContent =
    project.description;

  // Update buttons
  document.getElementById("downloadBtn").href = project.downloadLink;
  document.getElementById("githubBtn").href = project.githubLink;
}

// Carousel navigation buttons
document
  .querySelector(".carousel-btn:nth-child(1)")
  .addEventListener("click", () => {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    renderProject(currentProject);
  });

document
  .querySelector(".carousel-btn:nth-child(2)")
  .addEventListener("click", () => {
    currentProject = (currentProject + 1) % projects.length;
    renderProject(currentProject);
  });

// Initial render
renderProject(currentProject);

// Render Feather icons after content loads
feather.replace();

// === PROJECT DATA ===
const allProjects = [
  {
    image: "images/shape.gif",
    title: "SHAPE Dashboard",
    desc: "SHAPE Dashboard is a platform designed for teachers to manage, monitor, and personalize educational support for students with special needs.",
    link: "https://github.com/ardalis/under-construction",
    category: "website",
  },
  {
    image: "images/marsu.gif",
    title: "Marinduque State University Official Logo",
    desc: "The Marinduque State University (MARSU) Official Logo represents the institution’s identity, heritage, and commitment to academic excellence. It is used across all official documents, events, and branding materials of the university.",
    link: "https://www.youtube.com/watch?v=9nl3yYgp-9I&ab_channel=MarinduqueStateUniversity",
    category: "graphics",
  },
  {
    image: "images/farm.gif",
    title: "FarmTech Agricopia",
    desc: "FarmTech Agricopia is an e-commerce website designed to promote and sell a wide range of farm goods and agricultural products directly from local farmers.",
    link: "https://primesalad.github.io/FarmTech_Agricopia_Admin/",
    category: "website",
  },
  {
    image: "images/carabaocart.gif ",
    title: "CarabaoCart",
    desc: "CaraboCart is an e-commerce website designed to sell a variety of carabao-based products online.",
    link: "https://github.com/PrimeSalad/CarabaoCartv1.git",
    category: "website",
  },
  {
    image: "images/port.gif",
    title: "My First Portfolio Website",
    desc: "A personal website project that showcases my skills, projects, and achievements as a beginner in web development. It serves as an introduction to my work and growth in the tech field.",
    link: "https://your-link.com",
    category: "website",
  },
  {
    image: "images/timetap.gif",
    title: "TimeTap",
    desc: "TimeTap is a simple and efficient scheduling app designed to help users manage tasks, appointments, and daily routines with ease.",
    link: "https://github.com/ardalis/under-construction",
    category: "application",
  },
  {
    image: "images/alertify.gif",
    title: "Alertify",
    desc: "Alertify is a real-time alert and notification system designed to deliver timely updates, warnings, or reminders for specific events or tasks. It helps users stay informed and take immediate action when needed.",
    link: "https://github.com/ardalis/under-construction",
    category: "application",
  },
  {
    image: "images/whg.gif",
    title: "World's Hardest Game",
    desc: "Worlds Hardest Game is a skill-based puzzle platformer that puts your reflexes and focus to the test.",
    link: "https://drive.google.com/drive/folders/1hBHlzhg0d_DdV4E63j4xKaSUEszw4b0s?usp=sharing",
    category: "application",
  },
  {
    image: "images/thredify.gif",
    title: "Threadify",
    desc: "Threadify is a digital platform that makes sending and receiving money simple and secure.",
    link: "https://github.com/PrimeSalad/Threadify.git",
    category: "application",
  },
  {
    image: "images/dl.jpg",
    title: "Dean's Lister Graphics",
    desc: "Dean’s Lister Graphics is a creative design project showcasing personalized congratulatory visuals for academic achievers. ",
    link: "https://www.facebook.com/share/p/15igyhuBgR/",
    category: "graphics",
  },
  {
    image: "images/heart.jpg",
    title: "The Heart Year Book",
    desc: "The Heart Yearbook is a commemorative publication designed to capture memories, achievements, and milestones of the academic year. It features creative layouts, student profiles, and event highlights in a visually engaging format.",
    link: "https://drive.google.com/file/d/17qEEvJu0jkb4oKOJlVYgcRecrRdPMnfY/view?usp=sharing",
    category: "graphics",
  },
  {
    image: "images/gitbash.jpg",
    title: "Git Bash Learning",
    desc: "Git Bash Learning (Video) is an educational video tutorial that introduces the basics of Git Bash, covering essential Git commands, version control concepts, and practical workflows to help beginners navigate repositories using the terminal.",
    link: "https://youtu.be/ioSgYMg87UI",
    category: "video",
  },
  {
    image: "images/rsrch.jpg",
    title: "Research Conference Banner",
    desc: "A professionally designed banner for an academic research conference. The design highlights key event information, institutional branding, and a formal visual style suitable for scholarly events.",
    link: "https://www.facebook.com/share/p/1AVVFDasC4/",
    category: "graphics",
  },

  {
    image: "images/ta.jpg",
    title: "Coming Soon Banner – Tropic Academia",
    desc: "A vibrant and eye-catching banner announcing the upcoming release of Tropic Academia, an educational game. The design blends tropical themes with playful academic elements to build excitement and anticipation.",
    link: "https://github.com/ardalis/under-construction",
    category: "graphics",
  },
  {
    image: "images/arc.jpg",
    title: "Archery Championship Banner",
    desc: "A dynamic and competitive-themed banner created for an archery championship event. It features bold typography, action visuals, and event details to energize participants and spectators.",
    link: "https://github.com/ardalis/under-construction",
    category: "graphics",
  },
  {
    image: "images/hack.png",
    title: "Hack4Gov Shirt – DICT",
    desc: "A custom shirt design made for the Hack4Gov event organized by the DICT. The design reflects themes of cybersecurity, innovation, and tech community spirit, combining modern graphics with official branding elements.",
    link: "https://www.facebook.com/share/p/16W7kcQYwa/",
    category: "graphics",
  },
  {
    image: "images/champ.jpg",
    title: "Esports Champion Banner",
    desc: "A high-energy banner designed for an esports event, featuring bold visuals, game-inspired elements, and vibrant colors to capture the excitement and competitive spirit of the gaming community.",
    link: "https://github.com/ardalis/under-construction",
    category: "graphics",
  },
  {
    image: "images/dire.jpg",
    title: "Esports Jersey",
    desc: "A custom-designed jersey for an esports team, combining sleek graphics, team branding, and modern athletic aesthetics to enhance team identity and gamer appeal during tournaments and events.",
    link: "https://www.facebook.com/share/p/1988qDuHdj/",
    category: "graphics",
  },
  {
    image: "images/pdpz.gif",
    title:
      " MarSU Presidential Report AVP | Prof. Dr. Diosdado P. Zulueta, DPA",
    desc: "This audiovisual presentation highlights the visionary leadership and transformative milestones of Prof. Dr. Diosdado P. Zulueta, the first university president of Marinduque State University (MarSU).",
    link: "https://youtu.be/zM_ijn9NKKI",
    category: "video",
  },
  {
    image: "images/lol.gif",
    title: "SDG 15 - LIFE ON LAND: AN INFOMERCIAL",
    desc: "Life on land sustains all living things. From soil and water to plants and animals, everything depends on how we care for the land. Sustainable farming not only feeds people—it helps restore nature.",
    link: "https://youtu.be/WO6QIGPs-rk",
    category: "video",
  },
  {
    image: "images/ciz.gif",
    title: "CICS Promotional Video",
    desc: "This promotional video showcases the vibrant, future-ready ecosystem of the College of Information and Computing Sciences (CICS) at Marinduque State University. Built on a foundation of innovation, collaboration, and digital excellence.",
    link: "https://youtu.be/4OC7wmdjRRY",
    category: "video",
  },
  {
    image: "images/sopa.gif",
    title: "State of the Province Address (SOPA)",
    desc: "This authoritative and visually compelling video captures the State of the Province Address (SOPA) delivered by Governor Presbitero Velasco Jr., spotlighting his administration’s significant milestones, governance priorities, and forward-looking vision for Marinduque.",
    link: "https://youtu.be/J3yKaC7MtDs",
    category: "video",
  },
  {
    image: "images/inf.gif",
    title:
      "Highlights from the CICS Freshmen and Transferees Orientation 2024!",
    desc: "This video gives you a glimpse of the essential moments during the orientation, welcoming new students to the CICS community. From introductions to the faculty members to detailed discussions on program expectation.",
    link: "https://www.facebook.com/watch/?ref=search&v=1371997143736694&external_log_id=006c9906-bcce-4ec0-b681-b7be887f58c5&q=infocus",
    category: "video",
  },
  {
    image: "images/isla.gif",
    title: "The Island Esports Association",
    desc: "The Island Esports Association (IESA) is a grassroots-driven organization dedicated to developing and promoting esports excellence in the island communities of the Philippines—starting with Marinduque.",
    link: "https://www.facebook.com/61577024336026/videos/1751276925741241",
    category: "video",
  },
  {
    image: "images/whgv.jpg",
    title: "World’s Hardest Game – Video Insight",
    desc: "A gameplay insight video exploring strategies, challenges, and player reactions while navigating The World’s Hardest Game. The video breaks down key levels, highlights patterns, and shares tips for mastering this famously difficult game.",
    link: "https://youtu.be/zEp_0xPBuNQ?si=4OOX4cdzJ04_0pc6",
    category: "video",
  },
  {
    image: "images/fp.jpg",
    title: "Tech Side of Foodpanda",
    desc: "An analytical look into the technology powering Foodpanda, covering its mobile app architecture, real-time GPS tracking, order management system, API integrations, and the use of data analytics to optimize delivery efficiency and user experience.",
    link: "https://youtu.be/TzSUAHZm2Zo?si=h9zGwF62hGFaQjt3",
    category: "video",
  },
  {
    image: "images/code.jpg",
    title: "Compilers vs Interpreters",
    desc: "A comparative overview explaining the differences between compilers and interpreters in programming. It highlights how each processes code, their execution speed, error handling, and ideal use cases in software development.",
    link: "https://youtu.be/_HiJTrQ29tk?si=dQTxL_ahxVvo2IiQ",
    category: "video",
  },
  {
    image: "images/prog.gif",
    title: "Code Unlocked: How It Really Works",
    desc: "An insightful walkthrough of how C# code executes—from writing syntax in the IDE to compiling with the .NET runtime. It covers key concepts like variables, methods, object-oriented structure, and how C# interacts with memory and system resources.",
    link: "https://youtu.be/JXwCMJ8KFw0?si=WBH70YqDK6N-XeKa",
    category: "video",
  },
];

// === STATE ===
let currentPage = 1;
let totalPages = 1;
let filteredProjects = [...allProjects];

// === UTILITY ===
function getItemsPerPage() {
  return window.innerWidth <= 768 ? 2 : 6;
}

// === BUILD PROJECT PAGES ===
function generatePages() {
  const wrapper = document.getElementById("projectGridWrapper");
  wrapper.innerHTML = "";

  const itemsPerPage = getItemsPerPage();
  totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;

  for (let i = 0; i < totalPages; i++) {
    const pageDiv = document.createElement("div");
    pageDiv.className = "project-grid page";
    pageDiv.dataset.page = i + 1;
    pageDiv.style.display = i + 1 === currentPage ? "grid" : "none";

    const projects = filteredProjects.slice(
      i * itemsPerPage,
      (i + 1) * itemsPerPage
    );

    projects.forEach((project) => {
      const thumb = document.createElement("div");
      thumb.className = "project-thumb";
      thumb.dataset.category = project.category;
      thumb.innerHTML = `
          <img src="${project.image}" alt="${project.title}" />
          <div class="project-overlay">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.desc}</p>
          </div>
          <a href="${project.link}" target="_blank" class="external-icon" aria-label="Open external project">
            <i data-feather="external-link"></i>
          </a>
        `;
      pageDiv.appendChild(thumb);
    });

    wrapper.appendChild(pageDiv);
  }

  feather.replace(); // Re-render feather icons
}

function filterProjects(category) {
  // Update filtered data
  if (category === "all") {
    filteredProjects = [...allProjects];
  } else {
    filteredProjects = allProjects.filter((p) => p.category === category);
  }
  currentPage = 1;
  generatePages();

  // ✅ Remove "active" from all items, then set it on the clicked one
  const sortItems = document.querySelectorAll("#sortMenu li");
  sortItems.forEach((item) => {
    item.classList.remove("active");
    if (
      item.textContent.trim().toLowerCase() === category ||
      (category === "all" && item.textContent.trim().toLowerCase() === "all")
    ) {
      item.classList.add("active");
    }
  });

  // Auto-close the menu
  const menu = document.getElementById("sortMenu");
  menu?.classList.remove("show");
}

// === PAGINATION CONTROLS ===
function scrollCarousel(direction) {
  const pages = document.querySelectorAll(".project-grid.page");
  if (totalPages === 0) return;

  pages[currentPage - 1].style.display = "none";
  currentPage += direction;

  if (currentPage < 1) currentPage = 1;
  if (currentPage > totalPages) currentPage = totalPages;

  pages[currentPage - 1].style.display = "grid";
}

// === FILTER PROJECTS BY CATEGORY ===
function filterProjects(category) {
  if (category === "all") {
    filteredProjects = [...allProjects];
  } else {
    filteredProjects = allProjects.filter((p) => p.category === category);
  }
  currentPage = 1;
  generatePages();

  // Optional: auto-close the sort menu after selection
  const menu = document.getElementById("sortMenu");
  menu?.classList.remove("show");
}

document.addEventListener("click", function (e) {
  const menu = document.getElementById("sortMenu");
  const button = document.querySelector(".sort-btn");

  if (!menu || !button) return;

  if (!menu.contains(e.target) && !button.contains(e.target)) {
    menu.classList.remove("show");
  }
});

// === INITIALIZE ===
document.addEventListener("DOMContentLoaded", generatePages);
window.addEventListener("resize", generatePages);

function showPopup(imageSrc) {
  document.getElementById("popup-img").src = imageSrc;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
