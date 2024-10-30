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
});
