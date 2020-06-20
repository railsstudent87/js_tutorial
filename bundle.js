(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let Phrase = require("railsstudent87-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome.`);
}
},{"railsstudent87-palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

// Reverses a string.
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds `blank` to all strings.
String.prototype.blank = function() {
  return !!this.match(/\s+/gm);
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  
  this.processor = function(string) {
    return string.toLowerCase();
  }
  
  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.letters());
  }
  
  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
  
  this.louder = function louder() {
    return this.content.toUpperCase()
  }
  
  this.letters = function letters() {
    // return Array.from(this.content).filter(ch => ch.match(/[a-z]/i)).join("");
    return (this.content.match(/[a-z]/gi) || []).join("");
  }
  
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
  
  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
},{}]},{},[1]);
