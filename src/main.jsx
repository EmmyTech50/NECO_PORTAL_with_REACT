import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'


import App from './App.jsx' 
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Create_account from './components/Create_account.jsx'
import Forgot_Password from './components/Forgot_Password.jsx'
import Mytoken from './components/dashboard/Mytoken.jsx'
import Profile_page from './components/dashboard/Profile_page.jsx'
import ResultHistory from './components/dashboard/ResultHistory.jsx'
import Transactions from './components/dashboard/Transactions.jsx'
// Dashboards
import Home from './components/dashboard/DashboardHome.jsx'
import Dashland from './components/dashboard/Dashland.jsx'
import Admin_Dashb from './components/Admin_Panel/Admin_Dashb.jsx';
import ManageUsers from './components/Admin_Panel/ManageUsers.jsx';
import Tokens from './components/Admin_Panel/Tokens.jsx';
import Transaction from './components/Admin_Panel/Transaction.jsx';
import Manage_Admin from './components/Admin_Panel/Manage_Admin.jsx';
import AdminHome from './components/Admin_Panel/AdminHome.jsx';
import { createHashRouter, RouterProvider } from "react-router-dom";
import LoginPage from './components/Admin_Panel/LoginPage.jsx'

const router = createHashRouter([ 
  {  path: "/",  element: <App />, },

  
  {  path: "/Admin",  element: <Admin_Dashb />, 

    children:[
        {  path: "/Admin/AdminHome",  element: <AdminHome />, },
        {  path: "/Admin/Tokens",  element: <Tokens />, },
        {  path: "/Admin/Manage_Admin",  element: <Manage_Admin />, },
        {  path: "/Admin/Transaction",  element: <Transaction />, },
        {  path: "/Admin/Users",  element: <ManageUsers/>, },
        
    ] 
      

  },

  {  path: "/LoginPage",  element: <LoginPage/>, }, 

  {  path: "/app", element: <Home />,
    
    children:[ 
        {  path: "/app/home",      element: <Dashland />, },
        {  path: "/app/my-token",  element: <Mytoken />, },
        {  path: "/app/profile",   element: <Profile_page />, },
        {  path: "/app/result_history", element: <ResultHistory />, },
        {  path: "/app/transaction",    element: <Transactions />, },
    ]
  },
  {  path: "/login",  element: <Login />, },
  {  path: "/create-account",  element: <Signup />, },
  {  path: "/Create_account",  element: <Create_account />, },
  {  path: "/Forgot_Password",  element: <Forgot_Password />, }, 
] );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
         <RouterProvider router={router} />
    </ChakraProvider> 
  </React.StrictMode>,
)
