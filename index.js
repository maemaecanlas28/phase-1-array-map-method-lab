const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map() => {
//   return tutorials
// }

function titleCased () {
  return tutorials.map(function (question) {
    const wordArray = question.split(" ");
    const allCaps = wordArray.map(capitalized);
    const sentence = allCaps.join(" ");
    return sentence;
  })
}

function capitalized (word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}