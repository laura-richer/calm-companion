import { Routes, Route } from "react-router-dom"

import Landing from './pages/Landing';
import Welcome from './pages/Welcome';
import QuickHelp from './pages/QuickHelp';
import AnxietyResources from './pages/AnxietyResources';
import CbtTools from './pages/CbtTools';
import HelpfulContacts from './pages/HelpfulContacts';

import Container from './wrappers/Container';

import './App.css';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={ <Landing/> } />
        <Route path="/welcome" element={ <Welcome/> } />
        <Route path="/quick-help" element={ <QuickHelp/> } />
        <Route path="/anxiety-resources" element={ <AnxietyResources/> } />
        <Route path="/cbt-tools" element={ <CbtTools/> } />
        <Route path="/helpful-contacts" element={ <HelpfulContacts/> } />
      </Routes>
    </Container>
  )
}

export default App;
