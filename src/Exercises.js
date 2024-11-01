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

  countSpecificCharacter(word) {
    return word.match(/[=_]/gi).length;
  }

  capitalizeAndLowerCase(word) {
    let newWord = "";

    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        newWord += word[i].toLowerCase();
      } else {
        newWord += word[i].toUpperCase();
      }
    }
    return newWord;
  }

  vowelsToNumbers(word) {
    const vowelToNumberMap = {
      a: "1",
      e: "2",
      i: "3",
      o: "4",
      u: "5",
      A: "1",
      E: "2",
      I: "3",
      O: "4",
      U: "5",
    };

    return word
      .split("")
      .map((char) => {return vowelToNumberMap[char] || char})
      .join("");
  }

  returnInitials(name) {
    return name
      .split(" ")
      .map((initial) => initial.charAt(0).toUpperCase())
      .join(" ");
  }

  isAnagram(word1, word2) {
    const cleanWord1 = this.cleanUpWord(word1);
    const cleanWord2 = this.cleanUpWord(word2);

    if (cleanWord1.length !== cleanWord2.length) {
      return false;
    }

    const sortedWord1 = this.sortWords(cleanWord1);
    const sortedWord2 = this.sortWords(cleanWord2);

    return sortedWord1 === sortedWord2;
  }

  sortWords(cleanWord) {
    return cleanWord.split("").sort().join("");
  }

  cleanUpWord(word) {
    return word.replace(/[^a-z0-9]/gi, "").toLowerCase();
  }

  titleCaseSentence(sentence) {
    return sentence
      .split(" ")
      .map((word) => this.capitalizeFirstLetter(word))
      .join(" ");
  }

  removeDuplicates(word) {
    const result = [];
    const seen = new Set();

    for (const char of word) {
      if (!seen.has(char)) {
        seen.add(char);
        result.push(char);
      }
    }

    return result.join("");
  }

  findLongestWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";

    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }

    return longestWord;
  }

  countWords(sentence) {
    const words = sentence.trim().split(/\s+/);
    return words.length > 0 && words[0] !== "" ? words.length : 0;
  }

  removeNonAlphabetic(word) {
    return word.replace(/[^a-zA-Z]/g, "");
  }

  camelToSnake(word) {
    return word.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
  }

  findUniqueCharacters(word) {
    const uniqueChars = new Set(word);

    return Array.from(uniqueChars).join("");
  }

  containsSubstring(str, substring) {
    return str.includes(substring);
  }

  replaceAll(originalString, searchSubstring, newSubstring) {
    const regex = new RegExp(searchSubstring, "g");

    return originalString.replace(regex, newSubstring);
  }

  repeatString(str, times) {
    if (times < 0) {
      throw new RangeError("Number of repetitions must be non-negative");
    }
    return str.repeat(times);
  }

  convertEveryOtherToUppercase(letter) {
    return letter
      .split("")
      .map((char, index) => {
        return index % 2 === 1 ? char.toUpperCase() : char.toLowerCase();
      })
      .join("");
  }

  hideCreditCardNumber(cardNumber) {
    const cardStr = String(cardNumber);

    if (cardStr.length < 4) {
      throw new Error("Credit card number must be at least 4 digits.");
    }

    const hiddenPart = "*".repeat(cardStr.length - 4);

    const visiblePart = cardStr.slice(-4);

    return hiddenPart + visiblePart;
  }

  isAlphabetic(word) {
    const regex = /^[A-Za-z]+$/;
    return regex.test(word);
  }
}
