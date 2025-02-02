import { useState } from 'react'
import React from 'react';
//import reactLogo from './assets/react.svg'
//import { Link } from 'react-router-dom';
//import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';
//import {Routes,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import Med1 from "./components/med1";
import OTC_medicine from "./components/med2";
import Vitamins from "./components/vitamin";
import PersonalCare from "./components/personalCare";
import SignUp from "./components/Sign-up";
//import LoginForm from "./components/LogInForm";
import Cart from "./components/Cart";
import SearchResults from "./components/searchResult";
import products from './components/product';
import frontImage from "./image/discussing-difficult-disease-treatment-app1.png";

import Login from './components/LogInForm';
import Add from './components/add-delete';
import TrackOrder from './components/TrackOrders';
//import CustomerOrder from './components/cutomerOrders';
//import AdminDashboard from './components/AdminDashboard';


//const backendUrl=import.meta.env.VITE_BACKEND_URL;

import ProductsTable from './components/view';
import CustomerOrder from './components/cutomerOrders';
import NewProductPage from './components/NewProducts';

function App() {
const [token,setToken]=useState('')


  const [searchResults, setSearchResults] = useState(products);
 // const [isAdmin, setIsAdmin] = useState(false);  // Track if the user is an admin
  //const [isUser, setIsUser] = useState(false);    // Track if the user is a regular user
  const location = useLocation();

  // Define routes where the Header should be hidden
  const hideHeaderRoutes = ["/sign-up", "/login", "/cart","/dashboard","/view","/add-item","/payment","/track-order","/customer-order"];
  const shouldHideHeader = hideHeaderRoutes.some((route) =>
    location.pathname.startsWith(route)
  );
  const hideBodyContentRoutes = ["/sign-up", "/login", "/cart", "/dashboard","/view","/add-item","/payment","/track-order","/customer-order"];
  const shouldHideBodyContent = hideBodyContentRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      <div className="main-app">
        {!shouldHideHeader && <Header setSearchResults={setSearchResults} />}

        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/cart" element={<Cart />} />
         
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view" element={<ProductsTable />} />
          <Route path="/add-item" element={<Add />} />
          <Route path="/track-order" element={<TrackOrder/>} />
          <Route path="/customer-order" element={<CustomerOrder/>} />
          <Route path="/search-results"  element={<SearchResults searchResults={searchResults} />}/>
        </Routes>


        {!shouldHideBodyContent && (
        <div className="total-body-section">
          <div className="body-side-bar">
            <Sidebar />
          </div>
          <div className="side">
            {/* Hero Section */}
            <div className="img_and_content">
              <div className="content">
                <h1>Skip the line, get your meds online</h1>
                <h6>
                  Trusted medication, right at your doorstep. Fast, reliable,
                  and hassle-free medicine delivery, just a click away.
                </h6>
              </div>
              <img className="image" src={frontImage} alt="" />
            </div>

            <h1 className="catagory">Product categories</h1>

            {/* Product Categories */}
            <Med1 />
            <OTC_medicine />
            <Vitamins />
            <PersonalCare />
            <div className='new-products'>
            <div className="heading">
      <h3 className="p">Newly Added Products</h3>
                    </div>
              <NewProductPage/>
            </div>
          </div>
        </div>
        )}
    {!shouldHideBodyContent && <Footer />}
    </div>

      

      
    </>
  );
}

export default App;