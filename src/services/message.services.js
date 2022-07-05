import {db} from '../firebase-config';

import { collection, addDoc } from 'firebase/firestore';


const messageCollectionRef = collection(db, "messages")

class MessageDataService{
    addMessage = (newMessage) => {
        return addDoc(messageCollectionRef, newMessage)
    }
}

export default new MessageDataService();