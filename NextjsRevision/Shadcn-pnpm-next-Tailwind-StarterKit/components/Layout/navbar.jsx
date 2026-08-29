import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* AUTHDAS */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight"
        >
          AUTHDAS
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            Home
          </Link>

          <Link
            href="/About"
            className="text-sm font-medium transition-colors hover:text-gray-500"
          >
            About
          </Link>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-3">
          <Link
            href="/register"
            className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Register
          </Link>

          <Link
            href="/login"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-80 dark:bg-white dark:text-black"
          >
            Login
          </Link>
        </div>

      </nav>
    </header>
  );
}