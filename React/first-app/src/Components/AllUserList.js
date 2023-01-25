import React from 'react'
import UserDetails from './UserDetails';

const AllUserList = () =>{
    let allUsers=[{
        name:"John",
        email:"john@email.com",
        phoneNumber: "2732462498",
    },
    {
        name:"Shreyus",
        email:"shreyus@email.com",
        phoneNumber: "27300000", 
    },
    {
        name:"Nilanjan",
        email:"Nilajna@email.com",
        phoneNumber: "1111300000", 
    }
];
    return(
        <div>
        {/* <UserDetails user={allUsers[0]}/>
        <UserDetails user={allUsers[1]}/>
        <UserDetails user={allUsers[2]}/> */}
        {allUsers.map((user,index) => (
            <UserDetails key={index} user={user} />
        ))}
        </div>
        
        

    )
};

export default AllUserList;