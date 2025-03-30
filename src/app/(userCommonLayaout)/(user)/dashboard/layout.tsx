"use client";

import { useEffect, useState } from "react";

import Container from "@/src/components/modules/UI/container";
import Sidebar from "@/src/components/modules/UI/Sidebar";
import { Menu } from "lucide-react";
import { getCurrentUser } from "@/src/services/currentUser";
import { TAuthUser } from "@/src/types";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [user,setUser]=useState<TAuthUser | null>(null)
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
  
    fetchUser();
  }, [])

  return (
    <Container>
      <div className="flex">
        {/* Sidebar as Drawer for Small Screens */}
        <div className="lg:hidden p-4">
          <button onClick={() => setDrawerOpen(true)} className="text-gray-700">
            <Menu size={28} />
          </button>
        </div>

        {/* Sidebar for Large Screens */}
        <div
          className={`fixed inset-y-0 left-0 bg-default-100 w-[60%] sm:w-[50%] md:w-[35%] lg:w-[20%] p-4 transition-transform transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 lg:block rounded-r-xl md:rounded-xl shadow-lg lg:shadow-none z-40 lg:z-0 lg:sticky lg:h-full top-0`}
        >
          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute top-4 right-4 text-gray-700 lg:hidden"
          >
            ✕
          </button>
          <Sidebar user={user?.role} />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-[80%] bg-default-100 rounded-xl p-4 md:ml-2">
          {children}
        </div>
      </div>
    </Container>
  );
}
