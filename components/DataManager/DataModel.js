import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = '@FLASHCARDS';
const USER_KEY = '@USER';
const REMINDERS_KEY = '@REMINDERS';
const PROFILE_IMAGE_KEY = "@PROFILE_IMAGE_URI"
const IMAGES_URI_KEY = "@IMAGES"
class DataManager {

   async setProfileImageURI(uri) {
    try {
      await AsyncStorage.setItem(PROFILE_IMAGE_KEY,uri)
    }
    catch(error) {

      console.error(error);
    }

  }
  async getProfileImageURI() {
    try {
      const uri = await AsyncStorage.getItem(PROFILE_IMAGE_KEY);
      if(uri) return uri;
      return this.setProfileImageURI("");
    }
    catch(err) {
       console.error(error);
    }
  }
  async addCard(card, deckTitle) {
    const decks = await this.getDecks();
    const possibleDecks = decks.filter((deck) => deck.title === deckTitle);
    if (possibleDecks.length === 0) {
      console.error('Error, no deck with deck title' + deckTitle + 'found');
      return;
    }
    console.log('adding new card to d eck:');
    possibleDecks[0].cards.push(card);
    await this.saveDecks(decks);
  }

  async deleteFlashCard(toDelete) {
    const decks = await this.getDecks();
    for (let i = 0; i < decks.length; i++) {
      decks[i].cards = decks[i].cards.filter(
        (card) =>
          card.answer !== toDelete.answer || card.question !== toDelete.question
      );
    }
    await this.saveDecks(decks);
  }
  async getDecks() {
    try {
      const decks = await AsyncStorage.getItem(KEY);
      if (decks) {
        return JSON.parse(decks);
      } else {
        await this.saveDecks([]);
        return await this.getDecks();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async saveDecks(decks) {
    try {
      const jsonValue = JSON.stringify(decks);
      await AsyncStorage.setItem(KEY, jsonValue);
    } catch (err) {
      console.error(err);
    }
  }
  async getUser() {
    try {
      const user = await AsyncStorage.getItem(USER_KEY);
      if (user != null) {
        return JSON.parse(user);
      }
      else {
        await this.saveUser({ "numSessions":0, "numFlashcards":0, "totalHours":0})
      }
    } catch (err) {
      console.error(err);
    }
  }
  async saveUser(user) {
    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem(USER_KEY, jsonValue);
    } catch (err) {
      console.error(err);
    }
  }
  async getDeck(title) {
    const decks = await this.getDecks();
    return decks.filter((deck) => deck.title === title)[0];
  }
  async addDeck(deckTitle) {
    const decks = await this.getDecks();
    decks.push({ title: deckTitle, cards: [] });
    await this.saveDecks(decks);
    console.log(deckTitle + ' deck is added');
  }
  async clearReminders() {
    try {
      await AsyncStorage.setItem(REMINDERS_KEY, JSON.stringify([]));
    } catch (error) {
      console.error(error);
    }
  }
  async getReminders() {
    try {
      let reminders = await AsyncStorage.getItem(REMINDERS_KEY);
      if (reminders) {
        return JSON.parse(reminders);
      } else {
        await this.setReminders([]);
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async deleteReminder(toDelete) {
    let reminders = await this.getReminders();
    console.log('loaded reminders!');
    let newReminders = reminders.filter((reminder) => {
      return (
        reminder.title !== toDelete.title ||
        reminder.desc !== toDelete.desc ||
        reminder.date !== toDelete.date
      );
    });
    await this.setReminders(newReminders);
  }
  async setReminders(reminders) {
    try {
      await AsyncStorage.setItem(REMINDERS_KEY, JSON.stringify(reminders));
    } catch (error) {
      console.error(error);
    }
  }
  async addReminder(reminder) {
    const reminders = await this.getReminders();
    reminders.push(reminder);
    return await this.setReminders(reminders);
  }
  async getRandomCards(perc) {
    function combineAllCards(decks) {
      let allCards = [];
      for (let i = 0; i < decks.length; i++) {
        allCards = allCards.concat(decks[i].cards);
      }
      return allCards;
    }
    const decks = await this.getDecks();
    console.log('loaded my decks ' + JSON.stringify(decks));
    let allCards = combineAllCards(decks);

    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    }
    allCards = shuffle(allCards);
    return { title: 'mix', 
    cards: allCards.slice(0, Math.floor(perc * allCards.length)) };


    
  }
  async addImageURI(uri) {
    const URIs = await this.getImageURIs();
    URIs.push(uri);
    console.log(URIs);
    await this.setImageURIs(URIs);
  }
  async getImageURIs() {
  try {
      
      const URIs = await AsyncStorage.getItem(IMAGES_URI_KEY);
      if(!URIs) {
        await this.saveImageURIs([]);
         return await this.getImageURIs()
      }
      else {
        return JSON.parse(URIs);
      }
     
    } catch (err) {
      console.error(err);
    }
  }
  async setImageURIs(URIs) {
try {
      const jsonValue = JSON.stringify(URIs);
      await AsyncStorage.setItem(IMAGES_URI_KEY, jsonValue);
    } catch (err) {
      console.error(err);
    }
  }
}

export default new DataManager();
