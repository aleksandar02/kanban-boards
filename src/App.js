import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardDetailsPage from './pages/CardDetailsPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/kanban-boards' element={<Home />} />
          <Route
            path='/kanban-boards/card-details/:id'
            element={<CardDetailsPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
