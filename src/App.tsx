import { app, db } from 'firebaseApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Router from './components/Router';
import { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/loader/Loader';
import { ThemeContext } from 'context/ThemeContext';

function App() {
  const context = useContext(ThemeContext);

  // getAuth 함수는 app을 넣어줘야 동작합니다.
  const auth = getAuth(app);

  // auth를 체크하기 전에 (initialize 전)에는 loader를 띄워주는 용도
  const [init, setInit] = useState<boolean>(false);

  // auth의 currentUser가 있으면 authenticated로 변경
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        // User is sign out
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <div className={context.theme === 'light' ? 'white' : 'dark'}>
      <ToastContainer autoClose={1000} hideProgressBar newestOnTop />
      {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
    </div>
  );
}

export default App;
