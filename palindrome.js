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
    return this.processor(this.content);
  }
  
  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.processedContent()) {
      return this.processedContent() === this.processedContent().reverse();
    } else {
      return false;
    }
  }
  
  this.louder = function louder() {
    return this.content.toUpperCase()
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