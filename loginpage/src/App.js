import './App.css';
import Login from './components/Login'
// import Bouncing from './components/Bouncing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer';


function App() {
  return (
    <div className="App">
      <div className='cont'>
        {/* <Bouncing></Bouncing> */}
        {/* <Timer></Timer> */}

      <Login/>
      </div>

    </div>
  );
}

export default App;
