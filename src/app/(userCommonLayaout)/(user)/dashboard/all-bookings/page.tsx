"use client";

import { useEffect, useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Button } from "@nextui-org/react";
import { TrashIcon } from "lucide-react"; // Trash icon for delete button

import { TUser } from "@/src/types/updateUserType";

import { getAllUsers } from "@/src/services/getAllUsers";



export default function UsersPage() {
  const [users, setUsers] = useState<TUser[]>([]);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const getUsers = async () => {
          const userData = await getAllUsers();

          setUsers(userData);
        };
    
        getUsers();
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
  
    fetchUsers();
  }, []);
  

  // Handle user deletion
  const handleDelete = (userId: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      setUsers(users.filter((user) => user._id !== userId)); // Optimistic UI update
      // Here, you'd call the API to delete the user
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <Table aria-label="Users Table">
        <TableHeader>
          <TableColumn>Role</TableColumn>
          <TableColumn>Phone</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Address</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>
                <Button color="danger" isIconOnly onClick={() => handleDelete(user._id)}>
                  <TrashIcon size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
