"use client"
import React from 'react';
import { Button } from '../ui/button';
import { handleLogout } from '@/lib/actions/Auth';


export default function AdminTable({adminName, adminEmail}) {
    console.log( "Welcome " , adminName);
    console.log("You are register under the EMAIL : ", adminEmail);

    return (
        <div> 
            <p>Hello {adminName}</p>
            <p> This is the admin table.</p>
             <p>Wanna logout ?</p>
             <Button onClick={()=>{handleLogout()}}>Logout</Button>
        </div>
    );
}