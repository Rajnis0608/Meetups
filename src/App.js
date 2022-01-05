import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetUps';
import NewMeetupsPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNevigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

function App() {
  return( 
  <div>
    <Layout >
    <Routes>
    <Route path='/' element={<AllMeetupsPage />}> </Route>
    <Route path='/new-meetup' element={<NewMeetupsPage />}></Route>
    <Route path='/favorites' element={<FavoritesPage />}></Route>
    </Routes>
    </Layout>
  </div>
  )};

export default App;
