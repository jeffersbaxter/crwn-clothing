import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './store/user/user.action';

import './App.css';
// import { selectCurrentUser } from './store/user/user.selector';

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  console.log(currentUser);
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;