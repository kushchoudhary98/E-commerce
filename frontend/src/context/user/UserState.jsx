import UserContext from "./UserContext";
import { useState } from "react";

const UserState = (props) => {
    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;