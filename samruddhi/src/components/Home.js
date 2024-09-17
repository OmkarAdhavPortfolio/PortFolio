// import { doc, getDoc } from 'firebase/firestore';
// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { auth, db } from '../auth/firebase'; // Adjust the path as needed
// import Digitalcertification from './Digitalcertification';
// import Header from './Header';
// import Main from './Main';
// import Services from './Services';
// import Slidercontainer from './Slidercontainer';

// const Home = () => {
//   const [userDetails, setUserDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchUserData = async () => {
//     try {
//       auth.onAuthStateChanged(async (user) => {
//         if (user) {
//           const docRef = doc(db, 'Users', user.uid);
//           const docSnap = await getDoc(docRef);
//           if (docSnap.exists()) {
//             setUserDetails(docSnap.data());
//           } else {
//             console.log('User document does not exist');
//           }
//         } else {
//           console.log('No user is signed in');
//         }
//         setLoading(false);
//       });
//     } catch (err) {
//       setError('Failed to fetch user data');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <Container>
//       {/* Pass userDetails as props to Header */}
//       <Header userDetails={userDetails} />
//       <Main />
//       <Slidercontainer />
//       <Digitalcertification />
//       <Services />
//     </Container>
//   );
// };

// export default Home;

// const Container = styled.div`
//   height: auto;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;

import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { auth, db } from '../auth/firebase'; // Adjust the path as needed
import Contact from './Contact';
import Digitalcertification from './Digitalcertification';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Samruddhifeatures from './Samruddhifeatures';
import Services from './Services';
import Slidercontainer from './Slidercontainer';

const Home = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, 'Users', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log('User document does not exist');
          }
        } else {
          console.log('No user is signed in');
        }
        setLoading(false);
      });
    } catch (err) {
      setError('Failed to fetch user data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Header />
      <Main />
      <Services />
      <Digitalcertification />
      <Slidercontainer />
      <Samruddhifeatures />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

