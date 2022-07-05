import {db} from '../firebase-config';

import { collection, getDocs } from 'firebase/firestore';

const blogCollectionRef = collection(db, "blog")

class BlogDataService{
    getBlogs = () => {
        return getDocs(blogCollectionRef)
    }
}

export default new BlogDataService();