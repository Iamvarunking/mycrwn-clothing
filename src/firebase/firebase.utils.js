import firebase from 'firebase/app';

import 'firebase/firestore' ;
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDv9jGFNdN5xQEYlM8NSjuwT6zQUKOcHfE",
    authDomain: "crwn-clothing-db-4313c.firebaseapp.com",
    projectId: "crwn-clothing-db-4313c",
    storageBucket: "crwn-clothing-db-4313c.appspot.com",
    messagingSenderId: "1068185336693",
    appId: "1:1068185336693:web:6b3aa939a0144fe746713c",
    measurementId: "G-J2MSBBFLXD"
};


export const createUserProfileAccount = async (userAuth , additionData) => {

if(!userAuth) return  ;

const userRef = firestore.doc(`users/${userAuth.uid}`);
const snapShot = await userRef.get();

if(!snapShot.exists){
    const { displayName , email} = userAuth;
    const createdAt = new Date();

    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionData
        })

    } catch(error) {

        console.log("error while creating account " , error.massage) ; 

    }
}

return userRef ; 

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase ;
