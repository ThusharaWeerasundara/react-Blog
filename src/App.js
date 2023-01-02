import './App.css';
import Home from './Components/Home';
import './Components/Navbar';
import Navbar from './Components/Navbar';
import Test from './Components/Test';

function App() {

  const title = "welcome";

  return (
    <div className = "App"> 

      <Navbar/>

      <div className = "content">

        <Home/>

      </div>

    </div>
  );
}

export default App;
