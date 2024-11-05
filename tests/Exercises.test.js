import Exercises from "../src/Exercises";

describe("Exercises", () => {
  test("Capitalize the first letter of a word", () => {
    const exercises = new Exercises();

    const result = exercises.capitalizeFirstLetter("words");

    expect(result).toBe("Words");
  });

  test("Reverse a given string", () => {
    const exercises = new Exercises();

    const result = exercises.reverseString("words");

    expect(result).toBe("sdrow");
  });

  test("should return true for a palindrome word", () => {
    const exercises = new Exercises();

    const result = exercises.isPalindrome("madam");

    expect(result).toBe(true);
  });

  test("should return false for a non-palindrome word", () => {
    const exercises = new Exercises();

    const result = exercises.isPalindrome("adam");

    expect(result).toBe(false);
  });

  test("should return 2 for word madam", () => {
    const exercises = new Exercises();

    const result = exercises.countVowels("madam");

    expect(result).toBe(2);
  });

  test("should return 0 if there is no vowel in a word", () => {
    const exercises = new Exercises();

    const result = exercises.countVowels("kklkkjkjk");

    expect(result).toBe(0);
  });

  test("should return 1 if there is a character ű in a word", () => {
    const exercises = new Exercises();

    const result = exercises.countVowels("űr");

    expect(result).toBe(1);
  });

  test("should remove one whitespace from a word", () => {
    const exercises = new Exercises();

    const result = exercises.removeWhiteSpace("w ord");

    expect(result).toBe("word");
  });

  test("should remove all whitespaces from a word with commas", () => {
    const exercises = new Exercises();

    const result = exercises.removeWhiteSpace("w ,ord ");

    expect(result).toBe("w,ord");
  });

  test("should remove multiple character long whitespaces from a word", () => {
    const exercises = new Exercises();

    const result = exercises.removeWhiteSpace("w   ord ");

    expect(result).toBe("word");
  });

  test("should count number of specific characters", () => {
    const exercises = new Exercises();

    const result = exercises.countSpecificCharacter("word=_");

    expect(result).toBe(2);
  });

  test("alternate between capitalizing and lowercasing each letter", () => {
    const exercises = new Exercises();

    const result = exercises.capitalizeAndLowerCase("KoRd");

    expect(result).toBe("kOrD");
  });

  test("should change vowels to numbers", () => {
    const exercises = new Exercises();

    const result = exercises.vowelsToNumbers("aeiou");

    expect(result).toBe("12345");
  });

  test("should return initial of a name", () => {
    const exercises = new Exercises();

    const result = exercises.returnInitials("Szepesi Balazs");

    expect(result).toBe("S B");
  });

  test("should check if word is an anagram", () => {
    const exercises = new Exercises();

    const result = exercises.isAnagram("Bake", "Beak");

    expect(result).toBe(true);
  });

  test("should title case a sentence", () => {
    const exercises = new Exercises();

    const result = exercises.titleCaseSentence("coding is not easy");

    expect(result).toBe("Coding Is Not Easy");
  });

  test("should delete every duplicate word", () => {
    const exercises = new Exercises();

    const result = exercises.removeDuplicates("aabbccdd");

    expect(result).toBe("abcd");
  });

  test("should delete every duplicate word", () => {
    const exercises = new Exercises();

    const result = exercises.findLongestWord("Coding is still hard");

    expect(result).toBe("Coding");
  });

  test("should count words in a sentence", () => {
    const exercises = new Exercises();

    const result = exercises.countWords(
      "Real Madrid is the best team in the world"
    );

    expect(result).toBe(9);
  });

  test("should remove all non-alphabetic characters from a word", () => {
    const exercises = new Exercises();

    const result = exercises.removeNonAlphabetic("word 123__");

    expect(result).toBe("word");
  });

  test("should convert camelcase to snakecase", () => {
    const exercises = new Exercises();

    const result = exercises.camelToSnake("codingIsFun");

    expect(result).toBe("coding_is_fun");
  });

  test("should find all unique characters", () => {
    const exercises = new Exercises();

    const result = exercises.findUniqueCharacters("javascript is fun");

    expect(result).toBe("javscript fun");
  });

  test("should check for specific substring", () => {
    const exercises = new Exercises();

    const string = "Real Madrid";
    const substring = "Madrid";
    const result = exercises.containsSubstring(string, substring);

    expect(result).toBe(true);
  });

  test("should replace all occourrences of a substring", () => {
    const exercises = new Exercises();

    const result = exercises.replaceAll(
      "Title author Title year",
      "Title",
      "Book"
    );

    expect(result).toBe("Book author Book year");
  });

  test("should repeat a string for a specified number of times", () => {
    const exercises = new Exercises();

    const result = exercises.repeatString("word", 4);

    expect(result).toBe("wordwordwordword");
  });

  test("should convert every other letter to uppercase", () => {
    const exercises = new Exercises();

    const result = exercises.convertEveryOtherToUppercase("javascript");

    expect(result).toBe("jAvAsCrIpT");
  });

  test("should hide all but the last four characters", () => {
    const exercises = new Exercises();

    const cardNumber = "123456789123456789";
    const result = exercises.hideCreditCardNumber(cardNumber);

    expect(result).toBe("**************6789");
    expect(result.length).toBe(cardNumber.length);
  });

  test("should check if only contains alphabetic characters", () => {
    const exercises = new Exercises();

    const result = exercises.isAlphabetic("word");

    expect(result).toBe(true);
  });

  test("should be false if it has other than alphabetic characters", () => {
    const exercises = new Exercises();

    const result = exercises.isAlphabetic("word123");

    expect(result).toBe(false);
  });

  test("should sort words alphabeticaly", () => {
    const exercises = new Exercises();

    const result = exercises.sortWordAlphabeticaly("cba");

    expect(result).toBe("abc");
  });

  test("should check if number is even", () => {
    const exercises = new Exercises();

    const result = exercises.isEvenOrOdd(2);

    expect(result).toBe("Even");
  });

  test("should check if number is odd", () => {
    const exercises = new Exercises();

    const result = exercises.isEvenOrOdd(1);

    expect(result).toBe("Odd");
  });

  test("should calculate the sum of numbers in an array", () => {
    const exercises = new Exercises();
    const numbers = [1, 2, 3];
    const result = exercises.sumArray(numbers);

    expect(result).toBe(6);
  });

  test("should find the largest number in an array", () => {
    const exercises = new Exercises();
    const numbers = [1, 2, 3];
    const result = exercises.findLargestNumber(numbers);

    expect(result).toBe(3);
  });

  test("should find the smallest number in an array", () => {
    const exercises = new Exercises();
    const numbers = [1, 2, 3];
    const result = exercises.findSmallestNumber(numbers);

    expect(result).toBe(1);
  });

  test("should remove all duplicate numbers from values", () => {
    const exercises = new Exercises();
    const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
    const result = exercises.removeDuplicateValues(numbers);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("should find common elemnents in two arrays", () => {
    const exercises = new Exercises();
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8];
    const result = exercises.findCommonElements(array1, array2);

    expect(result).toEqual([4, 5]);
  });

  test("should find intersect in two arrays", () => {
    const exercises = new Exercises();
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8];
    const result = exercises.arrayIntersect(array1, array2);

    expect(result).toEqual([4, 5]);
  });

  test("should return true if array is sorted", () => {
    const exercises = new Exercises();

    const result = exercises.isArraySorted([1, 2, 3, 4]);

    expect(result).toBe(true);
  });

  test("should return false if array is not sorted", () => {
    const exercises = new Exercises();

    const result = exercises.isArraySorted([1, 3, 2, 4]);

    expect(result).toBe(false);
  });

  test("should calculate the average of the array", () => {
    const exercises = new Exercises();

    const result = exercises.calculateAverage([1, 2, 3, 4, 5]);

    expect(result).toBe(3);
  });

  test("should count occurrences in array", () => {
    const exercises = new Exercises();

    const numbers = [1, 2, 3, 1, 1];
    const result = exercises.countOccurrences(numbers, 1);

    expect(result).toBe(3);
  });

  test("should find index of the element", () => {
    const exercises = new Exercises();

    const numbers = [1, 2, 3, 4, 5];
    const result = exercises.findIndex(numbers, 3);

    expect(result).toBe(2);
  });

  test("should remove falsy values from array", () => {
    const exercises = new Exercises();

    const arrayWithFalsyValues = [false, 1, null, 2, undefined];
    const result = exercises.removeFalsyValues(arrayWithFalsyValues);

    expect(result).toEqual([1, 2]);
  });

  test("should filter even numbers in array", () => {
    const exercises = new Exercises();

    const numbers = [1, 2, 3, 4, 5, 6];
    const result = exercises.getEvenNumbers(numbers);

    expect(result).toEqual([2, 4, 6]);
  });

  test("should reverse elements of array", () => {
    const exercises = new Exercises();

    const numbers = [1, 2, 3, 4, 5, 6];
    const result = exercises.reverseArray(numbers);

    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
  });

  test("should count the positive numbers only in an array", () => {
    const exercises = new Exercises();

    const numbers = [1, 2, 3, 4, 5, 6, -1, -2];
    const result = exercises.countPositiveNumbers(numbers);

    expect(result).toBe(6);
  });

  test("should find the max product of two numbers", () => {
    const exercises = new Exercises();

    const numbers = [1, 2, 5, 10];
    const result = exercises.maxProduct(numbers);

    expect(result).toBe(50);
  });

  test("should find specific element in array", () => {
    const exercises = new Exercises();

    const numbers = [1, 2, 3, 4, 5];
    const result = exercises.containsElement(numbers, 3);

    expect(result).toBe(true);
  });

  test("should find the missing number for the sequence", () => {
    const exercises = new Exercises();

    const numbers = [1, 2, 4, 5];
    const result = exercises.findMissingNumber(numbers);

    expect(result).toBe(3);
  });

  test("should return the square of each number in array", () => {
    const exercises = new Exercises();

    const numbers = [1, 2, 3];
    const result = exercises.squareNumbers(numbers);

    expect(result).toEqual([1, 4, 9]);
  });

  test("should return the factorial of a number", () => {
    const exercises = new Exercises();

    const result = exercises.factorial(5);

    expect(result).toBe(120);
  });

  test("should return an array to a string", () => {
    const exercises = new Exercises();

    const strings = ["word", "newWord"];
    const result = exercises.arrayToString(strings);

    expect(result).toBe("word, newWord");
  });

  test("should return an array of divisible numbers from an array", () => {
    const exercises = new Exercises();

    const originalArray = [1, 2, 4, 6, 8];
    const divisor = 2;
    const result = exercises.getDivisibleNumbers(originalArray, divisor);

    expect(result).toEqual([2, 4, 6, 8]);
  });

  test("should generate even numbers until it reaches the 10 limit", () => {
    const exercises = new Exercises();

    const limit = 10;
    const result = exercises.generateEvenNumbers(limit);

    expect(result).toEqual([2, 4, 6, 8, 10]);
  });

  test("should return true if all numbers are positive in an array", () => {
    const exercises = new Exercises();

    const numbers = [1,2,3,4,5]
    const result = exercises.areAllPositive(numbers);

    expect(result).toBe(true);
  });

  test("should return false if not all numbers are positive in an array", () => {
    const exercises = new Exercises();

    const numbers = [-1,1,2,3,4,5]
    const result = exercises.areAllPositive(numbers);

    expect(result).toBe(false);
  });

  test("should find the first unique element in an array", () => {
    const exercises = new Exercises();

    const numbers = [1,1,2,3,3,4,4,5,5]
    const result = exercises.findFirstUnique(numbers);

    expect(result).toBe(2);
  });
});
