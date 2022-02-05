import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
    return (
        <div className='app'>
            <Header />
            <Navbar />
            <Profile name='Kerem' status='İ am bored' />
        </div>
    );
}

export default App;
