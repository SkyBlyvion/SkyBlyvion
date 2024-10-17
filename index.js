const fs = require('fs').promises;
const path = require('path');

const readmeTemplate = require('./readme');

const msInOneDay = 1000 * 60 * 60 * 24;
const today = new Date();

async function updateReadme() {
  let updatedContent = readmeTemplate;

  // Remplacer les placeholders
  updatedContent = updatedContent.replace('<#today_date>', getTodayDate());
  updatedContent = updatedContent.replace('<#fun_time>', getFunTime());
  updatedContent = updatedContent.replace('<#day_before_new_years>', getDBNWSentence());

 

  // Écrire le contenu mis à jour dans README.md
  await fs.writeFile('README.md', updatedContent);
  console.log('README.md updated successfully!');
}

function getTodayDate() {
  return today.toDateString();
}

function getFunTime() {
  const unixTimestamp = Math.floor(today.getTime() / 1000);
  const secondsSinceMidnight = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
  return `Current time: Unix timestamp: ${unixTimestamp} | Seconds since midnight: ${secondsSinceMidnight}`;
}

function getDBNWSentence() {
  const nextYear = today.getFullYear() + 1;
  const nextYearDate = new Date(nextYear, 0, 1);
  const timeUntilNewYear = nextYearDate.getTime() - today.getTime();
  const dayUntilNewYear = Math.ceil(timeUntilNewYear / msInOneDay);
  return `${dayUntilNewYear}`;
}




updateReadme().catch(console.error);
