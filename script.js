// --- Script data: katakana, hiragana, kanji ---
const SCRIPTS = {
  katakana: {
    panelTitle: "เลือกวรรค (เลือกได้หลายวรรค)",
    hasCombo: true,
    rows: {
      "あ": {label:"a-row", items:[["ア","a"],["イ","i"],["ウ","u"],["エ","e"],["オ","o"]]},
      "か": {label:"ka-row", items:[["カ","ka"],["キ","ki"],["ク","ku"],["ケ","ke"],["コ","ko"]]},
      "さ": {label:"sa-row", items:[["サ","sa"],["シ","shi"],["ス","su"],["セ","se"],["ソ","so"]]},
      "た": {label:"ta-row", items:[["タ","ta"],["チ","chi"],["ツ","tsu"],["テ","te"],["ト","to"]]},
      "な": {label:"na-row", items:[["ナ","na"],["ニ","ni"],["ヌ","nu"],["ネ","ne"],["ノ","no"]]},
      "は": {label:"ha-row", items:[["ハ","ha"],["ヒ","hi"],["フ","fu"],["ヘ","he"],["ホ","ho"]]},
      "ま": {label:"ma-row", items:[["マ","ma"],["ミ","mi"],["ム","mu"],["メ","me"],["モ","mo"]]},
      "や": {label:"ya-row", items:[["ヤ","ya"],["ユ","yu"],["ヨ","yo"]]},
      "ら": {label:"ra-row", items:[["ラ","ra"],["リ","ri"],["ル","ru"],["レ","re"],["ロ","ro"]]},
      "わ": {label:"wa-row", items:[["ワ","wa"],["ヲ","wo"],["ン","n"]]},
      "が": {label:"ga-row (濁音)", items:[["ガ","ga"],["ギ","gi"],["グ","gu"],["ゲ","ge"],["ゴ","go"]]},
      "ざ": {label:"za-row (濁音)", items:[["ザ","za"],["ジ","ji"],["ズ","zu"],["ゼ","ze"],["ゾ","zo"]]},
      "だ": {label:"da-row (濁音)", items:[["ダ","da"],["ヂ","ji"],["ヅ","zu"],["デ","de"],["ド","do"]]},
      "ば": {label:"ba-row (濁音)", items:[["バ","ba"],["ビ","bi"],["ブ","bu"],["ベ","be"],["ボ","bo"]]},
      "ぱ": {label:"pa-row (半濁音)", items:[["パ","pa"],["ピ","pi"],["プ","pu"],["ペ","pe"],["ポ","po"]]},
    },
    small: {"ャ":"ya","ュ":"yu","ョ":"yo"},
    comboBase: ["キ","シ","チ","ニ","ヒ","ミ","リ","ギ","ジ","ヂ","ビ","ピ"],
    comboBaseRomaji: {"キ":"k","シ":"sh","チ":"ch","ニ":"n","ヒ":"h","ミ":"m","リ":"r","ギ":"g","ジ":"j","ヂ":"j","ビ":"b","ピ":"p"}
  },
  hiragana: {
    panelTitle: "เลือกวรรค (เลือกได้หลายวรรค)",
    hasCombo: true,
    rows: {
      "あ": {label:"a-row", items:[["あ","a"],["い","i"],["う","u"],["え","e"],["お","o"]]},
      "か": {label:"ka-row", items:[["か","ka"],["き","ki"],["く","ku"],["け","ke"],["こ","ko"]]},
      "さ": {label:"sa-row", items:[["さ","sa"],["し","shi"],["す","su"],["せ","se"],["そ","so"]]},
      "た": {label:"ta-row", items:[["た","ta"],["ち","chi"],["つ","tsu"],["て","te"],["と","to"]]},
      "な": {label:"na-row", items:[["な","na"],["に","ni"],["ぬ","nu"],["ね","ne"],["の","no"]]},
      "は": {label:"ha-row", items:[["は","ha"],["ひ","hi"],["ふ","fu"],["へ","he"],["ほ","ho"]]},
      "ま": {label:"ma-row", items:[["ま","ma"],["み","mi"],["む","mu"],["め","me"],["も","mo"]]},
      "や": {label:"ya-row", items:[["や","ya"],["ゆ","yu"],["よ","yo"]]},
      "ら": {label:"ra-row", items:[["ら","ra"],["り","ri"],["る","ru"],["れ","re"],["ろ","ro"]]},
      "わ": {label:"wa-row", items:[["わ","wa"],["を","wo"],["ん","n"]]},
      "が": {label:"ga-row (濁音)", items:[["が","ga"],["ぎ","gi"],["ぐ","gu"],["げ","ge"],["ご","go"]]},
      "ざ": {label:"za-row (濁音)", items:[["ざ","za"],["じ","ji"],["ず","zu"],["ぜ","ze"],["ぞ","zo"]]},
      "だ": {label:"da-row (濁音)", items:[["だ","da"],["ぢ","ji"],["づ","zu"],["で","de"],["ど","do"]]},
      "ば": {label:"ba-row (濁音)", items:[["ば","ba"],["び","bi"],["ぶ","bu"],["べ","be"],["ぼ","bo"]]},
      "ぱ": {label:"pa-row (半濁音)", items:[["ぱ","pa"],["ぴ","pi"],["ぷ","pu"],["ぺ","pe"],["ぽ","po"]]},
    },
    small: {"ゃ":"ya","ゅ":"yu","ょ":"yo"},
    comboBase: ["き","し","ち","に","ひ","み","り","ぎ","じ","ぢ","び","ぴ"],
    comboBaseRomaji: {"き":"k","し":"sh","ち":"ch","に":"n","ひ":"h","み":"m","り":"r","ぎ":"g","じ":"j","ぢ":"j","び":"b","ぴ":"p"}
  },
  kanji: {
    panelTitle: "เลือกหมวดคันจิ (เลือกได้หลายหมวด)",
    hasCombo: false,
    rows: {
      "数": {label:"ตัวเลข", items:[["一","ichi"],["二","ni"],["三","san"],["四","yon"],["五","go"],["六","roku"],["七","nana"],["八","hachi"],["九","kyuu"],["十","juu"]]},
      "人": {label:"คน/ครอบครัว", items:[["人","hito"],["子","ko"],["女","onna"],["男","otoko"],["父","chichi"],["母","haha"],["友","tomo"]]},
      "自然": {label:"ธรรมชาติ", items:[["山","yama"],["川","kawa"],["木","ki"],["火","hi"],["水","mizu"],["土","tsuchi"],["空","sora"],["雨","ame"]]},
      "時間": {label:"เวลา/วัน", items:[["日","hi"],["月","tsuki"],["年","toshi"],["今","ima"],["時","toki"],["週","shuu"]]},
      "方向": {label:"ทิศ/ตำแหน่ง", items:[["上","ue"],["下","shita"],["中","naka"],["左","hidari"],["右","migi"],["前","mae"],["後","ato"]]},
      "学校": {label:"โรงเรียน", items:[["学","gaku"],["校","kou"],["先生","sensei"],["生","sei"],["本","hon"],["書","kaku"]]},
    }
  }
};

let currentScript = 'hiragana';
let selectedRows = new Set();
let comboMode = false;
let pool = [];        // array of [kanaText, romaji]
let questions = [];
let qi = 0;
let score = 0;
let locked = false;
let timerInterval = null;
let timeLeft = 15;
let paused = false;

function switchScript(script){
  currentScript = script;
  selectedRows = new Set();
  comboMode = false;
  document.getElementById('comboSwitch').classList.remove('on');
  document.getElementById('comboHint').style.display = 'none';
  document.querySelectorAll('.tab-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.script === script);
  });
  document.getElementById('panelTitle').textContent = SCRIPTS[script].panelTitle;
  document.getElementById('comboToggleWrap').style.display = SCRIPTS[script].hasCombo ? 'flex' : 'none';
  buildRowPicker();
  updateStartBtn();
}

function buildRowPicker(){
  const el = document.getElementById('rowPicker');
  el.innerHTML = '';
  const rows = SCRIPTS[currentScript].rows;
  Object.entries(rows).forEach(([key,row])=>{
    const btn = document.createElement('div');
    btn.className = 'row-btn';
    btn.dataset.key = key;
    btn.innerHTML = `<span class="kana">${row.items.map(i=>i[0]).join('')}</span><span class="romaji">${row.label}</span>`;
    btn.onclick = ()=>toggleRow(key, btn);
    el.appendChild(btn);
  });
}

function toggleRow(key, btn){
  if(selectedRows.has(key)){
    selectedRows.delete(key);
    btn.classList.remove('active');
  } else {
    selectedRows.add(key);
    btn.classList.add('active');
  }
  updateStartBtn();
}

function toggleCombo(){
  if(!SCRIPTS[currentScript].hasCombo) return;
  comboMode = !comboMode;
  document.getElementById('comboSwitch').classList.toggle('on', comboMode);
  document.getElementById('comboHint').style.display = comboMode ? 'block' : 'none';
}

function updateStartBtn(){
  const btn = document.getElementById('startBtn');
  if(selectedRows.size === 0){
    btn.disabled = true;
    btn.textContent = 'เลือกอย่างน้อย 1 หมวดก่อนเริ่ม';
  } else {
    btn.disabled = false;
    btn.textContent = `เริ่มฝึก (${selectedRows.size} หมวดที่เลือก)`;
  }
}

function buildPool(){
  pool = [];
  const data = SCRIPTS[currentScript];
  selectedRows.forEach(key=>{
    data.rows[key].items.forEach(item=> pool.push(item));
  });

  if(comboMode && data.hasCombo){
    const bases = pool.map(p=>p[0]).filter(k=>data.comboBase.includes(k));
    if(bases.length > 0){
      const combos = [];
      bases.forEach(base=>{
        Object.entries(data.small).forEach(([small, sromaji])=>{
          const consonant = data.comboBaseRomaji[base] || '';
          combos.push([base+small, consonant+sromaji]);
        });
      });
      pool = pool.concat(combos);
    }
  }
}

function startQuiz(){
  buildPool();
  if(pool.length < 4){
    alert('เลือกวรรคเพิ่มอีกหน่อยนะครับ ต้องมีตัวเลือกพอสำหรับสร้างคำถาม');
    return;
  }
  questions = shuffle([...pool]).slice(0, Math.min(10, pool.length));
  qi = 0; score = 0;
  document.getElementById('setup').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  renderQuestion();
}

function shuffle(arr){
  for(let i=arr.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

function renderQuestion(){
  locked = false;
  const [kana, romaji] = questions[qi];
  document.getElementById('kanaBig').textContent = kana;
  document.getElementById('qIndex').textContent = `${qi+1} / ${questions.length}`;
  document.getElementById('scoreNum').textContent = score;
  document.getElementById('progressFill').style.width = `${(qi/questions.length)*100}%`;
  document.getElementById('nextBtn').style.display = 'none';

  // build 4 choices: correct + 3 distractors from pool
  let distractors = shuffle(pool.filter(p=>p[1]!==romaji)).slice(0,3).map(p=>p[1]);
  // ensure uniqueness
  distractors = [...new Set(distractors)];
  while(distractors.length < 3){
    distractors.push(romaji + Math.random().toString(36).slice(2,3));
  }
  const choices = shuffle([romaji, ...distractors.slice(0,3)]);

  const choicesEl = document.getElementById('choices');
  choicesEl.innerHTML = '';
  choices.forEach(c=>{
    const btn = document.createElement('div');
    btn.className = 'choice';
    btn.textContent = c;
    btn.onclick = ()=>selectAnswer(btn, c, romaji);
    choicesEl.appendChild(btn);
  });

  startTimer();
}

function startTimer(){
  clearInterval(timerInterval);
  timeLeft = 15;
  paused = false;
  document.getElementById('pauseBtn').textContent = '❚❚ หยุด';
  updateTimerBar();
  timerInterval = setInterval(()=>{
    if(paused) return;
    timeLeft--;
    updateTimerBar();
    if(timeLeft <= 0){
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
}

function updateTimerBar(){
  const fill = document.getElementById('timerFill');
  const num = document.getElementById('timerNum');
  const pct = (timeLeft/15)*100;
  fill.style.width = pct + '%';
  const isUrgent = timeLeft <= 5;
  fill.classList.toggle('urgent', isUrgent);
  num.textContent = timeLeft;
  num.classList.toggle('urgent', isUrgent);
}

function timeUp(){
  if(locked) return;
  locked = true;
  const correct = questions[qi][1];
  document.querySelectorAll('.choice').forEach(b=>{
    if(b.textContent === correct) b.classList.add('correct');
  });
  document.getElementById('nextBtn').style.display = 'block';
}

function togglePause(){
  paused = !paused;
  document.getElementById('pauseOverlay').style.display = paused ? 'flex' : 'none';
  document.getElementById('pauseBtn').textContent = paused ? '▶ เล่นต่อ' : '❚❚ หยุด';
}

function goHome(){
  clearInterval(timerInterval);
  paused = false;
  document.getElementById('pauseOverlay').style.display = 'none';
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'none';
  document.getElementById('setup').style.display = 'block';
}

function selectAnswer(btn, chosen, correct){
  if(locked) return;
  locked = true;
  clearInterval(timerInterval);
  const all = document.querySelectorAll('.choice');
  all.forEach(b=>{
    if(b.textContent === correct) b.classList.add('correct');
    else if(b === btn) b.classList.add('wrong');
  });
  if(chosen === correct) score++;
  document.getElementById('scoreNum').textContent = score;
  document.getElementById('nextBtn').style.display = 'block';
}

function nextQuestion(){
  qi++;
  if(qi >= questions.length){
    showResult();
  } else {
    renderQuestion();
  }
}

function showResult(){
  clearInterval(timerInterval);
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('progressFill').style.width = '100%';
  const pct = Math.round((score/questions.length)*100);
  document.getElementById('resultScore').textContent = `${score} / ${questions.length}`;
  let msg = 'ลองใหม่อีกครั้งนะ ฝึกบ่อยๆ จะจำได้เอง';
  if(pct >= 90) msg = 'เก่งมาก! แม่นเป๊ะ 🎌';
  else if(pct >= 70) msg = 'ดีมาก ใกล้จะแม่นแล้ว';
  else if(pct >= 50) msg = 'พอใช้ได้ ฝึกอีกนิดนะ';
  document.getElementById('resultMsg').textContent = msg;
}

function resetAll(){
  document.getElementById('result').style.display = 'none';
  document.getElementById('setup').style.display = 'block';
}

buildRowPicker();
updateStartBtn();
