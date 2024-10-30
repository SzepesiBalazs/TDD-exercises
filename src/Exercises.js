export default class Exercises {
  capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  reverseString(word) {
    return word.split("").reverse().join("");
  }

  isPalindrome(anyWord) {
    return this.reverseString(anyWord) === anyWord;
  }

  countVowels(randomWord) {
    return randomWord.match(/[aeiouű]/gi)?.length ?? 0;
  }

  removeWhiteSpace(anotherRandomWord) {
    return anotherRandomWord.replaceAll(" ", "");
  }
}
