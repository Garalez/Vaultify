import { Route, Routes } from 'react-router-dom';
import Application from './Application';
import Landing from './Landing';

export const RouterComponent = () => (
  <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/application/*' element={<Application />} />
  </Routes>
);
