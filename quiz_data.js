
const quizJP = [
  {
    question: "Q1：「やってらんない！くそ！」 やさしい言葉に言いかえるなら？",
    options: [
      "① 自分が悪いってことだよね",
      "② これは、いったん距離を置くタイミングかも",
      "③ やめてやる！"
    ],
    correct: 1,
    feedback: [
      "自己否定は気力をさらに削ります。",
      "怒りの爆発を外に向けず、「距離を置く」が自分を守る第一歩。",
      "衝動的な放棄は後悔や孤立を招きます。まずは「間」を取る選択を。"
    ]
  },
  {
    question: "Q2：「もう限界…」 やさしい言葉に言いかえるなら？",
    options: [
      "① 限界を超えてみよう",
      "② 深呼吸してリセットしよう",
      "③ とにかく耐えよう"
    ],
    correct: 1,
    feedback: [
      "無理な突破は心と体に負担をかけます。",
      "限界＝終わりではなく、リセットのサインと受け止めて。",
      "我慢の継続は疲弊につながります。"
    ]
  },
  {
    question: "Q3：「何もかも無理」 やさしい言葉に言いかえるなら？",
    options: [
      "① 諦めよう",
      "② 少しずつでいい",
      "③ 全部やらなきゃ"
    ],
    correct: 1,
    feedback: [
      "諦め＝無価値ではありません。",
      "全部無理、は脳の錯覚。「ひとつずつ」が現実的な対処法。",
      "完璧主義はさらなる重圧を生みます。"
    ]
  },
  {
    question: "Q4：「誰もわかってくれない」 やさしい言葉に言いかえるなら？",
    options: [
      "① 感情を出すと迷惑だから黙ろう",
      "② 自分の気持ちは間違ってるかもしれない",
      "③ まず自分が自分をわかってあげよう"
    ],
    correct: 2,
    feedback: [
      "感情を閉じ込めることは、心の疲労を蓄積させます。",
      "自分の感情を疑うことは自己否定の第一歩です。",
      "「誰か」より先に「自分」が理解者になることで心が整います。"
    ]
  },
  {
    question: "Q5：「なんで私ばっかり…」 やさしい言葉に言いかえるなら？",
    options: [
      "① 頼れる誰かを探してみよう",
      "② みんな頑張ってるから比べない",
      "③ 愚痴を言っても何も変わらない"
    ],
    correct: 0,
    feedback: [
      "助けを求めるのは弱さではなく、強さのサインです。",
      "比べることで見失うのは、自分の頑張りです。",
      "思いを吐き出すことは、変化の一歩になるかもしれません。"
    ]
  }
];

const quizEN = [
  {
    question: "Q1: “I can’t take this anymore!” Which phrase softens this feeling best?",
    options: [
      "① Maybe I’m the problem",
      "② It might be a timing to take some distance",
      "③ I’ll just quit!"
    ],
    correct: 1,
    feedback: [
      "Self-blame drains emotional energy.",
      "Taking a step back is the first step to protecting yourself.",
      "Impulsive quitting may lead to regret and isolation."
    ]
  },
  {
    question: "Q2: “I’ve hit my limit…” Which phrase softens this feeling best?",
    options: [
      "① Push through anyway",
      "② Let’s reset with a deep breath",
      "③ Just keep enduring"
    ],
    correct: 1,
    feedback: [
      "Pushing through can cause burnout.",
      "Hitting your limit is a sign to pause, not to break.",
      "Endurance without recovery leads to exhaustion."
    ]
  },
  {
    question: "Q3: “Everything feels impossible” Which phrase softens this feeling best?",
    options: [
      "① Give up",
      "② Step by step is just fine",
      "③ I have to do it all"
    ],
    correct: 1,
    feedback: [
      "Giving up doesn’t mean you’re worthless.",
      "‘Everything is impossible’ is often a cognitive illusion. Step-by-step works best.",
      "Perfectionism adds more pressure."
    ]
  },
  {
    question: "Q4: “No one understands me…” Which phrase softens this feeling best?",
    options: [
      "① I should just stay silent",
      "② Maybe I’m wrong to feel this way",
      "③ Let yourself understand you first"
    ],
    correct: 2,
    feedback: [
      "Suppressing feelings creates internal stress.",
      "Doubting your emotions leads to self-denial.",
      "Being your own supporter brings peace."
    ]
  },
  {
    question: "Q5: “Why is it always me…?” Which phrase softens this feeling best?",
    options: [
      "① Try finding someone to lean on",
      "② Maybe I’m just unlucky",
      "③ Just endure silently"
    ],
    correct: 0,
    feedback: [
      "Asking for help shows strength, not weakness.",
      "Believing you're unlucky dismisses your feelings.",
      "Silence can deepen your struggle."
    ]
  }
];

let lang = "jp";
let current = 0;

function switchLang(newLang) {
  lang = newLang;
  current = 0;
  document.getElementById("retry-button").style.display = "none";
  showQuestion();
}

function showQuestion() {
  const quiz = lang === "jp" ? quizJP : quizEN;
  const q = quiz[current];
  document.getElementById("question").textContent = q.question;
  const options = document.getElementById("options");
  options.innerHTML = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("next-button").style.display = "none";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option";
    btn.onclick = () => {
      const isCorrect = idx === q.correct;
      const feedback = q.feedback[idx];
      document.getElementById("result").innerHTML = (isCorrect ? "✅ 正解！ / Correct!" : "❌ 不正解… / Incorrect…") + "<br>" + feedback;

      if (current < quiz.length - 1) {
        document.getElementById("next-button").style.display = "inline-block";
      } else {
        document.getElementById("retry-button").style.display = "inline-block";
        document.getElementById("result").innerHTML += "<br><br>🎉 お疲れさまでした！ / Well done!";
      }
    };
    options.appendChild(btn);
  });
}

function nextQuestion() {
  current++;
  document.getElementById("next-button").style.display = "none";
  showQuestion();
}

function restartQuiz() {
  current = 0;
  document.getElementById("retry-button").style.display = "none";
  showQuestion();
}

document.addEventListener("DOMContentLoaded", showQuestion);
