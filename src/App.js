import { RouterProvider } from 'react-router-dom';

import './App.css';
import router from './router/index';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
