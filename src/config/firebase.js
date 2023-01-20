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

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
const storage = getStorage(app);

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

async function getImageURL(imageData) {
  const fileName = imageData.uri.split("/").pop();
  try {
    const imageRef = ref(storage, "images/" + fileName);
    const img = await fetch(imageData.uri);
    const bytes = await img.blob();
    const res = await uploadBytes(imageRef, bytes);
    const url = await getDownloadURL(res.ref);
    return url;
  } catch (error) {
    console.log("error", error.message);
  }
}

const createAds = async (values) => {
  console.log(values);
  try {
    const response = await addDoc(collection(db, "AdsDetails"), values);
    const updateAdsDetails = doc(db, "AdsDetails", response.id);
    await updateDoc(updateAdsDetails, {
      docId: response.id,
    });
  } catch (error) {
    alert("Error", error.message);
  }
};

const getAllData = async () => {
  try {
    const q = query(collection(db, "AdsDetails"));
    const querySnapshot = await getDocs(q);
    let copyArray = [];
    querySnapshot.forEach((doc) => {
      copyArray.push(doc.data());
    });
    return {
      error: false,
      message: "load ads successfully from firebase",
      allAds: copyArray,
    };
  } catch (error) {
    return { error: false, message: error.message, allAds: [] };
  }
};

export {
  userSignUp,
  userLogin,
  isUserAvailable,
  getImageURL,
  createAds,
  getAllData,
  auth,
};
