import { Route, Routes } from 'react-router-dom';
import RouterComponent from './components/RouterComponent';

const App = () => (
  <Routes>
    <Route path='*' element={<RouterComponent />} />
  </Routes>
);

export default App;
