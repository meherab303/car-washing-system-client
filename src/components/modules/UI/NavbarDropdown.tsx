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

import { logout } from "@/src/services/logout";
// import { useEffect, useState } from "react";

export default function NavbarDropdown() {
  // const [user, setUser] = useState(null);
  const router = useRouter();

  // // Function to fetch the user data
  // const fetchUser = async () => {
  //   const userData = await getCurrentUser();

  //   setUser(userData); // Update user state
  // };

  // // Fetch the user data once the component mounts
  // useEffect(() => {
  //   fetchUser();
  // }, []);

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
        <Avatar className="cursor-pointer" name="joe" />
      </DropdownTrigger>

      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="profile"
          onPress={() => handleNavigation("/profile")}
        >
          Profile
        </DropdownItem>
        <DropdownItem
          key="settings"
          onPress={() => handleNavigation("/profile/settings")}
        >
          Settings
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
