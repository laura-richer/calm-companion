import { Routes, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Main from './pages/Main';

import Container from './wrappers/Container';

import './App.css';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/get-soundtrack" element={<Main />} />
      </Routes>
    </Container>
  )
}

export default App;
