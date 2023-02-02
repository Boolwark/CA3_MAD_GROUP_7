import FlashCards from "./FlashCards"
import Session from "./DataManager/Session"
import CardData from "./DataManager/CardData"
import QNA from "./DataManager/QNA"
import * as React from "react"
export default function(props) {
  const session = new Session([new CardData('What is 1+1?(from session)', 'math', new QNA(['1', '2', '3', '4'],'A'), ['A'])])
  console.log(session.cards.length)
  const [curCard,setCurCard] = React.useState(session.nextCard);
  function nextCard() {
    const next = session.nextCard()
    console.log("next is "+next);
    setCurCard(next)
  }
  return (<>
    <FlashCards onPressContinue={nextCard}/>
  </>)
}