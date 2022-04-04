
import './App.css';
import Header from './components/Header'
import SearchInput from './components/searchInput';
import Tabs from './components/Tabs';
import AudioList from './components/Audiolist';

function App() {
  return (
    <div className="App m-20">
    <Header />
    <h2 className='mtb-20 app-quote'>Find Your best music for your list</h2>
    <SearchInput />
    <Tabs />
    <AudioList />
    
    </div>
  );
}

export default App;
