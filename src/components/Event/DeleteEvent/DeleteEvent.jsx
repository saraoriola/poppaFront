import React from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text } from "@chakra-ui/react";

const DeleteEvent = ({ isOpen, onClose, onDelete }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirmar eliminación</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>¿Estás seguro de que deseas eliminar este evento?</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" onClick={onDelete}>
            Eliminar
          </Button>
          <Button onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteEvent;
