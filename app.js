const questions = [
  {
    category: "기본 정보",
    title: "이번 한 달 여행은 누구와 함께 가나요?",
    options: [
      { label: "혼자", detail: "일정과 속도를 자유롭게 정하고 싶어요.", icon: "1", weights: { solo: 3, flexible: 2, safety: 1 } },
      { label: "연인 또는 친구", detail: "함께 즐길 거리와 분위기가 중요해요.", icon: "2", weights: { social: 3, food: 1, city: 1 } },
      { label: "가족", detail: "안전하고 이동이 편한 곳이 좋아요.", icon: "3", weights: { family: 3, safety: 3, comfort: 2 } },
      { label: "일행은 미정", detail: "현지에서 사람을 만나도 좋고 혼자도 괜찮아요.", icon: "4", weights: { solo: 1, social: 2, flexible: 2 } }
    ]
  },
  {
    category: "기본 정보",
    title: "한 달 동안의 여행 예산은 어느 정도인가요?",
    options: [
      { label: "절약형", detail: "숙소와 식비를 아껴 오래 머물고 싶어요.", icon: "$", weights: { budget: 3, asia: 2, slow: 1 } },
      { label: "균형형", detail: "가끔 좋은 숙소와 식당도 즐기고 싶어요.", icon: "$$", weights: { balanced: 3, comfort: 1 } },
      { label: "여유형", detail: "비용보다 경험의 질을 더 우선해요.", icon: "$$$", weights: { premium: 3, comfort: 2, culture: 1 } },
      { label: "아직 미정", detail: "추천을 보고 예산을 조정할 수 있어요.", icon: "?", weights: { flexible: 2, balanced: 1 } }
    ]
  },
  {
    category: "기본 정보",
    title: "한 달 여행에서 숙소는 어떤 방식이 편한가요?",
    options: [
      { label: "한 도시에 오래", detail: "거점 하나를 잡고 동네처럼 지내고 싶어요.", icon: "A", weights: { slow: 3, local: 2, remote: 1 } },
      { label: "2~3개 도시 이동", detail: "무리하지 않게 여러 지역을 보고 싶어요.", icon: "B", weights: { balanced: 2, culture: 2, transport: 1 } },
      { label: "여러 도시 적극 이동", detail: "한 달을 꽉 채워 다양하게 보고 싶어요.", icon: "C", weights: { active: 3, transport: 2, city: 1 } },
      { label: "휴양지 중심", detail: "숙소와 주변 환경 자체가 중요해요.", icon: "D", weights: { beach: 3, comfort: 2, slow: 1 } }
    ]
  },
  {
    category: "취향",
    title: "가장 끌리는 여행 장면은 무엇인가요?",
    options: [
      { label: "도시 산책", detail: "카페, 상점, 미술관, 야경을 좋아해요.", icon: "U", weights: { city: 3, culture: 2, food: 1 } },
      { label: "자연 풍경", detail: "산, 호수, 바다, 국립공원을 원해요.", icon: "N", weights: { nature: 3, active: 1 } },
      { label: "역사와 건축", detail: "오래된 도시와 유적을 천천히 보고 싶어요.", icon: "H", weights: { culture: 3, slow: 1 } },
      { label: "해변과 휴식", detail: "수영, 선셋, 가벼운 액티비티가 좋아요.", icon: "S", weights: { beach: 3, warm: 2, slow: 1 } }
    ]
  },
  {
    category: "취향",
    title: "선호하는 여행 속도는 어느 쪽인가요?",
    options: [
      { label: "느긋하게", detail: "하루 한두 곳만 보고 여백을 남기고 싶어요.", icon: "L", weights: { slow: 3, local: 2 } },
      { label: "적당히 알차게", detail: "대표 명소와 휴식을 균형 있게 넣고 싶어요.", icon: "M", weights: { balanced: 3, culture: 1 } },
      { label: "많이 경험하기", detail: "이동이 많아도 다양한 경험이 중요해요.", icon: "F", weights: { active: 3, transport: 2 } },
      { label: "일하며 여행", detail: "업무, 인터넷, 생활 편의도 중요해요.", icon: "W", weights: { remote: 3, comfort: 2, city: 1 } }
    ]
  },
  {
    category: "취향",
    title: "기후는 어떤 쪽을 선호하나요?",
    options: [
      { label: "따뜻한 곳", detail: "가벼운 옷차림과 야외 활동이 좋아요.", icon: "T", weights: { warm: 3, beach: 1 } },
      { label: "선선한 곳", detail: "걷기 좋고 덥지 않은 날씨가 좋아요.", icon: "C", weights: { mild: 3, city: 1 } },
      { label: "계절감 있는 곳", detail: "봄꽃, 단풍, 겨울 분위기도 좋아요.", icon: "Q", weights: { seasonal: 3, culture: 1 } },
      { label: "기후는 상관없음", detail: "콘텐츠와 안전이 더 중요해요.", icon: "A", weights: { flexible: 2, safety: 1 } }
    ]
  },
  {
    category: "취향",
    title: "음식과 카페 문화는 얼마나 중요한가요?",
    options: [
      { label: "매우 중요", detail: "맛집, 시장, 카페가 여행의 핵심이에요.", icon: "F", weights: { food: 3, city: 1, local: 1 } },
      { label: "중요한 편", detail: "현지 음식은 충분히 즐기고 싶어요.", icon: "G", weights: { food: 2, culture: 1 } },
      { label: "무난하면 됨", detail: "음식보다 동선과 숙소가 중요해요.", icon: "O", weights: { comfort: 2, balanced: 1 } },
      { label: "익숙한 음식 선호", detail: "입맛 적응이 쉬운 곳이면 좋겠어요.", icon: "E", weights: { comfort: 3, family: 1 } }
    ]
  },
  {
    category: "안전과 난이도",
    title: "여행 난이도는 어느 정도가 편한가요?",
    options: [
      { label: "낮아야 함", detail: "치안, 교통, 영어 안내가 중요해요.", icon: "1", weights: { safety: 3, comfort: 3, transport: 1 } },
      { label: "보통이면 충분", detail: "기본 준비만 하면 괜찮아요.", icon: "2", weights: { balanced: 2, flexible: 1 } },
      { label: "조금 어려워도 괜찮음", detail: "낯선 환경도 여행의 일부라고 생각해요.", icon: "3", weights: { adventure: 3, local: 1 } },
      { label: "현지감 우선", detail: "관광지보다 진짜 생활감이 좋아요.", icon: "4", weights: { local: 3, adventure: 1 } }
    ]
  },
  {
    category: "활동",
    title: "한 달 동안 꼭 해보고 싶은 활동은 무엇인가요?",
    options: [
      { label: "박물관과 공연", detail: "예술, 역사, 공연장을 자주 가고 싶어요.", icon: "M", weights: { culture: 3, city: 1 } },
      { label: "트레킹과 액티비티", detail: "몸을 움직이고 풍경을 직접 보고 싶어요.", icon: "A", weights: { active: 3, nature: 2 } },
      { label: "휴양과 웰니스", detail: "마사지, 요가, 수영, 재충전이 중요해요.", icon: "R", weights: { beach: 2, slow: 2, comfort: 1 } },
      { label: "시장과 동네 탐방", detail: "현지인의 생활 리듬을 느끼고 싶어요.", icon: "L", weights: { local: 3, food: 1 } }
    ]
  },
  {
    category: "생활",
    title: "인터넷, 코워킹, 생활 편의는 얼마나 중요한가요?",
    options: [
      { label: "매우 중요", detail: "원격근무나 장기 체류 기반이 필요해요.", icon: "W", weights: { remote: 3, comfort: 2, city: 1 } },
      { label: "중요한 편", detail: "숙소 와이파이와 세탁, 교통은 좋아야 해요.", icon: "C", weights: { comfort: 2, transport: 1 } },
      { label: "보통", detail: "여행에 필요한 정도면 충분해요.", icon: "B", weights: { balanced: 2 } },
      { label: "크게 상관없음", detail: "불편함보다 새로운 경험이 더 좋아요.", icon: "X", weights: { adventure: 2, nature: 1 } }
    ]
  },
  {
    category: "관계",
    title: "현지 사람이나 다른 여행자와의 교류를 원하나요?",
    options: [
      { label: "많이 원함", detail: "커뮤니티, 클래스, 투어를 즐기고 싶어요.", icon: "Y", weights: { social: 3, city: 1, local: 1 } },
      { label: "가끔이면 좋음", detail: "필요할 때 자연스럽게 만나고 싶어요.", icon: "S", weights: { social: 1, balanced: 1 } },
      { label: "조용한 여행 선호", detail: "혼자만의 시간이 더 중요해요.", icon: "Q", weights: { solo: 2, slow: 2, nature: 1 } },
      { label: "동행과의 시간 우선", detail: "일행에게 맞는 편안함이 중요해요.", icon: "P", weights: { family: 2, comfort: 2 } }
    ]
  },
  {
    category: "우선순위",
    title: "마지막으로 가장 포기하기 어려운 조건은 무엇인가요?",
    options: [
      { label: "안전과 편의", detail: "마음 놓고 오래 머무는 것이 우선이에요.", icon: "S", weights: { safety: 4, comfort: 2 } },
      { label: "가성비", detail: "한 달 비용 대비 만족도가 중요해요.", icon: "B", weights: { budget: 4, asia: 1 } },
      { label: "문화적 깊이", detail: "도시와 역사, 예술을 깊게 보고 싶어요.", icon: "C", weights: { culture: 4, slow: 1 } },
      { label: "자연과 휴식", detail: "일상에서 멀어지는 회복감이 중요해요.", icon: "N", weights: { nature: 2, beach: 2, slow: 1 } }
    ]
  }
];

const countries = [
  {
    name: "일본",
    tags: ["초보자 친화", "도시+자연", "음식"],
    weights: { safety: 4, comfort: 4, transport: 4, food: 4, culture: 4, city: 3, solo: 2, family: 3, seasonal: 3, balanced: 2 },
    summary: "교통, 치안, 음식, 계절감이 강해 첫 한 달 해외여행이나 가족 여행에도 안정적입니다. 도쿄와 교토를 거점으로 지방 소도시를 섞기 좋습니다.",
    tip: "JR 패스보다 지역 패스와 장기 숙소 조합을 비교하면 비용을 더 세밀하게 줄일 수 있습니다."
  },
  {
    name: "포르투갈",
    tags: ["느린 여행", "해변", "카페"],
    weights: { safety: 4, mild: 4, slow: 4, city: 3, beach: 3, food: 3, remote: 3, culture: 3, solo: 2, balanced: 2 },
    summary: "리스본, 포르투, 남부 해변을 천천히 연결하기 좋고 한 달 체류 리듬이 부드럽습니다. 도시 생활과 바다 휴식의 균형이 좋습니다.",
    tip: "인기 지역은 월세와 숙박비가 빠르게 오르니 숙소 위치를 도심 바로 바깥까지 넓혀 보세요."
  },
  {
    name: "태국",
    tags: ["가성비", "휴양", "원격근무"],
    weights: { budget: 4, asia: 4, warm: 4, beach: 4, food: 4, remote: 3, social: 3, slow: 3, comfort: 2, adventure: 2 },
    summary: "방콕의 도시 에너지, 치앙마이의 장기 체류 인프라, 남부 섬의 휴양을 조합하기 좋습니다. 예산 대비 체류 만족도가 높습니다.",
    tip: "우기와 지역별 기후 차이가 크므로 북부, 방콕, 섬 지역의 시즌을 나눠 확인하세요."
  },
  {
    name: "스페인",
    tags: ["문화", "도시 산책", "음식"],
    weights: { culture: 4, food: 4, city: 4, social: 3, mild: 3, beach: 2, active: 2, balanced: 3, transport: 2 },
    summary: "마드리드, 바르셀로나, 세비야, 발렌시아처럼 성격이 다른 도시를 연결하기 좋습니다. 미술관, 건축, 음식 중심 여행에 강합니다.",
    tip: "대도시 소매치기 위험이 있는 편이라 숙소 위치와 이동 시간대, 소지품 관리를 보수적으로 잡는 편이 좋습니다."
  },
  {
    name: "이탈리아",
    tags: ["역사", "미식", "예술"],
    weights: { culture: 5, food: 4, city: 3, seasonal: 3, slow: 2, premium: 2, social: 1, transport: 2 },
    summary: "로마, 피렌체, 볼로냐, 남부 해안까지 한 달을 채워도 깊이가 남습니다. 역사와 예술을 좋아할수록 만족도가 큽니다.",
    tip: "유명 도시는 붐비므로 큰 도시 2곳과 중소 도시 2곳을 섞으면 피로도가 낮아집니다."
  },
  {
    name: "뉴질랜드",
    tags: ["자연", "로드트립", "액티비티"],
    weights: { nature: 5, active: 4, safety: 4, comfort: 3, adventure: 3, mild: 2, solo: 1, family: 2, premium: 2 },
    summary: "풍경과 액티비티가 여행의 중심이라면 강력한 후보입니다. 남섬과 북섬을 나눠 천천히 이동하면 한 달이 알맞습니다.",
    tip: "렌터카와 숙박 비용 비중이 높아 예산을 넉넉히 잡고 이동 거리를 현실적으로 줄이는 것이 좋습니다."
  },
  {
    name: "베트남",
    tags: ["가성비", "현지감", "음식"],
    weights: { budget: 4, asia: 4, food: 4, local: 4, adventure: 3, warm: 3, city: 2, beach: 2, social: 2 },
    summary: "하노이, 다낭, 호이안, 호치민을 연결하며 음식과 생활감을 깊게 느끼기 좋습니다. 비용을 아끼며 긴 여행을 만들기 좋습니다.",
    tip: "도시 간 이동 시간이 길 수 있어 야간 이동을 너무 많이 넣지 않는 편이 체력 관리에 좋습니다."
  },
  {
    name: "캐나다",
    tags: ["안전", "대자연", "다문화"],
    weights: { safety: 4, nature: 4, comfort: 4, city: 3, family: 3, active: 3, mild: 2, premium: 3 },
    summary: "도시 편의와 국립공원 자연을 함께 원하는 사람에게 좋습니다. 밴쿠버, 토론토, 몬트리올처럼 분위기가 다른 도시를 고를 수 있습니다.",
    tip: "국토가 넓어 한 달이어도 지역을 좁히는 것이 중요합니다. 동부 또는 서부 중심으로 잡아야 여유가 생깁니다."
  }
];

const typeProfiles = [
  {
    key: "slow",
    title: "느린 생활형 여행자",
    description: "한 도시를 생활권처럼 쓰면서 카페, 시장, 산책, 짧은 근교 여행을 섞을 때 만족도가 높습니다."
  },
  {
    key: "culture",
    title: "문화 몰입형 여행자",
    description: "역사, 건축, 미술관, 공연, 오래된 동네를 깊게 보는 여행에서 에너지를 얻는 타입입니다."
  },
  {
    key: "nature",
    title: "자연 회복형 여행자",
    description: "빽빽한 일정 대신 풍경, 트레킹, 바다, 호수처럼 몸이 풀리는 환경을 우선하면 좋습니다."
  },
  {
    key: "remote",
    title: "장기 체류 실속형 여행자",
    description: "인터넷, 세탁, 교통, 코워킹 같은 생활 기반이 갖춰진 도시에서 여행과 일상을 섞기 좋습니다."
  },
  {
    key: "active",
    title: "경험 수집형 여행자",
    description: "도시 이동, 액티비티, 근교 탐방을 적극적으로 넣을수록 한 달 여행의 만족도가 올라갑니다."
  },
  {
    key: "comfort",
    title: "안정 지향형 여행자",
    description: "숙소, 교통, 치안, 의료 접근성처럼 기본기가 탄탄한 곳에서 오래 머물 때 편안합니다."
  }
];

const state = {
  current: 0,
  answers: []
};

const els = {
  startButton: document.querySelector("#startButton"),
  quizPanel: document.querySelector("#quizPanel"),
  resultPanel: document.querySelector("#resultPanel"),
  category: document.querySelector("#questionCategory"),
  title: document.querySelector("#questionTitle"),
  progressLabel: document.querySelector("#progressLabel"),
  progressFill: document.querySelector("#progressFill"),
  optionsGrid: document.querySelector("#optionsGrid"),
  backButton: document.querySelector("#backButton"),
  resetButton: document.querySelector("#resetButton"),
  retakeButton: document.querySelector("#retakeButton"),
  resultTitle: document.querySelector("#resultTitle"),
  resultSummary: document.querySelector("#resultSummary"),
  resultGrid: document.querySelector("#resultGrid"),
  typeDescription: document.querySelector("#typeDescription"),
  travelTip: document.querySelector("#travelTip")
};

function renderQuestion() {
  const question = questions[state.current];
  els.resultPanel.classList.add("hidden");
  els.quizPanel.classList.remove("hidden");
  els.category.textContent = question.category;
  els.title.textContent = question.title;
  els.progressLabel.textContent = `${state.current + 1} / ${questions.length}`;
  els.progressFill.style.width = `${((state.current + 1) / questions.length) * 100}%`;
  els.backButton.disabled = state.current === 0;
  els.optionsGrid.innerHTML = question.options
    .map((option, index) => `
      <button class="option-card" type="button" data-index="${index}">
        <span class="option-icon" aria-hidden="true">${option.icon}</span>
        <span>
          <strong>${option.label}</strong>
          <span>${option.detail}</span>
        </span>
      </button>
    `)
    .join("");
}

function addWeights(target, weights) {
  Object.entries(weights).forEach(([key, value]) => {
    target[key] = (target[key] || 0) + value;
  });
}

function getScores() {
  return state.answers.reduce((acc, answer) => {
    addWeights(acc, answer.weights);
    return acc;
  }, {});
}

function calculateResults() {
  const userScores = getScores();
  const maxScore = Math.max(...Object.values(userScores), 1);
  const ranked = countries
    .map((country) => {
      const rawScore = Object.entries(country.weights).reduce((sum, [key, weight]) => {
        return sum + (userScores[key] || 0) * weight;
      }, 0);
      const normalized = Math.round(Math.min(98, 58 + (rawScore / (maxScore * 20)) * 40));
      return { ...country, rawScore, score: normalized };
    })
    .sort((a, b) => b.rawScore - a.rawScore)
    .slice(0, 3);

  const bestType = typeProfiles
    .map((type) => ({ ...type, score: userScores[type.key] || 0 }))
    .sort((a, b) => b.score - a.score)[0];

  return { ranked, bestType, userScores };
}

function renderResults() {
  const { ranked, bestType, userScores } = calculateResults();
  const top = ranked[0];
  els.quizPanel.classList.add("hidden");
  els.resultPanel.classList.remove("hidden");
  els.resultTitle.textContent = `${top.name}을 가장 추천합니다`;
  els.resultSummary.textContent = `${bestType.title} 성향이 강하게 나타났습니다. 한 달 여행이라면 이동을 너무 촘촘히 잡기보다, 머무는 도시의 생활 리듬과 근교 여행을 함께 설계하는 방식이 잘 맞습니다.`;
  els.typeDescription.textContent = bestType.description;
  els.travelTip.textContent = makeTravelTip(userScores);
  els.resultGrid.innerHTML = ranked.map((country, index) => `
    <article class="country-card">
      <div class="country-rank">추천 ${index + 1}순위</div>
      <h3>${country.name}</h3>
      <div class="score-row">
        <div class="score-bar" aria-hidden="true">
          <span style="--score-width: ${country.score}%"></span>
        </div>
        <span>${country.score}점</span>
      </div>
      <p>${country.summary}</p>
      <div class="tag-list">
        ${country.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <p><strong>추천 설계:</strong> ${country.tip}</p>
    </article>
  `).join("");
  els.resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function makeTravelTip(scores) {
  if ((scores.remote || 0) >= 5) {
    return "숙소 예약 전 실제 와이파이 속도, 책상 유무, 세탁 접근성, 장기 숙박 할인을 확인하세요. 한 달 체류는 생활 편의가 만족도를 크게 좌우합니다.";
  }
  if ((scores.family || 0) >= 4 || (scores.safety || 0) >= 7) {
    return "이동 횟수를 줄이고 병원, 대중교통, 마트 접근성이 좋은 지역을 거점으로 잡으세요. 안전 경보와 여행자 보험 조건도 출발 전에 확인하는 편이 좋습니다.";
  }
  if ((scores.budget || 0) >= 5) {
    return "항공권보다 숙박, 도시 간 이동, 식비의 총합이 중요합니다. 한 도시 장기 숙박과 현지 교통권을 묶어 예산을 계산해 보세요.";
  }
  if ((scores.nature || 0) >= 5 || (scores.active || 0) >= 5) {
    return "자연 중심 여행은 날씨와 이동 시간이 변수입니다. 핵심 액티비티 사이에 회복일을 넣으면 한 달 전체의 컨디션이 안정됩니다.";
  }
  return "초반 1주는 적응, 중반 2주는 핵심 경험, 마지막 1주는 여유와 재방문으로 나누면 한 달 여행이 덜 지치고 더 깊어집니다.";
}

function resetQuiz() {
  state.current = 0;
  state.answers = [];
  renderQuestion();
  els.quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

els.optionsGrid.addEventListener("click", (event) => {
  const button = event.target.closest(".option-card");
  if (!button) return;
  const answer = questions[state.current].options[Number(button.dataset.index)];
  state.answers[state.current] = answer;
  if (state.current === questions.length - 1) {
    renderResults();
    return;
  }
  state.current += 1;
  renderQuestion();
});

els.backButton.addEventListener("click", () => {
  if (state.current === 0) return;
  state.current -= 1;
  renderQuestion();
});

els.resetButton.addEventListener("click", resetQuiz);
els.retakeButton.addEventListener("click", resetQuiz);
els.startButton.addEventListener("click", () => {
  els.quizPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderQuestion();
