export const months = [
  'Janúar',
  'Febrúar',
  'Mars',
  'Apríl',
  'Maí',
  'Júní',
  'Júlí',
  'Ágúst',
  'September',
  'Október',
  'Nóvember',
  'Desember',
];

/* Notað til að bæta kommu milli leikstjóra ef þeir eru
     fleiri en einn, 'og' síðan sett fyrir seinasta leikstjóran */
export function listDirectors(result) {
  let directors = `Leikstjóri: ${result[0].name}`;
  if (result.length > 1) {
    directors = 'Leikstjórar: ' + result[0].name;
    for (let i = 1; i < result.length; i++) {
      if (i === result.length-1) {
        directors += ` og ${result[i].name}`;
      } else {
        directors += `, ${result[i].name}`;
      }
    }
  }
  return directors;
}