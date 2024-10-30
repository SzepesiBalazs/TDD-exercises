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

  countSpecificCharacter(word){
    return word.match(/[=_]/gi).length
  }

  capitalizeAndLowerCase(word){    
    let newWord =''
    
     for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        newWord += word[i].toLowerCase();
      } else {
        newWord += word[i].toUpperCase();
      }
    }
    return newWord
  }
}