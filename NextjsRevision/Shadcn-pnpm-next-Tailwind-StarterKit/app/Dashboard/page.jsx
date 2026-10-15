import UserDashboard from '@/components/Dashboard/dashboard';
import { getCurrentSession } from '@/lib/session';
import { redirect } from 'next/navigation';

import React from 'react';

export default async function UserDashboardpage() {
const session = await getCurrentSession();

 if(!session) {
    redirect('/Login');
 }
    return (
       <UserDashboard 
        userName={session.user.name}
        userEmail={session.user.email}
       />
    );
}