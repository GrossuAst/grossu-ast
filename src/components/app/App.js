import styles from './App.module.css';
import { Route, Routes } from 'react-router-dom';

import Header from '../header/header';
import Home from '../../pages/home/home';
// import Contacts from '../../pages/contacts/contacts';
// import Portfolio from '../../pages/portfolio/portfolio';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App() {
  return (
    <div className={ styles.App }>
      <Header />
      <Routes>
        <Route path='/' element={ <Home />  } />
        {/* <Route path='/contacts' element={ <Contacts /> } /> */}
        {/* <Route path='/portfolio' element={ <Portfolio /> } /> */}
        <Route path='*' element={ <NotFoundPage /> } />
      </Routes>
    </div>
  );
}

export default App;
