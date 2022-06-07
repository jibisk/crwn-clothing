import { Routes, Route } from 'react-router-dom';

import Home from './routes/homepage/homepage.component';
import Navigation from './components/header/header.component';
import SignInAndSignUpPage from './routes/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ShopPage from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<ShopPage />} />
        <Route path='auth' element={<SignInAndSignUpPage />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;