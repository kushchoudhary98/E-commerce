import UserContext from "./UserContext";
import { useState } from "react";

const UserState = (props) => {
    const [user, setUser] = useState(0.0);

    function change(value) {
        setUser(value);
    }

    return (
        <UserContext.Provider value={{user, change}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;