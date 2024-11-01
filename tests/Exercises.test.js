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
});
