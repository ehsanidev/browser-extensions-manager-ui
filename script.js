const games = [
  {
    id: "sonic-run",
    category: "Action",
    name: "Sonic Run",
    icon: "🟦",
    description: "Race through loop-de-loops and collect glowing rings.",
    age: "Ages 7+",
    tag: "Speed",
    accent: "#1ab7ff",
  },
  {
    id: "memory-merge",
    category: "Puzzle",
    name: "Memory Merge",
    icon: "🧠",
    description: "Match neon cards and beat your high score.",
    age: "Ages 8+",
    tag: "Brainy",
    accent: "#ff8d2d",
  },
  {
    id: "math-blast",
    category: "Action",
    name: "Math Blast",
    icon: "🔢",
    description: "Solve speed math and keep the combo alive.",
    age: "Ages 6+",
    tag: "Fast",
    accent: "#ff5a36",
  },
  {
    id: "word-wave",
    category: "Puzzle",
    name: "Word Wave",
    icon: "🧩",
    description: "Unscramble the letters and build a word.",
    age: "Ages 7+",
    tag: "Skill",
    accent: "#bb7dff",
  },
  {
    id: "racer-arcade",
    category: "Racing",
    name: "Racer Arcade",
    icon: "🏁",
    description: "Choose the right route and win the race.",
    age: "Ages 7+",
    tag: "Track",
    accent: "#50e3a4",
  },
  {
    id: "color-burst",
    category: "Puzzle",
    name: "Color Burst",
    icon: "🎨",
    description: "Guess the correct color from each clue.",
    age: "Ages 5+",
    tag: "Bright",
    accent: "#ffd84d",
  },
  {
    id: "maze-mission",
    category: "Action",
    name: "Maze Mission",
    icon: "🧭",
    description: "Follow the right path and escape the maze.",
    age: "Ages 8+",
    tag: "Trail",
    accent: "#6bd6ff",
  },
  {
    id: "sky-fly",
    category: "Racing",
    name: "Sky Fly",
    icon: "✈️",
    description: "Pick the right route to reach the finish line.",
    age: "Ages 7+",
    tag: "Pilot",
    accent: "#ff5f73",
  },
  {
    id: "story-sprint",
    category: "Sports",
    name: "Story Sprint",
    icon: "📚",
    description: "Answer quick reading questions in a race.",
    age: "Ages 6+",
    tag: "Story",
    accent: "#1ab7ff",
  },
  {
    id: "reaction-blitz",
    category: "Sports",
    name: "Reaction Blitz",
    icon: "⚡",
    description: "Hit the green button when light turns on.",
    age: "Ages 8+",
    tag: "Speed",
    accent: "#50e3a4",
  }
];

const filters = ["All", "Action", "Puzzle", "Racing", "Sports"];
let selectedCategory = "All";
let activeGameId = null;

const filtersEl = document.getElementById("filters");
const gamesGridEl = document.getElementById("gamesGrid");
const gameAreaEl = document.getElementById("gameArea");
const panelTitleEl = document.getElementById("panelTitle");
const panelBadgeEl = document.getElementById("panelBadge");
const themeToggleBtn = document.getElementById("themeToggle");
const randomGameBtn = document.getElementById("randomGameBtn");
const startBtn = document.getElementById("startBtn");
const browseBtn = document.getElementById("browseBtn");
const navButtons = document.querySelectorAll(".nav-item");

function renderFilters() {
  filtersEl.innerHTML = "";
  filters.forEach((filter) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `filter-btn ${selectedCategory === filter ? "active" : ""}`;
    btn.textContent = filter;
    btn.addEventListener("click", () => {
      selectedCategory = filter;
      renderFilters();
      const filtered = games.filter((game) => filter === "All" ? true : game.category === filter);
      activeGameId = filtered[0]?.id ?? null;
      renderGames();
      if (filtered[0]) renderGamePanel(filtered[0]);
    });
    filtersEl.appendChild(btn);
  });
}

function renderGames() {
  const filteredGames = games.filter((game) => {
    if (selectedCategory === "All") return true;
    return game.category === selectedCategory;
  });

  gamesGridEl.innerHTML = "";

  if (!filteredGames.length) {
    gamesGridEl.innerHTML = '<div class="empty-state"><p>No games found in this category.</p></div>';
    return;
  }

  filteredGames.forEach((game) => {
    const card = document.createElement("div");
    card.className = `game-card ${game.id === activeGameId ? "playing" : ""}`;
    card.innerHTML = `
      <div class="icon" style="background:${game.accent}25;">${game.icon}</div>
      <h4>${game.name}</h4>
      <p>${game.description}</p>
      <div class="card-meta">
        <span>${game.age}</span>
        <span class="badge">${game.tag}</span>
      </div>
    `;
    card.addEventListener("click", () => {
      activeGameId = game.id;
      renderGames();
      renderGamePanel(game);
    });
    gamesGridEl.appendChild(card);
  });
}

function renderGamePanel(game) {
  if (!game) return;
  panelTitleEl.textContent = game.name;
  panelBadgeEl.textContent = game.category;

  switch (game.id) {
    case "sonic-run":
      renderSonicGame();
      break;
    case "memory-merge":
      renderMemoryGame();
      break;
    case "math-blast":
      renderMathGame();
      break;
    case "word-wave":
      renderWordGame();
      break;
    case "racer-arcade":
      renderRaceGame();
      break;
    case "color-burst":
      renderColorGame();
      break;
    case "maze-mission":
      renderMazeMission();
      break;
    case "sky-fly":
      renderSkyFly();
      break;
    case "story-sprint":
      renderStoryGame();
      break;
    case "reaction-blitz":
      renderReactionGame();
      break;
    default:
      renderMathGame();
  }
}

function setButtonStatus(element, message, color = "#bed0f0") {
  if (!element) return;
  element.textContent = message;
  element.style.color = color;
}

function renderSonicGame() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const answer = a + b;

  gameAreaEl.innerHTML = `
    <div class="game-box game-block">
      <div class="game-top">
        <div class="game-label">Sonic Run</div>
      </div>
      <div class="problem">${a} + ${b} = ?</div>
      <div class="answer-row">
        <input id="sonicInput" type="number" placeholder="Type answer" />
        <button type="button" id="submitSonic">Check</button>
      </div>
      <div id="sonicStatus" class="status-line">Beat the ring challenge.</div>
    </div>
  `;

  const input = document.getElementById("sonicInput");
  const status = document.getElementById("sonicStatus");
  const handleSubmit = () => {
    const value = Number(input.value);
    if (value === answer) {
      setButtonStatus(status, "Perfect run! Rings collected! 🏆", "#50e3a4");
      input.value = "";
      setTimeout(() => renderSonicGame(), 500);
    } else {
      setButtonStatus(status, "Not quite — try again!", "#ff5f73");
    }
  };

  document.getElementById("submitSonic").addEventListener("click", handleSubmit);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleSubmit();
  });
}

function renderMemoryGame() {
  const cards = ["🎯", "🚀", "⭐", "🎵", "🌈", "🎲"];
  const doubled = [...cards, ...cards].sort(() => Math.random() - 0.5);

  gameAreaEl.innerHTML = `
    <div class="game-box game-block">
      <div class="game-top">
        <div class="game-label">Memory Merge</div>
      </div>
      <div class="memory-board" id="memoryBoard"></div>
      <div id="memoryStatus" class="status-line">Match all pairs.</div>
    </div>
  `;

  const board = document.getElementById("memoryBoard");
  const status = document.getElementById("memoryStatus");

  doubled.forEach((emoji) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "memory-card";
    card.textContent = "❔";
    board.appendChild(card);

    card.addEventListener("click", () => {
      if (card.classList.contains("flipped") || card.classList.contains("matched")) return;
      card.textContent = emoji;
      card.classList.add("flipped");

      const flippedCards = document.querySelectorAll(".memory-card.flipped");
      if (flippedCards.length !== 2) return;

      const [first, second] = [...flippedCards];
      if (first.textContent === second.textContent) {
        first.classList.add("matched");
        second.classList.add("matched");
        setButtonStatus(status, "Nice match! 🎉", "#50e3a4");
      } else {
        setButtonStatus(status, "No match — try again!", "#ff5f73");
        setTimeout(() => {
          first.textContent = "❔";
          second.textContent = "❔";
          first.classList.remove("flipped");
          second.classList.remove("flipped");
        }, 450);
      }

      setTimeout(() => {
        const remaining = document.querySelectorAll(".memory-card.matched");
        if (remaining.length === doubled.length / 2) {
          setButtonStatus(status, "You won! All pairs matched! 🏆", "#50e3a4");
        }
      }, 260);
    });
  });
}

function renderMathGame() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const answer = a + b;

  gameAreaEl.innerHTML = `
    <div class="game-box game-block">
      <div class="game-top">
        <div class="game-label">Math Blast</div>
      </div>
      <div class="problem">${a} + ${b} = ?</div>
      <div class="answer-row">
        <input id="mathInput" type="number" placeholder="Type answer" />
        <button type="button" id="submitMath">Check</button>
      </div>
      <div id="mathStatus" class="status-line">Solve the challenge.</div>
    </div>
  `;

  const input = document.getElementById("mathInput");
  const status = document.getElementById("mathStatus");
  const handleSubmit = () => {
    const value = Number(input.value);
    if (value === answer) {
      setButtonStatus(status, "Correct! Combo streak! ✨", "#50e3a4");
      input.value = "";
      setTimeout(() => renderMathGame(), 500);
    } else {
      setButtonStatus(status, "Not quite — try again!", "#ff5f73");
    }
  };

  document.getElementById("submitMath").addEventListener("click", handleSubmit);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleSubmit();
  });
}

function renderWordGame() {
  const words = ["planet", "rocket", "sun", "forest", "music", "tiger"];
  let currentWord = words[Math.floor(Math.random() * words.length)];

  gameAreaEl.innerHTML = `
    <div class="game-box game-block">
      <div class="game-top">
        <div class="game-label">Word Wave</div>
      </div>
      <div class="problem" id="wordPrompt">${currentWord.split("").sort(() => Math.random() - 0.5).join("")}</div>
      <div class="word-row">
        <input id="wordInput" placeholder="Type the correct word" />
        <button type="button" id="submitWord">Check</button>
      </div>
      <div id="wordStatus" class="status-line">Unscramble the letters.</div>
    </div>
  `;

  const input = document.getElementById("wordInput");
  const status = document.getElementById("wordStatus");
  const prompt = document.getElementById("wordPrompt");
  const handleSubmit = () => {
    const guess = input.value.trim().toLowerCase();
    if (guess === currentWord) {
      setButtonStatus(status, "You got it! ✅", "#50e3a4");
      input.value = "";
      currentWord = words[Math.floor(Math.random() * words.length)];
      prompt.textContent = currentWord.split("").sort(() => Math.random() - 0.5).join("");
    } else {
      setButtonStatus(status, "Not quite — try another word.", "#ff5f73");
    }
  };

  document.getElementById("submitWord").addEventListener("click", handleSubmit);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleSubmit();
  });
}

function renderRaceGame() {
  const routes = [
    "Start -> Left -> Up -> Right -> Goal",
    "Start -> Left -> Up -> Goal",
    "Start -> Right -> Up -> Goal",
    "Start -> Left -> Down -> Goal"
  ];

  const randomRoute = routes[Math.floor(Math.random() * routes.length)];
  const options = routes.filter((route) => route !== randomRoute).slice(0, 2);
  const choices = [randomRoute, ...options];
  choices.sort(() => Math.random() - 0.5);

  gameAreaEl.innerHTML = `
    <div class="game-box game-block">
      <div class="game-top">
        <div class="game-label">Racer Arcade</div>
      </div>
      <div class="problem" style="font-size: clamp(1.35rem, 4vw, 2rem);">${randomRoute}</div>
      <div class="quick-quiz">
        ${choices.map((option) => `<button class="quiz-option" type="button">${option}</button>`).join("")}
      </div>
      <div id="raceStatus" class="status-line">Choose the correct route.</div>
    </div>
  `;

  const status = document.getElementById("raceStatus");
  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      const choice = button.textContent.trim();
      if (choice === randomRoute) {
        setButtonStatus(status, "Perfect route! 🏁", "#50e3a4");
      } else {
        setButtonStatus(status, "Wrong route. Try again!", "#ff5f73");
      }
    });
  });
}

function renderColorGame() {
  const questions = [
    { q: "What color is the sky?", a: "blue" },
    { q: "What color is the grass?", a: "green" },
    { q: "What color is the banana?", a: "yellow" },
    { q: "What color is the sun?", a: "orange" }
  ];

  const randomQ = questions[Math.floor(Math.random() * questions.length)];
  gameAreaEl.innerHTML = `
    <div class="game-box game-block">
      <div class="game-top">
        <div class="game-label">Color Burst</div>
      </div>
      <div class="problem" style="font-size: clamp(1.5rem, 5vw, 2.2rem);">${randomQ.q}</div>
      <div class="answer-row">
        <input id="colorInput" type="text" placeholder="Type a color" />
        <button type="button" id="submitColor">Check</button>
      </div>
      <div id="colorStatus" class="status-line">Guess the correct color.</div>
    </div>
  `;

  const input = document.getElementById("colorInput");
  const status = document.getElementById("colorStatus");
  const handleSubmit = () => {
    const answer = input.value.trim().toLowerCase();
    if (answer === randomQ.a) {
      setButtonStatus(status, "Correct! Great answer! 🌈", "#50e3a4");
      input.value = "";
    } else {
      setButtonStatus(status, "Wrong answer. Try again!", "#ff5f73");
    }
  };

  document.getElementById("submitColor").addEventListener("click", handleSubmit);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleSubmit();
  });
}

function renderMazeMission() {
  const puzzle = [
    "Start -> Left -> Up -> Right -> Goal",
    "Start -> Left -> Up -> Goal",
    "Start -> Right -> Up -> Goal",
    "Start -> Left -> Down -> Goal"
  ];

  const randomPuzzle = puzzle[Math.floor(Math.random() * puzzle.length)];
  const options = puzzle.filter((item) => item !== randomPuzzle).slice(0, 2);
  const choices = [randomPuzzle, ...options].sort(() => Math.random() - 0.5);

  gameAreaEl.innerHTML = `
    <div class="game-box game-block">
      <div class="game-top">
        <div class="game-label">Maze Mission</div>
      </div>
      <div class="problem" style="font-size: clamp(1.35rem, 4vw, 2rem);">${randomPuzzle}</div>
      <div class="quick-quiz">
        ${choices.map((option) => `<button class="quiz-option" type="button">${option}</button>`).join("")}
      </div>
      <div id="mazeStatus" class="status-line">Choose the safest route.</div>
    </div>
  `;

  const status = document.getElementById("mazeStatus");
  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      const text = button.textContent.trim();
      if (text === randomPuzzle) {
        setButtonStatus(status, "Correct path! 🧭", "#50e3a4");
      } else {
        setButtonStatus(status, "Oops! Try another route.", "#ff5f73");
      }
    });
  });
}

function renderSkyFly() {
  const choices = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
  const randomAnswer = choices[Math.floor(Math.random() * choices.length)];
  const others = choices.filter((item) => item !== randomAnswer).slice(0, 2);
  const options = [randomAnswer, ...others].sort(() => Math.random() - 0.5);

  gameAreaEl.innerHTML = `
    <div class="game-box game-block">
      <div class="game-top">
        <div class="game-label">Sky Fly</div>
      </div>
      <div class="problem" style="font-size: clamp(1.4rem, 5vw, 2rem);">Which planet is ${randomAnswer}?</div>
      <div class="quick-quiz">
        ${options.map((option) => `<button class="quiz-option" type="button">${option}</button>`).join("")}
      </div>
      <div id="flyStatus" class="status-line">Choose the correct planet.</div>
    </div>
  `;

  const status = document.getElementById("flyStatus");
  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.textContent.trim();
      if (answer === randomAnswer) {
        setButtonStatus(status, "Correct! Nice one! 🚀", "#50e3a4");
      } else {
        setButtonStatus(status, "Not quite — try again!", "#ff5f73");
      }
    });
  });
}

function renderStoryGame() {
  const stories = [
    { q: "Sam saw 3 red apples and 2 green apples. How many apples did he have?", a: "5" },
    { q: "Mia found 2 shells and 1 more on the beach. How many did she find?", a: "2" },
    { q: "The dog barked at the moon. What did it do?", a: "barked" }
  ];

  const randomStory = stories[Math.floor(Math.random() * stories.length)];
  gameAreaEl.innerHTML = `
    <div class="game-box game-block">
      <div class="game-top">
        <div class="game-label">Story Sprint</div>
      </div>
      <div class="problem" style="font-size: clamp(1.35rem, 5vw, 2rem);">${randomStory.q}</div>
      <div class="answer-row">
        <input id="storyInput" type="text" placeholder="Type your answer" />
        <button type="button" id="submitStory">Check</button>
      </div>
      <div id="storyStatus" class="status-line">Choose the best answer.</div>
    </div>
  `;

  const input = document.getElementById("storyInput");
  const status = document.getElementById("storyStatus");
  const handleSubmit = () => {
    const answer = input.value.trim().toLowerCase();
    if (answer === randomStory.a.toLowerCase()) {
      setButtonStatus(status, "Correct! Great reading! 📚", "#50e3a4");
      input.value = "";
    } else {
      setButtonStatus(status, "Wrong answer. Try again!", "#ff5f73");
    }
  };

  document.getElementById("submitStory").addEventListener("click", handleSubmit);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleSubmit();
  });
}

function renderReactionGame() {
  let isReady = false;
  let startedAt = 0;

  gameAreaEl.innerHTML = `
    <div class="game-box game-block">
      <div class="game-top">
        <div class="game-label">Reaction Blitz</div>
      </div>
      <div class="reaction-row">
        <div class="reaction-box" id="reactionBox">⚪</div>
        <div class="status-line" id="reactionStatus">Wait for green...</div>
      </div>
    </div>
  `;

  const box = document.getElementById("reactionBox");
  const status = document.getElementById("reactionStatus");
  box.style.background = "rgba(255, 255, 255, 0.05)";

  const setGreen = () => {
    box.textContent = "🟢";
    setButtonStatus(status, "Click now!", "#50e3a4");
    box.style.background = "rgba(80, 227, 164, 0.14)";
    isReady = true;
    startedAt = Date.now();
  };

  const handleClick = () => {
    if (!isReady) {
      setButtonStatus(status, "Too soon! Wait for green.", "#ff5f73");
      return;
    }

    const reactionTime = Date.now() - startedAt;
    setButtonStatus(status, `Your reaction time: ${reactionTime}ms`, "#50e3a4");
    isReady = false;
    box.textContent = "⚪";
    box.style.background = "rgba(255, 255, 255, 0.05)";
  };

  box.addEventListener("click", handleClick);
  setTimeout(() => setGreen(), 1200);
}

function applyNavState() {
  navButtons.forEach((button) => {
    const isActive = button.dataset.category === selectedCategory;
    button.classList.toggle("active", isActive);
  });
}

function toggleTheme() {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  themeToggleBtn.textContent = isLight ? "☀️" : "🌙";
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextCategory = button.dataset.category || "All";
    selectedCategory = nextCategory;
    applyNavState();
    renderFilters();
    const filtered = games.filter((game) => nextCategory === "All" ? true : game.category === nextCategory);
    activeGameId = filtered[0]?.id ?? null;
    renderGames();
    if (filtered[0]) renderGamePanel(filtered[0]);
  });
});

themeToggleBtn.addEventListener("click", toggleTheme);

randomGameBtn.addEventListener("click", () => {
  const index = Math.floor(Math.random() * games.length);
  const selected = games[index];
  activeGameId = selected.id;
  selectedCategory = selected.category;
  applyNavState();
  renderFilters();
  renderGames();
  renderGamePanel(selected);
});

startBtn.addEventListener("click", () => {
  const firstGame = games[0];
  activeGameId = firstGame.id;
  selectedCategory = "All";
  applyNavState();
  renderFilters();
  renderGames();
  renderGamePanel(firstGame);
});

browseBtn.addEventListener("click", () => {
  const firstCategory = filters[1] || "Action";
  selectedCategory = firstCategory;
  applyNavState();
  renderFilters();
  const filtered = games.filter((game) => game.category === firstCategory);
  activeGameId = filtered[0]?.id ?? null;
  renderGames();
  if (filtered[0]) renderGamePanel(filtered[0]);
});

applyNavState();
renderFilters();
renderGames();

const initialGame = games[0];
activeGameId = initialGame.id;
renderGamePanel(initialGame);
