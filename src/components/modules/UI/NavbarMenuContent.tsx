// components/NavbarMenuContent.tsx
"use client";

import { NavbarMenuItem } from "@heroui/navbar";
import { Link } from "@heroui/link";
import { useRouter } from "next/navigation";

import { siteConfig } from "@/src/config/site";
import { logout } from "@/src/services/logout";
import { Button } from "@heroui/react";

const NavbarMenuContent = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className="mx-4 mt-2 flex flex-col gap-2">
      {siteConfig.navMenuItems.map((item, index) => {
        // Hide "Dashboard" and "Logout" if not logged in
        if (
          !isLoggedIn &&
          (item.label === "Dashboard" || item.label === "Logout")
        ) {
          return null;
        }

        // Hide "Login" if already logged in
        if (isLoggedIn && item.label === "Login") {
          return null;
        }

        return (
          <NavbarMenuItem key={item.label + index}>
            {item.label === "Logout" ? (
              <Button
                onPress={handleLogout}
                className="text-danger text-lg text-left w-full"
              >
                Logout
              </Button>
            ) : (
              <Link
                href={item.href}
                size="lg"
                color={
                  item.label === "About"
                    ? "primary"
                    : item.label === "Logout"
                      ? "danger"
                      : "foreground"
                }
              >
                {item.label}
              </Link>
            )}
          </NavbarMenuItem>
        );
      })}
    </div>
  );
};

export default NavbarMenuContent;
