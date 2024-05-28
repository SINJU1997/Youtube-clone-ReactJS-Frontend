
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Navigation from './components/Navigation';
import Main from "./components/Main"

function App() {
  return (
    <div className='App'>

      <Header />
      <div className='play-div'>
        <Sidebar />
        <div>
          <Navigation />
          <div className='video-div' style={{

          }}>
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
