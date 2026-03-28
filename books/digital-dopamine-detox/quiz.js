/**
 * Digital Dopamine Detox - Phone Addiction Profile Assessment
 * v1.0 — Trigger types, dependency depth, brain config, relapse risk
 * Matches CTO assessment structure: email gate via Beehiiv
 */

var DDT_AMAZON_URL = '/books/digital-dopamine-detox/';
var DDT_SITE_URL = 'https://mjcalloway.com';
var DDT_ASSESSMENT_URL = 'https://mjcalloway.com/books/digital-dopamine-detox/assessment';

// Trigger Type definitions
var TRIGGER_TYPES = {
  transition: {
    name: 'The Transition Filler',
    shortName: 'Transition Filler',
    summary: 'You fill the micro-gaps. Every small task ends with your phone in your hand. You sent an email, you open Instagram. You put the kettle on, you open TikTok. The pattern is automatic. You don\'t decide to pick up your phone. The end of one thing triggers the start of scrolling.',
    costOneLiner: 'You haven\'t had an uninterrupted thought in months. Every gap between tasks gets filled before your brain has a chance to do anything with the space.',
    protocol: 'Week One data collection will be eye-opening for you. Your pickup count is probably higher than you think because most of them happen in two-second windows you don\'t register. Week Two\'s friction mechanisms are your most important protocol step. You need to break the chain between "finished something" and "opened phone." Your Day 1 action: every time you finish a task today, put both hands flat on your desk for five seconds before doing anything else. That pause is the entire intervention.',
    hardestWeek: 'Week Two. The friction mechanisms will make you aware of how many times you reach for your phone between tasks. That awareness is uncomfortable. It should be.',
    firstChapter: 'Start with Chapter 6 (Week One). Your data will shock you.',
    shareText: 'I\'m a Transition Filler. My phone fills every gap between tasks. What\'s your phone addiction profile?'
  },
  anxiety: {
    name: 'The Anxiety Escaper',
    shortName: 'Anxiety Escaper',
    summary: 'You don\'t scroll for content. You scroll to regulate how you feel. The phone isn\'t entertainment for you. It\'s a numbing tool. When stress or anxiety spikes, your hand moves toward your pocket before you\'ve consciously decided anything.',
    costOneLiner: 'The anxiety is still there when you put the phone down. Plus now you\'ve lost an hour. The phone doesn\'t solve the feeling. It postpones it and adds guilt.',
    protocol: 'Removing the phone without replacing it with another way to handle the feeling will fail. You need to identify one non-screen anxiety response before you start Week Two. A breathing pattern, a walk, something physical. You need it ready before you need it, because when the anxiety hits you won\'t have time to figure it out. Your Day 1 action: write down the three situations that most reliably send you to your phone. Not the apps. The feelings.',
    hardestWeek: 'Week Three. Your baseline drops and the anxiety has nowhere to hide. The replacement activities aren\'t optional for you. They\'re survival.',
    firstChapter: 'Start with Chapter 4 (Your Brain Isn\'t Standard Issue). Understanding the anxiety-dopamine connection changes everything.',
    shareText: 'I\'m an Anxiety Escaper. I scroll to stop feeling, not for content. What\'s your phone addiction profile?'
  },
  morning: {
    name: 'The Morning Defaulter',
    shortName: 'Morning Defaulter',
    summary: 'Your dopamine system is at its lowest point when you wake up. Your brain reaches for the fastest way to raise it, and your phone is the most efficient dopamine delivery system in your house. The first thing you see every morning is a screen, and that sets the tone for the entire day.',
    costOneLiner: 'Your phone owns your first waking minutes. Whatever is on that screen, good or bad, determines your mood before you\'ve made a single conscious decision.',
    protocol: 'Moving your phone out of the bedroom will be the single highest-impact change for you. Not the hardest. The highest-impact. Have something physical at your bedside before Day 8. A book. A glass of water. Not because those things are exciting. Because you\'re teaching your brain that the day doesn\'t start with a screen. Your Day 1 action: tonight, plug your phone in across the room. Buy a cheap alarm clock if you need one.',
    hardestWeek: 'Week Two, Day 8 specifically. The first morning without your phone in arm\'s reach will feel like something is missing. It is. That\'s the point.',
    firstChapter: 'Start with Chapter 2 (Why Everything You\'ve Tried Has Failed). The dopamine baseline section explains exactly why mornings are your weakest point.',
    shareText: 'I\'m a Morning Defaulter. My phone is the first thing I touch every day. What\'s your phone addiction profile?'
  },
  boredom: {
    name: 'The Boredom Filler',
    shortName: 'Boredom Filler',
    summary: 'Your brain has forgotten what unstimulated feels like. Quiet used to be tolerable. Now it\'s uncomfortable. The phone fills every gap because your dopamine baseline has risen to the point where doing nothing feels wrong.',
    costOneLiner: 'You can\'t sit with yourself anymore. Silence feels broken. That\'s not who you are. That\'s what overstimulation did to your baseline.',
    protocol: 'Week Three\'s baseline rebuilding is where your protocol lives or dies. The boredom peak around Day 13 will be your hardest point. Everything will feel flat and pointless for a stretch. That flatness is your elevated baseline complaining. It\'s the symptom you\'re treating, not evidence that the protocol isn\'t working. Your Day 1 action: sit for five minutes today with no phone, no screen, no input. Just sit. Notice how that feels. That discomfort is your baseline talking.',
    hardestWeek: 'Week Two, around Day 13. The boredom peak. Everything feels flat. Your brain will offer you fifteen different reasons to pick up the phone. All of them will sound reasonable. None of them are.',
    firstChapter: 'Start with Chapter 8 (Week Three: Rebuilding Your Baseline). Read it before you get there so you know what\'s coming.',
    shareText: 'I\'m a Boredom Filler. My brain can\'t handle silence anymore. What\'s your phone addiction profile?'
  },
  validation: {
    name: 'The Validation Seeker',
    shortName: 'Validation Seeker',
    summary: 'You\'re hooked on the variable reward loop. The pull isn\'t about content. It\'s about the possibility that someone responded. Someone liked your post. Someone replied to your comment. The "maybe" is what drives the checking. Not what\'s actually there.',
    costOneLiner: 'You\'re not checking your phone for information. You\'re checking it for approval. And the approval never lasts longer than the next refresh.',
    protocol: 'Turning off notifications on Day 10 will feel like losing a limb. That feeling is the mechanism working. Replace continuous monitoring with specific check-in times. Twice a day, then once. Your brain will adjust. It will just fight you on the way there. Your Day 1 action: count how many times today you check for responses to something you posted or sent. Don\'t judge. Just count.',
    hardestWeek: 'Week Two, Day 10. The notification purge. Your brain will convince you that you\'re missing something important. You\'re not. You\'re missing the dopamine hit of maybe.',
    firstChapter: 'Start with Chapter 3 (How Your Phone Was Engineered Against You). The variable reward section was written for your pattern specifically.',
    shareText: 'I\'m a Validation Seeker. I check for responses, not information. What\'s your phone addiction profile?'
  },
  avoidance: {
    name: 'The Avoidance Scroller',
    shortName: 'Avoidance Scroller',
    summary: 'Your phone is a procrastination tool. You\'re not addicted to content. You\'re addicted to not starting the hard thing. The phone gives you something to do that feels like doing something while actually doing nothing.',
    costOneLiner: 'You know exactly what you should be doing right now. You\'re reading this instead. The phone isn\'t the problem. It\'s the world\'s most convenient excuse.',
    protocol: 'The friction mechanisms in Week Two help, but the real work happens in Week Three when you build task-completion loops. You need activities that produce dopamine through finishing things instead of avoiding them. Start with tasks so small they feel almost insulting. The completion is the point, not the ambition. Your Day 1 action: identify the one task you\'ve been avoiding most. Set a timer for ten minutes and start it. Just ten. You can scroll after.',
    hardestWeek: 'Week Three. Building new dopamine sources through completion when your brain has been getting free dopamine from avoidance for years. The gap between "hard thing" and "easy scroll" will feel enormous at first.',
    firstChapter: 'Start with Chapter 5 (The Real World Reset). The section on replacement activities is where your protocol gets built.',
    shareText: 'I\'m an Avoidance Scroller. I scroll to avoid the hard thing. What\'s your phone addiction profile?'
  },
  autopilot: {
    name: 'The Autopilot User',
    shortName: 'Autopilot User',
    summary: 'Most of your phone use is unconscious. You pick it up, you scroll, you put it down, and five minutes later you couldn\'t tell someone what you just looked at. The behavior runs below conscious awareness. Your hand moves before your brain has registered a decision.',
    costOneLiner: 'You\'re not choosing to scroll. You\'re not even aware you\'re scrolling. Hours disappear into something your conscious mind never agreed to.',
    protocol: 'Week One\'s tracking is the most important step for you. You literally don\'t know what you\'re doing until you measure it. The data will be uncomfortable. That discomfort is the foundation for everything that follows. Your Day 1 action: turn on Screen Time or Digital Wellbeing right now. Don\'t set any limits. Just turn on the tracking. Look at the numbers tomorrow morning.',
    hardestWeek: 'Week One. The data. Seeing 140+ pickups per day when you thought it was maybe 30. That gap between perception and reality is the entire problem, and it hits hard.',
    firstChapter: 'Start with Chapter 6 (Week One: Awareness Without Judgment). The title is the instruction.',
    shareText: 'I\'m an Autopilot User. I scroll without deciding to. What\'s your phone addiction profile?'
  }
};

// Dependency depth descriptions
var DEPENDENCY_LEVELS = {
  mild: {
    name: 'Mild',
    description: 'Your baseline hasn\'t shifted dramatically. The standard four-week protocol should work as written. You\'ll probably notice changes by Week Two.'
  },
  moderate: {
    name: 'Moderate',
    description: 'Your baseline has elevated. Everyday activities feel less engaging than they used to. Books feel slow. Conversations feel like they\'re missing something. The standard protocol works, but pay extra attention to Week Three. Your brain needs the replacement activities more than someone with a mild score.'
  },
  severe: {
    name: 'Severe',
    description: 'Your dopamine system has significantly recalibrated. Consider the extended six-to-eight week timeline even if you don\'t have ADHD. Be patient with Week Three. Your baseline needs more time to come down. This isn\'t a reflection of your discipline. It\'s a reflection of how long and how intensely you\'ve been overstimulated.'
  }
};

// Relapse risk descriptions
var RELAPSE_TYPES = {
  fatigue: {
    name: 'Fatigue-triggered',
    description: 'Your slips will happen on tired days. Sleep-deprived brains have lower impulse control and higher dopamine-seeking behavior. Build sleep hygiene into Week Two, not Week Three. Phone out of the bedroom from Day 8. Your biggest risk isn\'t scrolling at night. It\'s what the scrolling at night does to tomorrow morning.'
  },
  legitimate: {
    name: 'Legitimate-use hijack',
    description: 'You open your phone for a real reason. You respond to the text. Then you\'re still holding the phone, and Instagram is right there. Twenty minutes later you don\'t remember the text. You need stricter friction on everything, not just the worst apps. Log out of everything. Your brain uses legitimate purposes as a doorway.'
  },
  stress: {
    name: 'Stress-triggered',
    description: 'When life gets hard, your phone absorbs the stress. This works temporarily, which is why you keep doing it. The problem is that it works by numbing, not resolving. The stress is still there when you put the phone down, plus now you\'ve lost an hour. Identify one non-screen stress response before starting Week Two. You need it ready before the crisis hits.'
  },
  allornothing: {
    name: 'All-or-nothing',
    description: 'Your biggest risk isn\'t the slip. It\'s the spiral after the slip. One bad hour becomes a bad day becomes "I\'ll start fresh Monday." Read the relapse chapter before you start the protocol. The twenty-four hour reset was designed specifically for this pattern. A slip is a data point. A spiral is a choice.'
  },
  futurepromise: {
    name: 'Future-promise',
    description: 'You\'ve told yourself you\'d fix this starting tomorrow more times than you can count. The "fresh start" instinct feels productive but it\'s actually the pattern. It gives your brain permission to keep scrolling today because tomorrow is handled. Start today. Not tonight. Not Monday. Day 1 is whenever you begin tracking. There is no clean start. There is just starting.'
  }
};

// Brain config descriptions
var BRAIN_FLAGS = {
  adhd: 'Your brain runs on different wiring. Use the ADHD modifications throughout the protocol. Extended timeline of six to eight weeks. Bridge activities between high stimulation and no stimulation. Slower friction cuts in Week Two. Shorter replacement activity targets in Week Three. The protocol works for your brain. It just takes longer.',
  depression: 'You\'re using your phone to generate feeling when your emotional baseline runs flat. Taking the phone away without replacing it with another dopamine source is dangerous for you. Not dramatic-dangerous. Empty-dangerous. Prioritize physical movement in Week Three. Build exercise into the protocol earlier than the standard schedule. Your brain needs real dopamine, not just less fake dopamine.',
  restless: 'Your body needs somewhere to put the energy. Sitting still while trying not to scroll is a losing battle for you. Add physical or tactile alternatives at every friction point. A walk. A fidget tool. Standing instead of sitting. Cleaning something. Your hands need to be doing something that isn\'t scrolling.'
};

// All 23 questions
var DDT_QUESTIONS = [
  // Section 1: Trigger Profile (Q1-7)
  { text: "When I finish something small (sending an email, putting dishes away, making a decision), I pick up my phone before starting the next thing.", section: "trigger", category: "transition" },
  { text: "When I feel anxious or stressed, my first instinct is to reach for my phone. Not to solve the problem. To stop feeling the feeling.", section: "trigger", category: "anxiety" },
  { text: "I check my phone within five minutes of waking up, before I've gotten out of bed.", section: "trigger", category: "morning" },
  { text: "When I'm bored or have nothing to do, I find it almost physically uncomfortable to sit with the quiet. My phone fills that gap.", section: "trigger", category: "boredom" },
  { text: "I frequently pick up my phone to check if someone has responded to a message, a comment, or a post I made.", section: "trigger", category: "validation" },
  { text: "I use my phone to avoid starting tasks I know I should be doing. I'm not looking for anything specific. I'm just not starting the hard thing.", section: "trigger", category: "avoidance" },
  { text: "I often pick up my phone without any intention at all and only realize I've been scrolling when I check the time.", section: "trigger", category: "autopilot" },
  
  // Section 2: Dependency Depth (Q8-14)
  { text: "I have trouble reading more than a few paragraphs of a book before I feel the urge to check my phone or switch to something else.", section: "depth", category: "depth" },
  { text: "Activities I used to enjoy (cooking, walking, conversations) now feel boring unless I'm also looking at a screen.", section: "depth", category: "depth" },
  { text: "I have tried to reduce my phone use before (app timers, deleting apps, cold turkey) and it lasted less than a week.", section: "depth", category: "depth" },
  { text: "I often scroll for twenty minutes or more, find nothing interesting, and keep scrolling anyway.", section: "depth", category: "depth" },
  { text: "When my phone isn't nearby, I feel a low-grade agitation or restlessness that I can't quite explain.", section: "depth", category: "depth" },
  { text: "I regularly use my phone during meals, while someone is talking to me, or while doing something that should have my full attention.", section: "depth", category: "depth" },
  { text: "My sleep is worse on nights when I scroll in bed before falling asleep.", section: "depth", category: "depth" },
  
  // Section 3: Brain Configuration (Q15-18)
  { text: "I have been diagnosed with ADHD, or I strongly suspect I have it.", section: "brain", category: "adhd" },
  { text: "I often feel like my brain needs more stimulation than other people's. Silence, waiting, and slow activities feel genuinely painful. Not just boring. Painful.", section: "brain", category: "adhd" },
  { text: "When I feel down or emotionally flat, I use my phone to create some kind of feeling. Even if it's just the feeling of scrolling.", section: "brain", category: "depression" },
  { text: "When I try to sit still or do nothing, I feel physically restless. Not just mentally bored. Like my body needs to move or my hands need to be doing something.", section: "brain", category: "restless" },
  
  // Section 4: Relapse Vulnerability (Q19-23)
  { text: "When I'm tired or sleep-deprived, my phone use increases significantly.", section: "relapse", category: "fatigue" },
  { text: "When I pick up my phone for a legitimate reason (responding to a text, checking the weather), I frequently end up scrolling for much longer than I intended.", section: "relapse", category: "legitimate" },
  { text: "When something stressful happens at work or in my personal life, my first response is to scroll. Not to address the stress.", section: "relapse", category: "stress" },
  { text: "When I slip and scroll longer than I meant to, I tend to think 'I already messed up today, might as well keep going.'", section: "relapse", category: "allornothing" },
  { text: "I've told myself I would change my phone habits starting tomorrow. Tomorrow has come and gone multiple times.", section: "relapse", category: "futurepromise" }
];

// Likert scale
var DDT_LIKERT = [
  { value: 1, label: "Not like me" },
  { value: 2, label: "Rarely" },
  { value: 3, label: "Sometimes" },
  { value: 4, label: "Often" },
  { value: 5, label: "Very much" }
];

// State
var ddt_currentQuestion = 0;
var ddt_answers = {};

// Analytics
function ddt_trackEvent(eventName, eventData) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, eventData || {});
  }
}

// Calculate results
function ddt_calculateScores() {
  var triggerScores = { transition: 0, anxiety: 0, morning: 0, boredom: 0, validation: 0, avoidance: 0, autopilot: 0 };
  var depthTotal = 0;
  var depthCount = 0;
  var brainScores = { adhd: 0, depression: 0, restless: 0 };
  var relapseScores = { fatigue: 0, legitimate: 0, stress: 0, allornothing: 0, futurepromise: 0 };
  
  for (var key in ddt_answers) {
    var qi = parseInt(key);
    var q = DDT_QUESTIONS[qi];
    var val = ddt_answers[key];
    
    if (q.section === 'trigger') {
      triggerScores[q.category] = val;
    } else if (q.section === 'depth') {
      depthTotal += val;
      depthCount++;
    } else if (q.section === 'brain') {
      if (q.category === 'adhd') {
        brainScores.adhd = Math.max(brainScores.adhd, val);
      } else {
        brainScores[q.category] = val;
      }
    } else if (q.section === 'relapse') {
      relapseScores[q.category] = val;
    }
  }
  
  // Find primary trigger
  var primaryTrigger = 'transition';
  var maxTrigger = 0;
  for (var t in triggerScores) {
    if (triggerScores[t] > maxTrigger) {
      maxTrigger = triggerScores[t];
      primaryTrigger = t;
    }
  }
  
  // Dependency depth average
  var depthAvg = depthCount > 0 ? depthTotal / depthCount : 0;
  var depthLevel = 'mild';
  if (depthAvg > 3.5) depthLevel = 'severe';
  else if (depthAvg > 2.0) depthLevel = 'moderate';
  
  // Brain flags
  var brainFlags = [];
  if (brainScores.adhd >= 4) brainFlags.push('adhd');
  if (brainScores.depression >= 4) brainFlags.push('depression');
  if (brainScores.restless >= 4) brainFlags.push('restless');
  
  // Primary relapse risk
  var primaryRelapse = 'fatigue';
  var maxRelapse = 0;
  for (var r in relapseScores) {
    if (relapseScores[r] > maxRelapse) {
      maxRelapse = relapseScores[r];
      primaryRelapse = r;
    }
  }
  
  return {
    triggerScores: triggerScores,
    primaryTrigger: primaryTrigger,
    depthAvg: depthAvg,
    depthLevel: depthLevel,
    brainScores: brainScores,
    brainFlags: brainFlags,
    relapseScores: relapseScores,
    primaryRelapse: primaryRelapse
  };
}

// Build quiz UI
function ddt_initQuiz() {
  var startBtn = document.getElementById('start-quiz');
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  
  if (startBtn) startBtn.addEventListener('click', ddt_startQuiz);
  if (prevBtn) prevBtn.addEventListener('click', ddt_prevQuestion);
  if (nextBtn) nextBtn.addEventListener('click', ddt_nextQuestion);
  
  ddt_buildQuestions();
}

function ddt_buildQuestions() {
  var container = document.getElementById('questions-container');
  if (!container) return;
  
  for (var i = 0; i < DDT_QUESTIONS.length; i++) {
    var question = DDT_QUESTIONS[i];
    var questionEl = document.createElement('div');
    questionEl.className = 'quiz-question';
    questionEl.id = 'question-' + i;
    questionEl.setAttribute('data-question', i);
    
    var html = '<div class="question-card">';
    html += '<p class="question-text">' + question.text + '</p>';
    html += '<div class="answer-options">';
    
    for (var j = 0; j < DDT_LIKERT.length; j++) {
      var option = DDT_LIKERT[j];
      html += '<label class="answer-option" for="q' + i + '-' + option.value + '">';
      html += '<input type="radio" name="q' + i + '" id="q' + i + '-' + option.value + '" value="' + option.value + '" data-question="' + i + '">';
      html += '<span class="answer-dot"></span>';
      html += '<span>' + option.label + '</span>';
      html += '</label>';
    }
    
    html += '</div>';
    html += '</div>';
    questionEl.innerHTML = html;
    container.appendChild(questionEl);
  }
  
  var radios = container.querySelectorAll('input[type="radio"]');
  for (var k = 0; k < radios.length; k++) {
    radios[k].addEventListener('change', ddt_handleAnswer);
  }
  
  var options = container.querySelectorAll('.answer-option');
  for (var m = 0; m < options.length; m++) {
    options[m].addEventListener('click', function() {
      var siblings = this.parentElement.querySelectorAll('.answer-option');
      for (var s = 0; s < siblings.length; s++) siblings[s].classList.remove('selected');
      this.classList.add('selected');
    });
  }
}

function ddt_startQuiz() {
  document.getElementById('quiz-intro').style.display = 'none';
  document.getElementById('quiz-questions').style.display = 'block';
  ddt_showQuestion(0);
  ddt_trackEvent('ddt_assessment_start');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function ddt_showQuestion(index) {
  var questions = document.querySelectorAll('.quiz-question');
  for (var i = 0; i < questions.length; i++) {
    questions[i].classList.remove('active');
  }
  var question = document.getElementById('question-' + index);
  if (question) question.classList.add('active');
  
  ddt_currentQuestion = index;
  var progressFill = document.getElementById('progress-fill');
  if (progressFill) progressFill.style.width = ((index + 1) / DDT_QUESTIONS.length * 100) + '%';
  
  var progressText = document.getElementById('progress-text');
  if (progressText) progressText.textContent = 'Question ' + (index + 1) + ' of ' + DDT_QUESTIONS.length;
  
  ddt_updateNav();
}

function ddt_handleAnswer(e) {
  var questionIndex = parseInt(e.target.getAttribute('data-question'));
  ddt_answers[questionIndex] = parseInt(e.target.value);
  ddt_updateNav();
  
  if (ddt_currentQuestion < DDT_QUESTIONS.length - 1) {
    setTimeout(function() { ddt_nextQuestion(); }, 250);
  }
}

function ddt_updateNav() {
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.disabled = ddt_currentQuestion === 0;
  var isAnswered = ddt_answers[ddt_currentQuestion] !== undefined;
  if (nextBtn) {
    nextBtn.disabled = !isAnswered;
    nextBtn.textContent = ddt_currentQuestion === DDT_QUESTIONS.length - 1 ? 'See Results' : 'Next';
  }
}

function ddt_prevQuestion() {
  if (ddt_currentQuestion > 0) ddt_showQuestion(ddt_currentQuestion - 1);
}

function ddt_nextQuestion() {
  if (ddt_currentQuestion < DDT_QUESTIONS.length - 1) {
    ddt_showQuestion(ddt_currentQuestion + 1);
  } else {
    ddt_showResults();
  }
}

function ddt_showResults() {
  var results = ddt_calculateScores();
  var triggerData = TRIGGER_TYPES[results.primaryTrigger];
  var depthData = DEPENDENCY_LEVELS[results.depthLevel];
  var relapseData = RELAPSE_TYPES[results.primaryRelapse];
  
  document.getElementById('quiz-questions').style.display = 'none';
  var resultsContainer = document.getElementById('quiz-results');
  
  ddt_trackEvent('ddt_assessment_complete', {
    trigger_type: results.primaryTrigger,
    depth_level: results.depthLevel,
    relapse_risk: results.primaryRelapse
  });
  
  var html = '';
  
  // Result Header
  html += '<div class="results-header">';
  html += '<p class="results-label">Your Trigger Type</p>';
  html += '<h2 class="result-type">' + triggerData.name + '</h2>';
  html += '<p class="result-secondary">Dependency Depth: <strong>' + depthData.name + '</strong></p>';
  html += '</div>';
  
  // Summary (free)
  html += '<div class="result-summary">';
  html += '<p>' + triggerData.summary + '</p>';
  html += '</div>';
  
  // Cost one-liner (free)
  html += '<div class="result-cost-liner">';
  html += '<p>' + triggerData.costOneLiner + '</p>';
  html += '</div>';
  
  // Dependency depth (free)
  html += '<div class="result-cost-section">';
  html += '<h3>Your Dependency Depth: ' + depthData.name + '</h3>';
  html += '<p>' + depthData.description + '</p>';
  html += '</div>';
  
  // EMAIL GATE
  html += '<div class="email-gate" id="email-gate">';
  html += '<h3>See your full profile.</h3>';
  html += '<p>Your protocol modifications. Your relapse risk and how to prevent it. Whether you need the standard or extended timeline. Your personalized Day 1 action.</p>';
  html += '<form class="email-form" id="email-form">';
  html += '<input type="email" class="form-input" id="email-input" placeholder="your@email.com" required>';
  html += '<input type="hidden" name="trigger_type" value="' + results.primaryTrigger + '">';
  html += '<input type="hidden" name="depth_level" value="' + results.depthLevel + '">';
  html += '<input type="hidden" name="depth_avg" value="' + results.depthAvg.toFixed(1) + '">';
  html += '<input type="hidden" name="relapse_risk" value="' + results.primaryRelapse + '">';
  html += '<input type="hidden" name="brain_flags" value="' + results.brainFlags.join(',') + '">';
  html += '<button type="submit" class="btn btn--primary">Unlock My Full Profile</button>';
  html += '</form>';
  html += '<p class="email-disclaimer">One email with your results. No spam. Unsubscribe anytime.</p>';
  html += '</div>';
  
  // GATED CONTENT
  html += '<div class="gated-results" id="gated-results" style="display:none;">';
  
  // Trigger type score bars
  html += '<div class="score-bars">';
  html += '<h3 class="score-bars-title">Your Trigger Profile</h3>';
  var triggerOrder = ['transition', 'anxiety', 'morning', 'boredom', 'validation', 'avoidance', 'autopilot'];
  for (var i = 0; i < triggerOrder.length; i++) {
    var cat = triggerOrder[i];
    var score = results.triggerScores[cat];
    var pct = (score / 5) * 100;
    var isPrimary = cat === results.primaryTrigger;
    
    html += '<div class="score-bar-row' + (isPrimary ? ' is-primary' : '') + '">';
    html += '<div class="score-bar-label">';
    html += '<span class="score-bar-name">' + TRIGGER_TYPES[cat].shortName + '</span>';
    html += '<span class="score-bar-value">' + score + '/5</span>';
    html += '</div>';
    html += '<div class="score-bar-track">';
    html += '<div class="score-bar-fill" style="width: 0%" data-width="' + pct + '%"></div>';
    html += '</div>';
    html += '</div>';
  }
  html += '</div>';
  
  // Protocol modifications
  html += '<div class="result-cost-section">';
  html += '<h3>Your Protocol Modifications</h3>';
  html += '<p>' + triggerData.protocol + '</p>';
  html += '</div>';
  
  // Brain configuration flags
  if (results.brainFlags.length > 0) {
    html += '<div class="result-cost-section">';
    html += '<h3>Brain Configuration</h3>';
    for (var b = 0; b < results.brainFlags.length; b++) {
      html += '<p>' + BRAIN_FLAGS[results.brainFlags[b]] + '</p>';
    }
    html += '</div>';
  }
  
  // Relapse risk
  html += '<div class="result-cost-section">';
  html += '<h3>Your Relapse Risk: ' + relapseData.name + '</h3>';
  html += '<p>' + relapseData.description + '</p>';
  html += '</div>';
  
  // Hardest week + first chapter
  html += '<div class="result-cost-section">';
  html += '<h3>Your Hardest Week</h3>';
  html += '<p>' + triggerData.hardestWeek + '</p>';
  html += '<h3>Where to Start</h3>';
  html += '<p>' + triggerData.firstChapter + '</p>';
  html += '</div>';
  
  html += '</div>'; // close gated-results
  
  // Book CTA
  html += '<div class="result-book-cta">';
  html += '<p class="result-book-pitch">The assessment shows you where the pattern starts. The book gives you the 30-day protocol to break it. Week-by-week instructions, ADHD modifications in every chapter, and a relapse framework for when you slip.</p>';
  html += '<a href="' + DDT_AMAZON_URL + '" class="btn btn--primary" target="_blank" rel="noopener">Learn More About the Book</a>';
  html += '</div>';
  
  // CTO cross-sell
  html += '<div class="full-results" id="full-results">';
  html += '<div class="book-cta">';
  html += '<h3>Also by MJ Calloway</h3>';
  html += '<p>If people have learned how to get in through your conversations the same way your phone learned how to get in through your dopamine system, <a href="/books/close-the-opening/">Close the Opening</a> covers the 27 psychological tactics people use on you and how to stop them. <a href="/books/close-the-opening/assessment">Take that assessment too.</a></p>';
  html += '</div>';
  html += '</div>';
  
  // Share
  html += '<div class="share-section">';
  html += '<h3>Share your result</h3>';
  html += '<div class="share-buttons">';
  
  var tweetText = encodeURIComponent(triggerData.shareText + '\n\nFind yours:');
  var tweetUrl = encodeURIComponent(DDT_ASSESSMENT_URL);
  html += '<a href="https://twitter.com/intent/tweet?text=' + tweetText + '&url=' + tweetUrl + '" target="_blank" rel="noopener" class="share-btn share-btn--x">';
  html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';
  html += '<span>Post on X</span>';
  html += '</a>';
  
  html += '<a href="https://www.facebook.com/sharer/sharer.php?u=' + tweetUrl + '" target="_blank" rel="noopener" class="share-btn share-btn--fb">';
  html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
  html += '<span>Share</span>';
  html += '</a>';
  
  var linkedInUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + tweetUrl;
  html += '<a href="' + linkedInUrl + '" target="_blank" rel="noopener" class="share-btn share-btn--li">';
  html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
  html += '<span>LinkedIn</span>';
  html += '</a>';
  
  html += '<button class="share-btn share-btn--copy" onclick="ddt_copyResult(\'' + results.primaryTrigger + '\')" id="ddt-copy-btn">';
  html += '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
  html += '<span>Copy Link</span>';
  html += '</button>';
  
  html += '</div>';
  html += '</div>';
  
  resultsContainer.innerHTML = html;
  resultsContainer.classList.add('active');
  
  // Animate score bars
  setTimeout(function() {
    var bars = document.querySelectorAll('.score-bar-fill');
    for (var b = 0; b < bars.length; b++) {
      bars[b].style.width = bars[b].getAttribute('data-width');
    }
  }, 100);
  
  // Bind email form
  document.getElementById('email-form').addEventListener('submit', ddt_handleEmail);
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function ddt_handleEmail(e) {
  e.preventDefault();
  
  var form = e.target;
  var email = document.getElementById('email-input').value;
  var submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  
  var customFields = [
    { name: 'trigger_type', value: form.querySelector('input[name="trigger_type"]').value },
    { name: 'depth_level', value: form.querySelector('input[name="depth_level"]').value },
    { name: 'depth_avg', value: form.querySelector('input[name="depth_avg"]').value },
    { name: 'relapse_risk', value: form.querySelector('input[name="relapse_risk"]').value },
    { name: 'brain_flags', value: form.querySelector('input[name="brain_flags"]').value }
  ];
  
  BEEHIIV.subscribe(email, 'ddt-assessment', customFields)
  .then(function(data) {
    ddt_trackEvent('ddt_email_signup', { trigger_type: customFields[0].value });
    document.getElementById('email-gate').style.display = 'none';
    document.getElementById('gated-results').style.display = 'block';
    document.getElementById('full-results').classList.add('active');
    document.getElementById('gated-results').scrollIntoView({ behavior: 'smooth', block: 'start' });
  })
  .catch(function(error) {
    console.error('Email submission error:', error);
    submitBtn.disabled = false;
    submitBtn.textContent = 'Unlock My Full Profile';
    alert('There was an error. Please try again.');
  });
}

function ddt_copyResult(trigger) {
  var text = TRIGGER_TYPES[trigger].shareText + '\n\nFind yours: ' + DDT_ASSESSMENT_URL;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      ddt_showCopied();
    }).catch(function() {
      ddt_fallbackCopy(text);
    });
  } else {
    ddt_fallbackCopy(text);
  }
}

function ddt_fallbackCopy(text) {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    ddt_showCopied();
  } catch (e) {
    alert('Copy this:\n\n' + text);
  }
  document.body.removeChild(textarea);
}

function ddt_showCopied() {
  var btn = document.getElementById('ddt-copy-btn');
  if (btn) {
    var originalHTML = btn.innerHTML;
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span>Copied!</span>';
    btn.classList.add('copied');
    setTimeout(function() {
      btn.innerHTML = originalHTML;
      btn.classList.remove('copied');
    }, 2000);
  }
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ddt_initQuiz);
} else {
  ddt_initQuiz();
}
