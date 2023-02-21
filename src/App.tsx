import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import routes from './routes';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Menu from './components/Menu';

const router = createBrowserRouter(routes);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Menu />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
