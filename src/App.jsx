import { Route, Routes } from 'react-router-dom';
import RouterComponent from './components/RouterComponent';


function App() {
  return (
    <Routes>
      <Route
        path='*'
        element={
          <RouterComponent />
        }
      />
    </Routes>
  );
}

export default App;
