"use client"
import React from 'react';
import { Button } from '../ui/button';
import { handleLogout } from '@/lib/actions/Auth';

export default function UserDashboard({userName, userEmail}) {

    console.log("Name of the User is : ", userName);
    console.log("The email of the user is :" , userEmail);


    return (
        <div>
            <p>Hello, {userEmail}</p>
            <p>You are registered under the email : {userEmail}</p>
            <p> This is the user Dashboard</p>
            <p>Wanna logout ?</p>
            <Button onClick={()=>{handleLogout}}>Logout</Button>
        </div>

    );
}