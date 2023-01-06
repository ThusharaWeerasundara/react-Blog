import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// now surround the application inside Router because all components nesetd in App component has acccess to router
// then need to decide a div to display page content when move to different pages. Use Switch component: this make sure only 1 route shows at any 1 time

import Home from './Components/Home';
import Create from './Components/Create';
import Navbar from './Components/Navbar';
import BlogDetails from './Components/BlogDetails';
import NotFound from './Components/NotFound';
//import Test from './Components/Test';
//import PropsAndGet from './Components/PropsAndGet';



function App() {

  const title = "welcome";

  return (

    <Router>  {/*React router prevents these requests from going to bacjend and handle it by it selt by injecting whatever the content needed. this is faster*/}

      <div className = "App"> 

        <Navbar/> {/* navbar is gonna show for every component becs it is not in switch component. components inside switch components gonna change depending on the route*/}

        <div className = "content">

           <Switch>  {/* all routes go inside Switch componnet. only 1 component will show at a time. react search this top to bottom to get the component*/}

              <Route exact path='/'> <Home/> </Route> {/* /create path aslo matches to / path bcz of /. Therefore use "excact" to get a exact match */}
              <Route path='/create'> <Create/> </Route>
              <Route path='/blogs/:id'> <BlogDetails/> </Route>

              <Route path='/*'> <NotFound/> </Route> {/* for not found. /* catch any route */}
           </Switch>

        </div>

      </div>

    </Router>

  );
}

export default App;
