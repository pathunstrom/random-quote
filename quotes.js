var quotes = [
    {
        text: "Stay a while, and listen.",
        speaker: "Deckard Cain",
        game: "Diablo II"
    },
    {
        text: "Wizard is about to die!",
        speaker: "Narrator",
        game: "Gauntlet"
    },
    {
        text: "Elf needs food badly.",
        speaker: "Narrator",
        game: "Gauntlet"
    },
    {
        text: "This is your fault. I'm going to kill you. And all the cake is gone. You don't even care, do you?",
        speaker: "GLaDOS",
        game: "Portal"
    },
    {
        text: "Oh, hi. So, how are you holding up? BECAUSE I'M A POTATO!",
        speaker: "GlaDOS",
        game: "Portal 2"
    },
    {
        text: "Get over here!",
        speaker: "Scorpion",
        game: "Mortal Kombat"
    },
    {
        text: "Would you kindly...",
        speaker: "Atlas",
        game: "BioShock"
    },
    {
        text: "Nuclear launch detected.",
        speaker: "Various",
        game: "Star Craft"
    },
    {
        text: "Wake me when you need me.",
        speaker: "Master Chief",
        game: "Halo"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    updateQuote();
    document.getElementById("get-quote").addEventListener("click", updateQuote);
});

function newQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {
    var quote = newQuote();
    document.getElementById("quote-text").textContent = quote.text;
    document.getElementById("quote-speaker").textContent = quote.speaker;
    document.getElementById("quote-game").textContent = quote.game;
}