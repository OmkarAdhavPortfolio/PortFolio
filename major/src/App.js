// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import AuthLayout from './_auth/AuthLayout';
// import SigninForm from './_auth/forms/SigninForm';
// import SignupForm from './_auth/forms/SignupForm';
// // import Home from './pages/Home';
// // import Explore from './pages/Explore';
// // import Saved from './pages/Saved';
// // import AllUsers from './pages/AllUsers';
// // import CreatePost from './pages/CreatePost';
// // import EditPost from './pages/EditPost';
// // import PostDetails from './pages/PostDetails';
// // import Profile from './pages/Profile';
// // import UpdateProfile from './pages/UpdateProfile';
// function App() {
//   return (
//     <div className="App">
//       <Router>
//       <Routes>
//         {/* Public routes */}
//         <Route element={<AuthLayout />}>
//           <Route path='/sign-in' element={<SigninForm />} />
//           <Route path='/sign-up' element={<SignupForm />} />
//         </Route>

//         {/* Private routes
//         <Route element={<RootLayout />}>
//           <Route index element={<Home />} />
//           <Route path="/explore" element={<Explore />} />
//           <Route path="/saved" element={<Saved />} />
//           <Route path="/all-users" element={<AllUsers />} />
//           <Route path="/create-post" element={<CreatePost />} />
//           <Route path="/update-post/:id" element={<EditPost />} />
//           <Route path="/posts/:id" element={<PostDetails />} />
//           <Route path="/profile/:id/*" element={<Profile />} />
//           <Route path="/update-profile/:id" element={<UpdateProfile />} />
//         </Route> */}
//       </Routes>
//     </Router>
//     </div>
//   );
// }

// export default App;


import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AuthLayout from './_auth/AuthLayout'; // your layout component
import SigninForm from './_auth/forms/SigninForm'; // your sign-in form component
import SignupForm from './_auth/forms/SignupForm'; // your sign-up form component
import FromLayout from './components/FromLayout';

const App = () => {
  return (
    <main className='flex h-screen'>
    <Router>
      <Routes>
        {/* Define the layout route and nested routes */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>

        <Route>
        <Route path='/' element={<FromLayout />} />
        </Route>
      </Routes>
    </Router>
    </main>
  );
};

export default App;
