const fs = require('fs').promises;
const path = require('path');

const readmeTemplate = require('./readme');

const msInOneDay = 1000 * 60 * 60 * 24;
const today = new Date();

async function updateReadme() {
  let updatedContent = readmeTemplate;

  // Remplacer les placeholders
  updatedContent = updatedContent.replace('<#today_date>', getTodayDate());
  updatedContent = updatedContent.replace('<#random_quote>', getRandomQuote());
 
  // Écrire le contenu mis à jour dans README.md
  await fs.writeFile('README.md', updatedContent);
  console.log('README.md updated successfully!');
}

function getTodayDate() {
  return today.toDateString();
}

const quotes = [
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“Before software can be reusable it first has to be usable.” – Ralph Johnson",
  "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
  "“Simplicity is the soul of efficiency.” – Austin Freeman",
  "“One man’s crappy software is another man’s full-time job.” – Jessica Gaston",
  "“Talk is cheap. Show me the code.” – Linus Torvalds",
  "“First, solve the problem. Then, write the code.” – John Johnson",
  "“Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson",
  "“Programming isn’t about what you know; it’s about what you can figure out.” – Chris Pine",
  "“The most disastrous thing that you can ever learn is your first programming language.” – Alan Kay",
  "“The best way to get a project done faster is to start sooner.” – Jim Highsmith",
  "“Good code is its own best documentation.” – Steve McConnell",
  "“The only way to learn a new programming language is by writing programs in it.” – Dennis Ritchie",
  "“Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.” – Brian Kernighan",
  "“Any fool can use a computer. Many do.” – Ted Nelson",
  "“Controlling complexity is the essence of computer programming.” – Brian Kernighan",
  "“Walking on water and developing software from a specification are easy if both are frozen.” – Edward V. Berard",
  "“Testing leads to failure, and failure leads to understanding.” – Burt Rutan",
  "“It’s not a bug – it’s an undocumented feature.” – Anonymous",
  "“If debugging is the process of removing software bugs, then programming must be the process of putting them in.” – Edsger Dijkstra",
  "“Experience is the name everyone gives to their mistakes.” – Oscar Wilde",
  "“Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.” – Antoine de Saint-Exupery",
  "“How you look at it is pretty much how you’ll see it.” – Steve Jobs",
  "“Programming can be fun, so can cryptography; however, they should not be combined.” – Kreitzberg and Shneiderman",
  "“Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.” – Dan Salomon",
  "“In order to understand recursion, one must first understand recursion.” – Anonymous",
  "“The function of good software is to make the complex appear to be simple.” – Grady Booch",
  "“The best thing about a boolean is even if you are wrong, you are only off by a bit.” – Anonymous",
  "“There are only two kinds of languages: the ones people complain about and the ones nobody uses.” – Bjarne Stroustrup",
  "“The trouble with programmers is that you can never tell what a programmer is doing until it’s too late.” – Seymour Cray",
  "“Truth can only be found in one place: the code.” – Robert C. Martin",
  "“You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.” – John Romero",
  "“Programming is the art of algorithm design and the craft of debugging errant code.” – Ellen Ullman",
  "“It’s not that I’m so smart, it’s just that I stay with problems longer.” – Albert Einstein",
  "“The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.” – Stephen Hawking",
  "“Software undergoes beta testing shortly before it’s released. Beta is Latin for 'still doesn’t work.'” – Anonymous",
  "“I don’t care if it works on your machine! We are not shipping your machine!” – Vidiu Platon",
  "“To iterate is human, to recurse divine.” – L. Peter Deutsch",
  "“Simplicity is prerequisite for reliability.” – Edsger Dijkstra",
  "“The most important property of a program is whether it accomplishes the intention of its user.” – C.A.R. Hoare",
  "“Programmer: A machine that turns coffee into code.” – Anonymous"
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

updateReadme().catch(console.error);
