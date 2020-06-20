let Phrase = require("railsstudent87-palindrome");

function palindromeTester(event) {
  event.preventDefault(); //Since our “server” is just a static web page, we can’t handle such a submission, so we need to prevent this default behavior. event is a special object that JavaScript provides for just this sort of case
  // let string = prompt("Please enter a string for palindrome testing:");
  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");
  
  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome!`;
  }
}

// document.addEventListener("DOMContentLoaded", function() {
//   let button = document.querySelector("#palindromeTester");
  
//   button.addEventListener("click", function() {
//     palindromeTester();
//   });
//   // button.addEventListener("click", palindromeTester); would work but we’ve used an anonymous function 
//   //                                                     instead to emphasize the general case where there 
//   //                                                     might be more than one line.
// })

document.addEventListener("DOMContentLoaded", function() {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
})