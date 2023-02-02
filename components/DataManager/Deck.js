class Deck {
  constructor(cards){
    this.cards = cards;
    this.curIndex = -1;
  }
  nextCard() {
    this.curIndex++;
    if(this.curIndex >= this.cards.length)
    {
      // ok we reached the end.
      return null;
    }
    return this.cards[this.curIndex];

  }
}