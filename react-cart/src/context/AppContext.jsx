import {createContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const AppContext = createContext (null);

const AppContextProvider = ({children}) => {
  const navigate = useNavigate ();
  const [user, setUser] = useState (true);
  const [isSeller, setIsSeller] = useState (null);
  const [showUserLogin, setShowUserLogin] = useState (true);
  // const [rating, setRating] = useState(0);
  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    /* rating,
    setRating, */
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
