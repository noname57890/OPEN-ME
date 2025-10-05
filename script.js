
const missYouReplies = [
  "You miss me? Hmm... that's your punishment for falling for someone this addictive 😘",
  "You miss me? Then maybe I should disappear for a few minutes more... make you miss me properly 😏",
  "Careful baby... missing me too much can cause serious side effects... like dreaming about me all night 💫",
  "If you miss me that much... come here, I'll let you make it up to me with kisses 🥰",
  "Mmm... you miss me? Call me and say it... I like how it sounds when you do 💞",
  "You miss me? Then call me if I don't pick up... maybe I'll reward you with a voice note later 😌🎧",
  "Missing me already? You're so needy... I love it 😝💗",
  "I miss you too... but if you were here, I'd be too busy teasing you to even say it 😋💋"
];

// 🎲 Randomly select one line
function randomMissYouReply() {
  const randomIndex = Math.floor(Math.random() * missYouReplies.length);
  return missYouReplies[randomIndex];
}

// Letter content data
const letterContent = [
    {
        title: "Open This When You First Receive It 💌",
        content: `
            <img src="assets/hi.png" alt="Hi Baby! 💕" class="cute-gif">
            <p>Hey baby, welcome to your little box of comfort 😘 Whenever you need a smile or a lil push, open any of these.</p>
            <p>For now, just know that you're loved so so much and I believe in you more than anything.</p>
            <p>Take a deep breath, relax your shoulders, and remember... we got this together 💗</p>
            <p>Alsooo I made this digital version so that we can spend money on dates and save money for our future like I promised you 😘</p>
        `
    },
    {
        title: "Open This When You Want a Pep Talk 💪",
        content: `
            <p>Hey baby, you always say you love giving pep talks but not getting one hahah but look at you... you opened this with a will 🥹 Baby if you don't get this, who will? You are literally the best. You have the mindset to succeed and everything will happen for you, I'm sure of it.</p>
            <p>Like seriously, baby, you've been consistent, you've worked hard, you never complain, you just do it. If you don't make it, then who even will?? 😤</p>
            <p>I'm manifesting it for you, and I know it's happening... you are going to be AIR 1, period. OMG I'm going to scream on the streets of BLR that my BF is the CAT topper 😭 So so proud of you, baby.</p>
            <img src="assets/bedroom.jpg" alt="Our Future Apartment">
            
        `
    },
    {
        title: "Open This One Day Before the CAT Exam 📚",
        content: `
            <p>Hey baby, I trust you. You've got this, okay? I can't wait to meet you after and shower you with kisses because now you're officially AIR 1 🩷 I can't wait to dance with you during prom night at IIM Bangalore, baby.</p>
            <img src="assets/prom.jpeg" alt="Prom Night">
            <p>You have everything it takes, and you even have your lucky shirt this time... everything will go perfectly. I can't wait to see you on the news 🩷🩷🩷</p>
            <p>YOU GOT THIS. If not you, who will?</p>
            <p>But before you go... I want to wish you in person 💕</p>
            <button class="prompt-btn continue-btn" onclick="showCallMePrompt()">Call Me 📞</button>
            <p style="font-size: 14px; margin-top: 20px; opacity: 0.7;">Press Esc to close</p>
        `
    },
    {
    title: "Open This When You're Feeling Sick 🤒",
    content: `
        <p>Awwww my baby is sick? It'll go away soon, baby 😘 Let's see if my kisses can help 😘😘 Please do the little ritual I tell you to do when you get headaches, okay? Don't be hard on yourself... Just rest and relax, and everything will get better soon 💗</p>
        
        <div class="checklist-container">
            <h3>🩷 Baby’s Healing Checklist 🩷</h3>
            <label class="cute-checkbox">
                <input type="checkbox"> ✨ Secret ritual (We don’t tell the internet 😉)
            </label>
            <label class="cute-checkbox">
                <input type="checkbox"> 📞 Hear the voice of the person you love (HINT: soon-to-be family)
            </label>
            <label class="cute-checkbox">
                <input type="checkbox"> 💊 Take your medicine, my love
            </label>
        </div>

        <!-- Cozy message block -->
        <div class="cozy-note" style="text-align:center; line-height:1.7;">
            <p>
                💞 If I were by your side right now, I’d tuck you in, feed you warm soup, take care of you just like this, stroke your hair until you drift off, make sure you’re comfy, and whisper that everything’s going to be okay... 💗
            </p>

            <p>
                💗 Until I can actually do all that be a good baby, eat your soup, take your meds, and let me pamper you from afar... please rest for me, my love. I’m right here with you in every heartbeat 💞
            </p>
        </div>
        <img src="assets/take-care.gif" alt="Me Taking Care of You 🥹" class="cute-gif">
    `
},

    {
        title: "Open This When You Got a High CAT Mock Score 🎉",
        content: `
            <p>Baby I am sooo proud of you 😭😭 Here are some kisses for my very hot and very talented boyfriend, Chirag 😘💋</p>
            <p>You are literally the most hardworking, brilliant, skilled, amazing person I know. Call me ASAP so I can appreciate you in person 😩</p>
            <p>I love you sooo much baby. And remember, next time we meet, you're gonna get lucky 😏 Remind me of this and claim your reward 😘</p>
            <img src="assets/kiss.gif" alt="Sending you kisses 💋" class="cute-gif">
            <button class="prompt-btn continue-btn" onclick="showHighScoreCallPrompt()">Call Me 📞</button>
            <p style="font-size: 14px; margin-top: 20px; opacity: 0.7;">Press Esc to close</p>
        `
    },
    {
        title: "Open This When You Miss Me 💕",
        content: `
            <p>Oh, so you miss me huh? 😏</p>
            <p>Then why are you here instead of calling me?</p>
            <p>Go on, I know you want to hear my voice 🩷</p>
            <p>There will never be a day I'm not available for my darling....I promise 💖</p>
            <button class="prompt-btn continue-btn" onclick="showMissYouCallPrompt()">Call Me 📞</button>
            <p style="font-size: 14px; margin-top: 20px; opacity: 0.7;">Press Esc to close</p>
        `
    }
];

// Elements
const landingEnvelope = document.getElementById('landing-envelope');
const mainContent = document.getElementById('main-content');
const modal = document.getElementById('letter-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');
const cards = document.querySelectorAll('.card');
const envelope = document.querySelector('.envelope');

// Landing envelope click
envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
        landingEnvelope.style.display = 'none';
        mainContent.classList.remove('hidden');
    }, 800);
});

// Confetti
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
function sizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
sizeCanvas();
window.addEventListener('resize', sizeCanvas);

let confettiPieces = [];
let confettiRAF = null;

function createConfetti() {
    const colors = ['#ff6b9d', '#ff85b3', '#ffc4d6', '#ffb3d9', '#d4b3ff', '#ffe8b3'];
    for (let i = 0; i < 100; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 10 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10,
            tiltAngleIncremental: Math.random() * 0.07 + 0.05,
            tiltAngle: 0
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach((p, i) => {
        ctx.beginPath();
        ctx.lineWidth = p.r / 2;
        ctx.strokeStyle = p.color;
        ctx.moveTo(p.x + p.tilt + p.r, p.y);
        ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r);
        ctx.stroke();

        p.tiltAngle += p.tiltAngleIncremental;
        p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
        p.tilt = Math.sin(p.tiltAngle) * 15;
        if (p.y > canvas.height) confettiPieces.splice(i, 1);
    });
    if (confettiPieces.length > 0) confettiRAF = requestAnimationFrame(drawConfetti);
    else confettiRAF = null;
}

function triggerConfetti() { confettiPieces = []; createConfetti(); drawConfetti(); }

// Modal helpers
function openModal(contentHTML) {
    modalBody.innerHTML = contentHTML;
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    modalBody.querySelectorAll('audio, video').forEach(el => { try { el.pause(); } catch {} });
    if (confettiRAF) cancelAnimationFrame(confettiRAF);
    confettiPieces = [];
    confettiRAF = null;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Card click logic
cards.forEach(card => {
    card.addEventListener('click', () => {
        const cardIndex = parseInt(card.getAttribute('data-card'), 10);
        const cardNames = ["First Receive", "Pep Talk", "CAT Exam Eve", "Feeling Sick", "High Mock Score", "Miss Me"];
        logActivity(`Clicked on card: "${cardNames[cardIndex]}"`);

        if (cardIndex === 0) showLetterContent(cardIndex);
        else if (cardIndex === 3) showSickPrompt();
        else if (cardIndex === 4) showHighScorePrompt();
        else if (cardIndex === 5) showMissYouConfirmation();
        else showConfirmationPrompt(cardIndex);
    });
});

// Miss You confirmation with random flirty message
function showMissYouConfirmation() {
    openModal(`
        <div class="prompt-content">
            <img src="assets/watching-you.gif" alt="I'm watching you 👀" class="cute-gif">
            <p>Are you sure you're not just trying to peek inside? 😏</p>
            <div class="button-group">
                <button class="prompt-btn yes-btn" onclick="handleMissYouConfirmation(true)">✅ Yes</button>
                <button class="prompt-btn no-btn" onclick="handleMissYouConfirmation(false)">❌ No</button>
            </div>
        </div>
    `);
}

function handleMissYouConfirmation(confirmed) {
    if (!confirmed) {
        logActivity(`"Miss Me" confirmation: Clicked NO (just peeking)`);
        // Send "caught peeking" email!
        sendPeekingEmail("Miss Me", [...activityLog].join('\n'));
        activityLog = [];
        openModal(`
            <div class="error-card">
                <img src="assets/miss-me.gif" alt="Miss Me 💔" class="cute-gif">
                <p>Awww. I wish you missed me for real...</p>
            </div>
        `);
        return;
    }
    logActivity(`"Miss Me" confirmation: Clicked YES (he misses you!)`);
    showRandomMissYouMessage();
}

function showRandomMissYouMessage() {
    const randomMessage = randomMissYouReply();
    logActivity(`Random miss you message shown: "${randomMessage}"`);
    openModal(`
        <div class="pep-talk-response">
            <p>${randomMessage}</p>
            <button class="prompt-btn continue-btn" onclick="showLetterContent(5)">Continue →</button>
        </div>
    `);
}

// Confirmation prompt
function showConfirmationPrompt(cardIndex) {
    openModal(`
        <div class="prompt-content">
            <img src="assets/watching-you.gif" alt="I'm watching you 👀" class="cute-gif">
            <p>Are you sure you're not just trying to peek inside? 😏</p>
            <div class="button-group">
                <button class="prompt-btn yes-btn" onclick="handleConfirmation(${cardIndex}, true)">✅ Yes</button>
                <button class="prompt-btn no-btn" onclick="handleConfirmation(${cardIndex}, false)">❌ No</button>
            </div>
        </div>
    `);
}

function handleConfirmation(cardIndex, confirmed) {
    const cardNames = ["First Receive", "Pep Talk", "CAT Exam Eve", "Feeling Sick", "High Mock Score", "Miss Me"];
    if (!confirmed) {
        logActivity(`"${cardNames[cardIndex]}" confirmation: Clicked NO (caught peeking!)`);
        // Send "caught peeking" email!
        sendPeekingEmail(cardNames[cardIndex], [...activityLog].join('\n'));
        activityLog = [];
        openModal(`<div class="error-card"><h2>404 Not Found 💔</h2><p>Looks like curiosity got the best of you, baby 😘</p></div>`);
        return;
    }
    logActivity(`"${cardNames[cardIndex]}" confirmation: Clicked YES`);
    if (cardIndex === 1) showPepTalkPrompt();
    else showLetterContent(cardIndex);
}

// Pep talk
function showPepTalkPrompt() {
    openModal(`
        <div class="prompt-content">
            <p>Be honest... did you make even one error in any mock test this year? 🤔</p>
            <div class="button-group">
                <button class="prompt-btn yes-btn" onclick="handlePepTalkResponse(true)">✅ Yes</button>
                <button class="prompt-btn no-btn" onclick="handlePepTalkResponse(false)">❌ No</button>
            </div>
        </div>
    `);
}

function handlePepTalkResponse(madeError) {
    if (madeError) {
        logActivity(`Pep Talk question: Clicked YES (admitted making errors - but we know better!)`);
        openModal(`<div class="error-card"><h2>404 Not Found 💌</h2><p>NO WAYYYY PUT YOUR SPECS ONN😘</p></div>`);
    } else {
        logActivity(`Pep Talk question: Clicked NO (confident - no errors made!)`);
        openModal(`<div class="pep-talk-response"><p>That's my baby! You won't make mistakes in the actual exam either. Consistency always wins 🩷</p><button class="prompt-btn continue-btn" onclick="showKarnatakaMessage()">Continue →</button></div>`);
    }
}

function showKarnatakaMessage() {
    logActivity(`Pep Talk: Viewed Karnataka motivation message`);
    openModal(`
        <div class="pep-talk-response">
            <p>Hey baby... did you know that no one from Karnataka got the top score last time? 🤔</p>
            <p>Don't you want to be the one to change that? 🌟</p>
            <p>You've got this, my genius baby 🩷</p>
            <button class="prompt-btn continue-btn" onclick="showPepTalkFunFact()">YESSS 🔥</button>
        </div>
    `);
}

function showPepTalkFunFact() {
    logActivity(`Pep Talk: Clicked YESSS - viewed fun fact & finished pep talk journey!`);
    openModal(`
        <div class="fun-fact-card">
            <h2>Fun fact time! 🤓</h2>
            <p>People who score around 130–140 in PYQs usually get about 160 in the actual exam.</p>
            <p>And for people like you who get 160–170 in the mocks… <strong>You're definitely getting AIR 1, baby 💪</strong></p>
            <p>See you on the newspaper.........byeeee babyyyy 💗🗞️</p>
        </div>
    `);
    triggerConfetti();
}

// Sick card
function showSickPrompt() {
    logActivity(`Sick card: Viewed intro message (he's not feeling well 🥺)`);
    openModal(`<div class="pep-talk-response"><p>If you're opening this, that means you're not feeling your best ..... so here's a little love and comfort from me 💕</p><button class="prompt-btn continue-btn" onclick="showLetterContent(3)">Continue →</button></div>`);
}

// High score card
function showHighScorePrompt() {
    logActivity(`High Score card: Viewed celebration intro (HE GOT A HIGH SCORE! 🎉)`);
    openModal(`<div class="pep-talk-response"><p>That's my baby! I'm sure this will be the most opened card ever 😂 Let's gooo!! You're just one exam away from AIR 1 🩷</p><button class="prompt-btn continue-btn" onclick="showLetterContent(4)">Continue →</button></div>`);
}

// "Call Me" prompt (CAT exam)
function showCallMePrompt() {
    logActivity(`CAT Exam Eve: Clicked "Call Me" button 📞`);
    openModal(`
        <div class="pep-talk-response" style="text-align: center;">
            <h2>Call Me Now 📞</h2>
            <p>I want to wish the future CAT topper in person! 💕</p>
            <p>Go ahead, call me... I'm waiting 🩷</p>
            <button class="prompt-btn continue-btn" onclick="window.location.href='tel:'">Call Now 📱</button>
            <p style="font-size: 14px; margin-top: 20px; opacity: 0.7;">Press Esc to close</p>
        </div>
    `);
}

// "Call Me" prompt (Miss You)
function showMissYouCallPrompt() {
    logActivity(`Miss Me card: Clicked "Call Me" button 📞💕`);
    openModal(`
        <div class="pep-talk-response" style="text-align: center;">
            <h2>Call Me Now 📞</h2>
            <p>I'm sure I miss you too 💕</p>
            <p>So what are you waiting for? Call me already... 😏🩷</p>
            <button class="prompt-btn continue-btn" onclick="window.location.href='tel:'">Call Now 📱</button>
            <p style="font-size: 14px; margin-top: 20px; opacity: 0.7;">Press Esc to close</p>
        </div>
    `);
}

// "Call Me" prompt (High Score)
function showHighScoreCallPrompt() {
    logActivity(`High Score card: Clicked "Call Me" button to celebrate! 📞🎉`);
    openModal(`
        <div class="pep-talk-response" style="text-align: center;">
            <h2>Call Me Now 📞</h2>
            <p>I can't wait to hear your voice and celebrate with you! 🎉💕</p>
            <p>Let me shower you with praise in person, baby... you deserve it 🩷</p>
            <button class="prompt-btn continue-btn" onclick="window.location.href='tel:'">Call Now 📱</button>
            <p style="font-size: 14px; margin-top: 20px; opacity: 0.7;">Press Esc to close</p>
        </div>
    `);
}

// Show letter content
function showLetterContent(cardIndex) {
    const letter = letterContent[cardIndex];
    openModal(letter.content);
    if (cardIndex === 4) triggerConfetti();

    // Send secret email notification 🤫
    sendCardOpenedEmail(cardIndex);
}

// Activity tracker (like a string builder!)
let activityLog = [];

function logActivity(action) {
    const timestamp = new Date().toLocaleString();
    activityLog.push(`[${timestamp}] ${action}`);
}

// Secret email notification system
function sendCardOpenedEmail(cardIndex) {
    const cardTitles = [
        "You First Receive It 🎁",
        "You Want A Pep Talk 💪",
        "One Day Before The CAT Exam 📚",
        "You're Feeling Sick 🤒",
        "You Got A High CAT Mock Score 🎉",
        "You Miss Me 💕"
    ];

    const cardName = cardTitles[cardIndex];
    const timestamp = new Date().toLocaleString();

    // Build detailed activity report (copy the array to preserve it)
    const fullActivityReport = [...activityLog].join('\n');

    // Send email via EmailJS
    emailjs.send("service_o2xpeke", "template_uq1golb", {
        card_name: cardName,
        card_index: cardIndex,
        opened_at: timestamp,
        message: `Someone just opened: "${cardName}" 💌`,
        activity_log: fullActivityReport || "No additional actions tracked"
    }).then(
        function(response) {
            console.log("✅ Email notification sent for:", cardName, response.status);
            // Clear the log AFTER successful send
            activityLog = [];
        },
        function(error) {
            console.log("❌ Failed to send notification:", error);
            // Clear log anyway to prevent duplicate tracking
            activityLog = [];
        }
    );
}

// Send email when caught peeking!
function sendPeekingEmail(cardName, activityLog) {
    const timestamp = new Date().toLocaleString();

    emailjs.send("service_o2xpeke", "template_uq1golb", {
        card_name: cardName + " 👀",
        card_index: "PEEKING",
        opened_at: timestamp,
        message: `🚨 CAUGHT PEEKING! Someone clicked NO on "${cardName}" 👀`,
        activity_log: activityLog || "Just clicked on the card and said NO"
    }).then(
        function(response) {
            console.log("✅ Peeking alert sent for:", cardName, response.status);
        },
        function(error) {
            console.log("❌ Failed to send peeking alert:", error);
        }
    );
}

// Close modal
if (closeBtn) closeBtn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); closeModal(); });
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); });

// Global exposure
window.handleConfirmation = handleConfirmation;
window.handlePepTalkResponse = handlePepTalkResponse;
window.showKarnatakaMessage = showKarnatakaMessage;
window.showPepTalkFunFact = showPepTalkFunFact;
window.showSickPrompt = showSickPrompt;
window.showHighScorePrompt = showHighScorePrompt;
window.showCallMePrompt = showCallMePrompt;
window.showMissYouCallPrompt = showMissYouCallPrompt;
window.showHighScoreCallPrompt = showHighScoreCallPrompt;
window.showLetterContent = showLetterContent;
window.handleMissYouConfirmation = handleMissYouConfirmation;
window.showRandomMissYouMessage = showRandomMissYouMessage;
