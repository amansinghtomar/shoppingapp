import { onAuthStateChanged } from "firebase/auth";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import { auth } from "./firebase";
import { resetUserInfo } from "./redux/authenticationSlice";
import Router from "./Router/Router";

function App() {
   const dispatch = useDispatch();
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (!user) {
            dispatch(resetUserInfo());
         }
      });
   });
   return (
      <>
         <Navbar isAuthenticated={isAuthenticated} />
         <Suspense>
            <Router />
         </Suspense>
      </>
   );
}

export default App;
