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
  "“Code is poetry.” – Automattic",
  "“A good programmer is someone who always looks both ways before crossing a one-way street.” – Doug Linder",
  "“Optimism is an occupational hazard of programming: feedback is the treatment.” – Kent Beck",
  "“Make it work, make it right, make it fast.” – Kent Beck",
  "“Programming isn’t hard. It’s just getting your mind to think in a way computers do.” – Unknown",
  "“The best error message is the one that never shows up.” – Thomas Fuchs",
  "“The best performance improvement is the transition from the nonworking state to the working state.” – John Ousterhout",
  "“Software is a great combination of artistry and engineering.” – Bill Gates",
  "“The only thing worse than a problem that you can’t debug is one that you can’t reproduce.” – Unknown",
  "“Java is to JavaScript what car is to carpet.” – Chris Heilmann",
  "“Simple things should be simple, complex things should be possible.” – Alan Kay",
  "“Deleted code is debugged code.” – Jeff Sickel",
  "“A user interface is like a joke. If you have to explain it, it’s not that good.” – Martin LeBlanc",
  "“Code never lies, comments sometimes do.” – Ron Jeffries",
  "“Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.” – Norman Augustine",
  "“If you automate a mess, you get an automated mess.” – Rod Michael",
  "“Programs are meant to be read by humans and only incidentally for computers to execute.” – Donald Knuth",
  "“When debugging, novices insert corrective code; experts remove defective code.” – Richard Pattis",
  "“Simplicity carried to an extreme becomes elegance.” – Jon Franklin",
  "“Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning.” – Rick Cook",
  "“Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.” – John Woods",
  "“There are only two hard things in Computer Science: cache invalidation and naming things.” – Phil Karlton",
  "“Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.” – Patrick McKenzie",
  "“Good specifications will always improve programmer productivity far better than any programming tool or technique.” – Milt Bryce",
  "“The best programs are written so that computing machines can perform them quickly and so that human beings can understand them clearly.” – Donald Knuth",
  "“The most damaging phrase in the language is: ‘We’ve always done it this way.’” – Grace Hopper",
  "“Measuring programming progress by lines of code is like measuring aircraft building progress by weight.” – Bill Gates",
  "“Talk is cheap. Let’s do it.” – Linus Torvalds",
  "“Debugging time increases as a square of the program’s size.” – Chris Wenham",
  "“A language that doesn’t affect the way you think about programming is not worth knowing.” – Alan Perlis",
  "“If you think your users are idiots, only idiots will use it.” – Linus Torvalds",
  "“Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.” – Eagleson’s Law",
  "“Premature optimization is the root of all evil.” – Donald Knuth",
  "“Any sufficiently advanced bug is indistinguishable from a feature.” – Rich Kulawiec",
  "“Programs must be written for people to read, and only incidentally for machines to execute.” – Harold Abelson",
  "“The more code you write, the more places bugs can hide.” – Unknown",
  "“Programming is breaking one big impossible task into several small impossible tasks.” – Unknown",
  "“The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time.” – Tom Cargill",
  "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
  "“The best way to learn to code is to code.” – Anonymous",
  "“Testing is the process of comparing the invisible to the ambiguous to avoid the unthinkable happening to the anonymous.” – James Bach",
  "“Iteration without direction leads to chaos.” – Unknown",
  "“Sometimes the elegant implementation is just a function. Not a method. Not a class. Not a framework. Just a function.” – John Carmack",
  "“The sooner you start to code, the longer the program will take.” – Roy Carlson",
  "“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler",
  "“Computers are fast; programmers keep it slow.” – Anonymous",
  "“A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.” – Niklaus Wirth",
  "“You can’t have great software without a great team.” – Unknown",
  "“Programming is thinking, not typing.” – Casey Patton",
  "“Sometimes it’s better to leave something alone, to pause, and that’s very true of programming.” – Joyce Wheeler",
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
