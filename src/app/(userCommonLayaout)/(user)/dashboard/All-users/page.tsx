"use client";

import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { TrashIcon } from "lucide-react";


import { useDeleteUser, useGetAllUsers } from "@/src/hooks/user.hook";

export default function UsersPage() {
  const { data: users, isLoading } = useGetAllUsers();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { mutate: deleteUser } = useDeleteUser();

  const handleOpenModal = (userId: string) => {
    setSelectedUserId(userId);
    onOpen();
  };

  const handleDelete = () => {
    if (selectedUserId) {
      deleteUser(selectedUserId);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      <Table aria-label="Users Table" isStriped isHeaderSticky>
        <TableHeader>
          <TableColumn>Role</TableColumn>
          <TableColumn>Phone</TableColumn>
          <TableColumn>Email</TableColumn>
          <TableColumn>Address</TableColumn>
          <TableColumn>Action</TableColumn>
        </TableHeader>
        <TableBody isLoading={isLoading}>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.address}</TableCell>
              <TableCell>
                <Button
                  color="danger"
                  isIconOnly
                  onPress={() => handleOpenModal(user._id)}
                >
                  <TrashIcon size={16} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Confirm Deletion</ModalHeader>
              <ModalBody>
                Are you sure you want to delete this user? This action cannot be undone.
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    handleDelete();
                    onClose();
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
