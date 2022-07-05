import {db} from '../firebase-config';

import { collection, getDocs } from 'firebase/firestore';

const aboutCollectionRef = collection(db, "home")

class AboutDataService{
    getData = () => {
        return getDocs(aboutCollectionRef)
    }
}

export default new AboutDataService();