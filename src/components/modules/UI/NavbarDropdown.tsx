/* eslint-disable prettier/prettier */
"use client";


import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

import { logout } from "@/src/services/logout";
// import { useEffect, useState } from "react";

export default function NavbarDropdown({user}:{user:string}) {
 
  const router = useRouter();
  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
      <Avatar
    className="cursor-pointer"
    icon={<User className="w-5 h-5 text-white" />}
  />
      </DropdownTrigger>

      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="dashboard"
          onPress={() => handleNavigation("/dashboard")}
        >
          Dashboard
        </DropdownItem>
        <DropdownItem
          key="logout"
          className="text-danger"
          color="danger"
          onPress={handleLogout}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
