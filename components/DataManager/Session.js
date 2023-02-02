export default class Session {
  
  constructor(cards) {
    console.log("creating session")
    this.curIndex = -1;
    this.cards = cards;
    console.log(this.cards)
    this.isComplete = false;
    }
  nextCard() {
    
    this.curIndex++;

    if(this.cards == null||this.curIndex >= this.cards.length){
      this.isComplete = true;
      return null; 
    }
    return this.cards[this.curIndex];

  }
}