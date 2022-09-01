import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration/Registration';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProtectedRoutes from './ProtectedRoutes';
import SingleItem from './pages/SingleItem/SingleItem';
import NotFound from './pages/Not Found/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
      <BrowserRouter>
    <Routes>
      <Route path='auth' element={<Auth />}/>
      <Route path='reg' element={<Registration />}/>
      <Route element={<ProtectedRoutes />}>
      <Route path='/' element={<Home />}/>
      <Route path="users/:id" element={<SingleItem />}/>
      </Route>
      <Route path='/*' element={<NotFound />}/>
    </Routes>
    </BrowserRouter>
    </Provider>
);