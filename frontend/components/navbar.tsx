"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { handleSignOut } from "@/app/actions/authActions";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function Navbar() {
  const { data: session } = useSession();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("user-dropdown");
      const profileImg = document.getElementById("profile-img");
      if (!dropdown || !profileImg) return;

      const target = event.target as Node;
      if (!dropdown.contains(target) && !profileImg.contains(target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-around py-2 px-10 bg-black">
      <Link href="/" className="text-xl font-bold text-white">
        Proffernet
      </Link>

      {!session ? (
        <Link href="/auth/signin">
          <Button variant="default">Sign In</Button>
        </Link>
      ) : (
        <div className="relative">
          <img
            id="profile-img"
            src={session.user.image ?? "/default-image.png"}
            alt={session.user.name ?? "User"}
            className="h-10 w-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={() => setIsMenuOpen(true)}
          />

          <div
            id="user-dropdown"
            className={`absolute left-0 mt-2 w-48 bg-black border border-white/[0.2] text-white font-bold font-sans shadow-lg rounded-lg transition-all duration-300 ease-in-out transform ${
              isMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
            style={{
              zIndex: 9999,
            }}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <div>
              <Link
                href="/pages/dashboard"
                className="flex items-center justify-between px-4 py-3  hover:scale-105 transition-all duration-200"
              >
                Dashboard
                <FaChevronRight
                  size={12}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/pages/projectlist"
                className="flex items-center justify-between px-4 py-3  hover:scale-105 transition-all duration-200"
              >
                Contribute
                <FaChevronRight
                  size={12}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
              <form action={handleSignOut}>
                <button
                  type="submit"
                  className="w-full flex items-center justify-between px-4 py-3  hover:scale-105 transition-all duration-200"
                >
                  Sign out
                  <FaChevronRight
                    size={12}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
