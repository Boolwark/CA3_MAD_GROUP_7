export default class QNA {
  // let questions be a list of strings, and answer be a character.
  constructor(questions,answer) {
    this.options = {};
    this.options['A'] = questions[0]
    this.options['B'] = questions[1]
    this.options['C'] = questions[2]
    this.options['D'] = questions[3]
    this.answer = answer
  }
}