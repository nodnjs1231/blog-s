import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import "firebase/auth";

// app 이름으로 지역번수 선언.
export let app: FirebaseApp;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// 선언된 app에 할당. 
// app이 init 됬다면 초기화된 앱을 가져오고, 그게 아니라면 초기화하는 로직.
try {
  app = getApp("app")
} catch (e){
  app = initializeApp(firebaseConfig, "app");
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;