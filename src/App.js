import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home';

function App() {
    return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}> // Render Page layout when root url (path is "/") is loaded (on localhost the root url is http://localhost:3000/)
           <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
