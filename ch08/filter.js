"use strict"

const cards = []
for(let suit of ['H', 'C', 'D', 'S'])
  for(let value=1; value<=13; value++)
    cards.push({suit, value})

// cards with value 2
console.log(cards.filter(c => c.value === 2))

// all diamonds
console.log(cards.filter(c => c.suit === 'D'))

// face cards
console.log(cards.filter(c => c.value > 10))

// all face cards that are hearts
console.log(cards.filter(c => c.value > 10 && c.suit === 'H'))

function cardToString(c) {
  const suits = { 'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660' };
  const values = { 1: 'A', 11: 'J', 12: 'Q', 13: 'K' };
  // constructing values each time we call cardToString is not very
  // efficient; a better solution is a reader's exercise
  for(let i=2; i<=10; i++) values[i] = i;
  return values[c.value] + suits[c.suit];
}

// all cards with value 2
console.log(cards.filter(c => c.value === 2).map(cardToString))

// all face cards that are hearts
console.log(cards.filter(c => c.value > 10 && c.suit === 'H').map(cardToString))



