const quotes = [
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Do something today that your future self will thank you for.",
        author: "Sean Patrick Flanery"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },
    {
        quote: "Great things never come from comfort zones.",
        author: "Roy T. Bennett"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Your limitation—it's only your imagination.",
        author: "Unknown"
    },
    {
        quote: "Push yourself, because no one else is going to do it for you.",
        author: "Unknown"
    },
    {
        quote: "Every accomplishment starts with the decision to try.",
        author: "John F. Kennedy"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const shareBtn = document.getElementById("shareBtn");

let lastQuoteIndex = -1;

function generateQuote() {

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

    lastQuoteIndex = randomIndex;

    const randomQuote = quotes[randomIndex];

    quoteElement.style.opacity = "0";

    setTimeout(() => {
        quoteElement.textContent = `"${randomQuote.quote}"`;
        authorElement.textContent = `— ${randomQuote.author}`;
        quoteElement.style.opacity = "1";
    }, 200);
}
newQuoteBtn.addEventListener("click", generateQuote);

shareBtn.addEventListener("click", async () => {

    const quoteText = quoteElement.textContent;
    const authorText = authorElement.textContent;

    const textToShare = `${quoteText} ${authorText}`;

    if (navigator.share) {
        try {
            await navigator.share({
                title: "Inspirational Quote",
                text: textToShare
            });
        } catch (error) {
            console.log("Sharing cancelled.");
        }
    } else {
        await navigator.clipboard.writeText(textToShare);
        alert("Quote copied to clipboard!");
    }
});