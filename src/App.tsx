import { app } from "firebaseApp";
import { getAuth } from "firebase/auth";
import Router from './components/Router';
import { useState } from "react";

function App() {
  // getAuth 함수는 app을 넣어줘야 동작합니다.
  const auth = getAuth(app); 
  console.log(auth);

  //auth 안에 currentUser가 중요. 기본 null
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );
  
  return (
    <>
      <Router isAuthenticated={isAuthenticated}/>
    </>
  );
}

export default App;
