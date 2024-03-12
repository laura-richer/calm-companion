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
        <Route element={ <Landing/> } path="/" />
        <Route element={ <Welcome/> } path="/welcome" />
        <Route element={ <QuickHelp/> } path="/quick-help" />
        <Route element={ <AnxietyResources/> } path="/anxiety-resources" />
        <Route element={ <CbtTools/> } path="/cbt-tools" />
        <Route element={ <HelpfulContacts/> } path="/helpful-contacts" />
      </Routes>
    </Container>
  )
}

export default App;
