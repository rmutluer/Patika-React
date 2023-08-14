import { createContext, useContext, useState } from "react";

const UserContext=createContext();

export const UserProvider=({children})=>{

   
    
    // const values={
    //     id:1,
    //     name:'Resul',
    //     surname:'Mutluer',
    //     bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem"
    // }

    const [user, setUser] = useState(null)
    // const [user, setUser] = useState({
    //     id:1,
    //     name:'Resul',
    //     surname:'Mutluer',
    //     bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem"
    // })


    const values={user, setUser}
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

//export default UserContext;
export const useUser=()=>useContext(UserContext)