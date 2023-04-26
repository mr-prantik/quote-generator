const quotes = [  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function setQuote() {
  const quote = getRandomQuote();
  document.getElementById("text").textContent = quote.text;
  document.getElementById("author").textContent = quote.author;
}

document.getElementById("new-quote").addEventListener("click", setQuote);

setQuote(); 
