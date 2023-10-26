import './styles/app.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './app/layout/Header';
import AppRoutes from './app/routes/Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes /> {/* Use the AppRoutes component for routing */}
      </div>
    </Router>
  );
}

export default App;