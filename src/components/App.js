import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Shared/Navbar/Navbar';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes />
        </Router>
    );
}

export default App;
