import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAI7E2Ks6kmQ2cWvuOh8BaIbmN5Ifr647s",
    authDomain: "crwn-db-4946e.firebaseapp.com",
    databaseURL: "https://crwn-db-4946e-default-rtdb.firebaseio.com",
    projectId: "crwn-db-4946e",
    storageBucket: "crwn-db-4946e.appspot.com",
    messagingSenderId: "750875763093",
    appId: "1:750875763093:web:57a43a5bc26686eb49569c"
  };

firebase.initializeApp(firebaseConfig);

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error in user creation', error.message)
      }

    }

    return userRef;

  }
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
