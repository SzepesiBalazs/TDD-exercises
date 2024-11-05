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
      .map((char) => {
        return vowelToNumberMap[char] || char;
      })
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

  sortWordAlphabeticaly(word) {
    return this.sortWords(word);
  }

  isEvenOrOdd(number) {
    if (typeof number !== "number") {
      return "Input must be a number";
    }

    return number % 2 === 0 ? "Even" : "Odd";
  }

  sumArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Input must be an array");
    }

    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  findLargestNumber(arr) {
    if (arr.length === 0) {
      return undefined;
    }

    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }

    return largest;
  }

  findSmallestNumber(arr) {
    if (arr.length === 0) {
      return undefined;
    }

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallest) {
        smallest = arr[i];
      }
    }

    return smallest;
  }

  removeDuplicateValues(arr) {
    const uniqueElements = [];

    for (let i = 0; i < arr.length; i++) {
      if (!uniqueElements.includes(arr[i])) {
        uniqueElements.push(arr[i]);
      }
    }
    return uniqueElements;
  }

  findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);

    const commonElements = arr2.filter((element) => set1.has(element));

    return commonElements;
  }

  arrayIntersect(arr1, arr2) {
    const set1 = new Set(arr1);

    return arr2.filter((item) => set1.has(item));
  }

  isArraySorted(arr) {
    for (let index = 0; index < arr.length - 1; index++) {
      if (arr[index] > arr[index + 1]) {
        return false;
      }
    }
    return true;
  }

  calculateAverage(numbers) {
    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((accumulate, num) => accumulate + num, 0);
    return sum / numbers.length;
  }

  countOccurrences(arr, number) {
    return arr.reduce((count, current) => {
      return current === number ? count + 1 : count;
    }, 0);
  }

  findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    return;
  }

  removeFalsyValues(arr) {
    return arr.filter(Boolean);
  }

  getEvenNumbers(arr) {
    return arr.filter((num) => num % 2 === 0);
  }

  reverseArray(arr) {
    return arr.reverse();
  }

  countPositiveNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        count++;
      }
    }
    return count;
  }

  maxProduct(nums) {
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const maxProduct1 = nums[n - 1] * nums[n - 2];
    const maxProduct2 = nums[0] * nums[1];

    return Math.max(maxProduct1, maxProduct2);
  }

  containsElement(arr, element) {
    return arr.includes(element);
  }

  findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = ((arr[0] + arr[arr.length - 1]) * n) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  }

  squareNumbers(arr) {
    return arr.map((num) => num * num);
  }

  factorial(n) {
    if (n < 0 || !Number.isInteger(n)) {
      return "Input must be a non-negative integer.";
    }
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }

  arrayToString(arr) {
    return arr.join(", ");
  }

  getDivisibleNumbers(arr, divisor) {
    return arr.filter((num) => num % divisor === 0);
  }

  generateEvenNumbers(limit) {
    const evenNumbers = [];

    for (let i = 2; i <= limit; i += 2) {
      evenNumbers.push(i);
    }

    return evenNumbers;
  }

  areAllPositive(arr) {
    return arr.every((num) => num > 0);
  }

  findFirstUnique(arr) {
    const frequencyMap = new Map();

    for (const num of arr) {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    for (const num of arr) {
      if (frequencyMap.get(num) === 1) {
        return num;
      }
    }
    return null;
  }
}
