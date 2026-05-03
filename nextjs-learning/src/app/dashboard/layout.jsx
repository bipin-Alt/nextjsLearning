import Link from "next/link";

export default function commonDashboardLayout ({children}){
return (
    <div>
     <div className="flex">
        <aside className="w-64 p-4 border-r ">
           <h2>Dashboard</h2>
           <nav>
            <ul>
                <li>
                    <Link href={"/dashboard"}>Dashboard Home</Link>
                </li>
                <li>
                    <Link href={"/dashboard/analytics"}>Dashboard Analytics</Link>
                </li>
            </ul>
           </nav>
        </aside>
        <div className="flex-1 p-1">
           {children}
        </div>
     </div>
    
    </div>
)
}