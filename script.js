
'use strict';


document.body.style.margin = "0";
document.body.style.minHeight = "100vh";
document.body.style.padding = "28px 16px";
document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
document.body.style.color = "#fff8ff";
document.body.style.background = "linear-gradient(135deg, #180d2bf0, #491c5be0), url('https://oss.aiyuzhou8.com/2024/07/20240722015556805.webp') center / cover fixed";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";


const app = document.createElement("div");
app.style.width = "min(540px, 100%)";
app.style.margin = "0 auto";
app.style.padding = "36px 28px";
app.style.textAlign = "center";
app.style.background = "linear-gradient(145deg, #2d2049ed, #1c142ff0)";
app.style.border = "1px solid #e6c8ff40";
app.style.borderRadius = "26px";
app.style.boxShadow = "0 18px 45px #08031155";
app.style.backdropFilter = "blur(8px)";
app.style.boxSizing = "border-box";


const eyebrow = document.createElement("div");
eyebrow.textContent = "✦ Лабораторна робота № 7 ✦";
eyebrow.style.color = "#ff9acb";
eyebrow.style.textTransform = "uppercase";
eyebrow.style.letterSpacing = ".16em";
eyebrow.style.fontSize = ".78rem";
eyebrow.style.fontWeight = "700";
eyebrow.style.marginBottom = "10px";


const title = document.createElement("h1");
title.textContent = "Магічна куля";
title.style.margin = "9px 0";
title.style.fontFamily = "Georgia, serif";
title.style.fontSize = "clamp(2rem, 5vw, 2.8rem)";
title.style.color = "#fff8ff";


const description = document.createElement("p");
description.textContent = "Задай запитання та отримай відповідь від магічної кулі.";
description.style.color = "#d1bfdc";
description.style.lineHeight = "1.5";
description.style.marginBottom = "22px";
description.style.fontSize = ".95rem";


const input = document.createElement("input");
input.type = "text";
input.placeholder = "Введи своє запитання...";
input.maxLength = 200;
input.setAttribute("aria-label", "Твоє запитання");
input.style.width = "100%";
input.style.padding = "14px 18px";
input.style.margin = "10px 0 16px 0";
input.style.background = "#17112b";
input.style.border = "1px solid #e6c8ff40";
input.style.borderRadius = "14px";
input.style.boxSizing = "border-box";
input.style.fontSize = "1rem";
input.style.color = "#fff8ff";
input.style.outline = "none";
input.style.transition = "border-color .2s";

input.addEventListener("focus", () => {
    input.style.borderColor = "#ff9acb";
});
input.addEventListener("blur", () => {
    input.style.borderColor = "#e6c8ff40";
});


const button = document.createElement("button");
button.textContent = "Запитати";
button.style.width = "100%";
button.style.padding = "14px 20px";
button.style.border = "none";
button.style.borderRadius = "14px";
button.style.background = "linear-gradient(135deg, #ffacd4, #c5aaff)";
button.style.color = "#281333";
button.style.fontSize = "1rem";
button.style.fontWeight = "700";
button.style.cursor = "pointer";
button.style.boxShadow = "0 8px 20px rgba(255, 154, 203, 0.3)";
button.style.transition = "transform .15s, filter .15s";

button.addEventListener("mouseover", () => {
    if (!button.disabled) {
        button.style.transform = "translateY(-2px)";
        button.style.filter = "brightness(1.08)";
    }
});
button.addEventListener("mouseout", () => {
    button.style.transform = "translateY(0)";
    button.style.filter = "brightness(1)";
});


const ball = document.createElement("div");
ball.textContent = "8";
ball.style.width = "180px";
ball.style.height = "180px";
ball.style.margin = "28px auto 20px";
ball.style.borderRadius = "50%";
ball.style.background = "radial-gradient(circle at 35% 30%, #3a2a51, #080311 75%)";
ball.style.border = "3px solid #b9a1ff";
ball.style.boxShadow = "0 10px 30px #080311aa, inset 0 0 20px rgba(185, 161, 255, 0.3)";
ball.style.display = "flex";
ball.style.alignItems = "center";
ball.style.justifyContent = "center";
ball.style.fontSize = "64px";
ball.style.fontWeight = "bold";
ball.style.color = "#ff9acb";
ball.style.transition = "transform 0.3s ease";


const result = document.createElement("p");
result.textContent = "Відповідь з'явиться тут.";
result.style.fontSize = "1rem";
result.style.lineHeight = "1.5";
result.style.minHeight = "45px";
result.style.color = "#d1bfdc";
result.style.padding = "12px";
result.style.background = "#211533e8";
result.style.border = "1px solid #e6c8ff3d";
result.style.borderRadius = "14px";
result.style.margin = "0 0 20px 0";


const backLink = document.createElement("a");
backLink.href = "index.html";
backLink.textContent = "← Повернутися на головний портал";
backLink.style.display = "inline-block";
backLink.style.color = "#d1bfdc";
backLink.style.textDecoration = "none";
backLink.style.fontSize = ".9rem";
backLink.style.transition = "color .2s";

backLink.addEventListener("mouseover", () => {
    backLink.style.color = "#ff9acb";
});
backLink.addEventListener("mouseout", () => {
    backLink.style.color = "#d1bfdc";
});


const answers = [
    "Так, безперечно!",
    "Звичайно!",
    "Можеш бути впевненим.",
    "Зірки кажуть — так.",
    "Ймовірно, так.",
    "Поки що невідомо.",
    "Спробуй запитати пізніше.",
    "Краще не розраховувати на це.",
    "Моя відповідь — ні.",
    "Навряд чи."
];


function askQuestion() {
    const question = input.value.trim();

    if (question.length < 3) {
        result.textContent = "Введи запитання довжиною не менше 3 символів.";
        result.style.color = "#ff9acb";
        input.focus();
    } else {
        const index = Math.floor(Math.random() * answers.length);

        button.disabled = true;
        button.style.opacity = "0.5";
        button.style.cursor = "not-allowed";
        
        ball.textContent = "?";
        ball.style.transform = "scale(1.08) rotate(8deg)";
        result.textContent = "Магічна куля думає...";
        result.style.color = "#d1bfdc";

        setTimeout(function() {
            ball.textContent = "8";
            ball.style.transform = "scale(1) rotate(0deg)";
            result.textContent = answers[index];
            result.style.color = "#fff8ff";
            
            button.disabled = false;
            button.style.opacity = "1";
            button.style.cursor = "pointer";
        }, 700);
    }
}


button.addEventListener("click", askQuestion);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !button.disabled) {
        askQuestion();
    }
});


app.appendChild(eyebrow);
app.appendChild(title);
app.appendChild(description);
app.appendChild(input);
app.appendChild(button);
app.appendChild(ball);
app.appendChild(result);
app.appendChild(backLink);

document.body.appendChild(app);