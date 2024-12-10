import { collection, getDocs } from "firebase/firestore";
import { db } from '../../index.js';  // Ensure the path to your db import is correct

async function readAllDocumentKeys() {
    try {
        const collectionRef = collection(db, "Roadmaps_Board"); 
        const querySnapshot = await getDocs(collectionRef);

        const documentIds = []; 
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.filename) {  
                documentIds.push({
                    title: data.filename,           
                    value: doc.id
                });
            }
        });
        return documentIds; 
    } catch (error) {
        console.error("Error getting documents: ", error);
    }
}

/*
 * Function to read file options
 * @route GET /roadmaps-data/:id
 * @returns {fileId : fileName}
 */
const getRoadmapsOptions = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await readAllDocumentKeys()
        if (data){
            res.status(200).send(data);
        }
        else{
            res.status(404).send([]);
        } 
    } catch (error) {
        res.status(500).send(error.message);
    }
};


export { getRoadmapsOptions };
