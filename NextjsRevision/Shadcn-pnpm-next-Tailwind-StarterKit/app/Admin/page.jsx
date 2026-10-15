import AdminTable from '@/components/Admin/adminTable';
import { getCurrentSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function AdminPage() {
   const session = await getCurrentSession();
   console.log(session);
   if(!session){
    redirect('/Login');
   };
   if(session.user.role !== 'ADMIN')  {
    redirect('/Dashboard');
   }

    return (
       <AdminTable
        adminName= {session.user.name}
        adminEmail={session.user.email}
       />
    );
}