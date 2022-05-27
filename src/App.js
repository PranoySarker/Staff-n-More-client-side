import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Blog from './Pages/Blog/Blog';
import AddProduct from './Pages/Dashboard/AddProduct';
import AllUsers from './Pages/Dashboard/AllUsers';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyReviews from './Pages/Dashboard/MyReviews';
import Home from './Pages/Home/Home';
import PurchaseTool from './Pages/Home/PurchaseTool';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Protected from './Pages/Protected/Protected';
import ProtectedAdmin from './Pages/Protected/ProtectedAdmin';
import Signup from './Pages/Signup/Signup';
import Footer from './shared/Footer';
import Header from './shared/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/dashboard' element=
          {
            <Protected>
              <Dashboard></Dashboard>
            </Protected>
          }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='makeAdmin' element=
            {<ProtectedAdmin>
              <AllUsers></AllUsers>
            </ProtectedAdmin>}></Route>
          <Route path='addProduct' element=
            {<ProtectedAdmin>
              <AddProduct></AddProduct>
            </ProtectedAdmin>}></Route>
          <Route path='manageProduct' element=
            {<ProtectedAdmin>
              <ManageProducts></ManageProducts>
            </ProtectedAdmin>}></Route>
        </Route>
        <Route path='/tools/:id' element=
          {
            <Protected>
              <PurchaseTool></PurchaseTool>
            </Protected>
          }>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
