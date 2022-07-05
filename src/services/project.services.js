import {db} from '../firebase-config';

import { collection, getDocs } from 'firebase/firestore';

const projectCollectionRef = collection(db, "project")

class ProjectDataService{
    getProjects = () => {
        return getDocs(projectCollectionRef)
    }
}

export default new ProjectDataService();