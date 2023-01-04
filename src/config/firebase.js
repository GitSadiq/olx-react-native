import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import {
  getFirestore,
  query,
  collection,
  getDocs,
  where,
  addDoc,
  setDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfe-BO1TeZle1iAIVBDXvYyClFYgeDTow",
  authDomain: "sk-olx-app.firebaseapp.com",
  projectId: "sk-olx-app",
  storageBucket: "sk-olx-app.appspot.com",
  messagingSenderId: "777665803672",
  appId: "1:777665803672:web:580619c89c43d85a4fe7ed",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
console.log(provider);

async function userSignUp(username, email, password) {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await setDoc(doc(db, "Userdetails", response.user.uid), {
      username: username,
      email: email,
      uid: response.user.uid,
    });
    return { error: true, message: "User created succussfully! Now login" };
  } catch (error) {
    return { error: false, message: error.message };
  }
}

async function userLogin(email, password) {
  try {
    console.log("yes", email, password);
    await signInWithEmailAndPassword(auth, email, password);
    return { error: true, message: "User login successfully" };
  } catch (error) {
    return { error: false, message: error.message };
  }
}

const isUserAvailable = (setemail) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("user tw hai", user.email);
      setemail(user.email);
      return user.email;
    } else {
      console.log("user nh hai");
    }
  });
};

const loginGoogle = () => {
  console.log("yahan tw call hona chahiye");
  try {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("ye chala");
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        console.log("ya ye chala");
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  } catch (err) {
    console.log("here is error", err);
  }
};

export { userSignUp, userLogin, isUserAvailable, loginGoogle, auth };
