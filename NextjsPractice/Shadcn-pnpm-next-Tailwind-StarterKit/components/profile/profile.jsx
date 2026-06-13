import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, User, Mail, ShieldCheck, Calendar } from "lucide-react";
import { handleLogout } from "@/app/actions/serverActions";

function Profile({ userData }) {
    console.log(userData);
    const user = userData?.user || {};
    
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-4 dark:bg-zinc-950">
            {/* Soft radial background glow */}
            <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-radial from-violet-500/5 to-transparent blur-3xl dark:from-violet-500/10" />

            <div className="w-full max-w-md">
                <Card className="border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <CardHeader className="space-y-1 pb-4 text-center">
                        <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white dark:border-zinc-800 shadow-lg ring-2 ring-violet-500/30">
                            {user.image ? (
                                <Image
                                    fill
                                    alt={user.name || "User Avatar"}
                                    src={user.image}
                                    className="object-cover"
                                    loading="eager"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500">
                                    <User className="h-10 w-10" />
                                </div>
                            )}
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-semibold text-violet-700 dark:bg-violet-950/40 dark:text-violet-300">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Verified Profile
                        </div>
                        <CardTitle className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 mt-2">
                            {user.name || "Anonymous User"}
                        </CardTitle>
                        <CardDescription className="text-zinc-500 dark:text-zinc-400">
                            Logged in via OAuth provider
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4 border-t border-zinc-100 py-5 dark:border-zinc-800/60">
                        {/* Detail Items */}
                        <div className="flex items-center gap-3 rounded-lg border border-zinc-100 bg-zinc-50/50 p-3.5 dark:border-zinc-800/40 dark:bg-zinc-900/30">
                            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm dark:bg-zinc-800">
                                <User className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Full Name</p>
                                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                                    {user.name || "N/A"}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 rounded-lg border border-zinc-100 bg-zinc-50/50 p-3.5 dark:border-zinc-800/40 dark:bg-zinc-900/30">
                            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-sm dark:bg-zinc-800">
                                <Mail className="h-4 w-4 text-zinc-500 dark:text-zinc-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Email Address</p>
                                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                                    {user.email || "N/A"}
                                </p>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-3 pb-6">
                        <form action={handleLogout}>
                            <Button
                            variant="destructive"
                            className="w-full cursor-pointer font-semibold py-2.5 flex items-center justify-center gap-2 shadow-sm transition-all duration-200 hover:scale-[1.01]"
                        >
                            <LogOut className="h-4 w-4" />
                            Log Out
                        </Button>

                        </form>
                        
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Profile;