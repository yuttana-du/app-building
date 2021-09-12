import React from "react";

import UsersList from "../components/UserList";

const Users = () =>{
     const USERS = [
         {
        id:'U1',
        name: 'bank',
        image:'https://image.freepik.com/free-vector/elegant-mid-autumn-festival-attractive-moon-watermelon-red-cloud_317396-858.jpg',
        places: 3
    }
];

    return <UsersList items={USERS}/>
};

export default Users;