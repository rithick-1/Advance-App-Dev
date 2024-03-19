import {BrowserRouter,Routes,Route} from 'react-router-dom';
import AdminLogin from './Admin1/AdminLogin';
import AddService from './Admin1/AddService';
import AdminDash from './Admin1/AdminDash';
import EditService from './Admin1/EditService';
import Viewservices from './Admin1/ViewService';
import PayHistory from './Admin1/PayHistory';
import Allbooks from './Admin1/AllBooks';
 import Home from './pages/Admin/User/Home';
    import Login from './pages/Admin/User/Login';
   import Signup from './pages/Admin/User/Signup';
  import LandingPage from './pages/Admin/User/LandingPage';
  import UserDetail from './pages/Admin/User/UserDetail';
const App = () => {
  return (
    <BrowserRouter>
        
           {/* <Login/>    */}
         {/* <Home />     */}
           {/* <LandingPage/> */}
             {/* <UserDetail/>    */}
          {/* <Signup/>   */}
          {/* <AddService/> */}
          {/* <AdminDash/> */}
          
           {/* <EditService/> */}
           {/* <Viewservices/> */}
           {/* <PayHistory/> */}
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='/landing' element={<LandingPage></LandingPage>}></Route>
            <Route path='/userdetail' element={<UserDetail></UserDetail>}></Route>
            <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
            <Route path='/admindash' element={<AdminDash></AdminDash>}></Route>
            <Route path='/addservice' element={<AddService></AddService>}></Route>
            <Route path='/editservice' element={<EditService></EditService>}></Route>
            <Route path='/viewservice' element={<Viewservices></Viewservices>}></Route>
            <Route path='/payhistory' element={<PayHistory></PayHistory>}></Route>
            <Route path='/allbook' element={<Allbooks></Allbooks>}></Route>
          </Routes>


    </BrowserRouter>
  )
}

export default App