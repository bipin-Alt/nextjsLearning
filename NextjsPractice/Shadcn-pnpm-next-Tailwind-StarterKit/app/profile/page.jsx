import { auth } from "@/auth/auth";
import Profile from "@/components/profile/profile";


async function ProfilePage() {
    const session = await auth();
    console.log(session);
    
    return (
        <>
        <Profile userData={session} />
        </>
    );
}

export default ProfilePage;