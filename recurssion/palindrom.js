//weather a number is palindrom or not

function isPalindromen(number) {
    // Convert the number to a string
    const numStr = number.toString();
  
    // Base case: if the length of the string is 0 or 1, it's a palindrome
    if (numStr.length <= 1) {
      return true;
    }
  
    // Compare the first and last characters
    if (numStr[0] !== numStr[numStr.length - 1]) {
      return false;
    }
  
    // Recursive case: call the function with the substring excluding the first and last characters
    return isPalindromen(numStr.slice(1, numStr.length - 1));
  }
  
  // Test cases
  console.log(isPalindromen(12321));  // Output: true
  console.log(isPalindromen(12345));  // Output: false


  //In case of string
  function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Base case: if the length of the cleaned string is 0 or 1, it's a palindrome
    if (cleanedStr.length <= 1) {
      return true;
    }
  
    // Compare the first and last characters
    if (cleanedStr[0] !== cleanedStr[cleanedStr.length - 1]) {
      return false;
    }
  
    // Recursive case: call the function with the substring excluding the first and last characters
    return isPalindrome(cleanedStr.slice(1, cleanedStr.length - 1));
  }
  
  // Test cases
  console.log(isPalindrome("racecar"));        // Output: true
  console.log(isPalindrome("hello"));          // Output: false
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
  