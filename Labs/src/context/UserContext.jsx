import { useContext, useState, createContext } from "react";

const UserContext = createContext();

export const UserProvider = (props) => {
    const [currentUser, serCurrentUser] = useState({});

    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    }

    return (<UserContext.Provider value={{currentUser, handleUpdateUser}}>
        {props.children}
    </UserContext.Provider>
    );
}

export const useUserContext = () => {
    return useContext(UserContext);
}