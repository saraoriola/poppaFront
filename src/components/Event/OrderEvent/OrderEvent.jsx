import React, { useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input, FormControl, FormLabel, Textarea, Select, Stack } from "@chakra-ui/react";

const OrderEvent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventLocation: "",
    eventDescription: "",
    eventCategory: "",
  });

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Datos del evento:", formData);
    handleCloseModal();
  };

  return (
    <>
      <Button onClick={handleOpenModal}>Crear Evento</Button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Evento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Nombre del Evento</FormLabel>
              <Input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Fecha del Evento</FormLabel>
              <Input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Lugar del Evento</FormLabel>
              <Input
                type="text"
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Descripción del Evento</FormLabel>
              <Textarea
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Categoría del Evento</FormLabel>
              <Select
                name="eventCategory"
                value={formData.eventCategory}
                onChange={handleChange}
              >
                <option value="Conferencia">Conferencia</option>
                <option value="Taller">Taller</option>
                <option value="Reunión">Reunión</option>
                <option value="Otro">Otro</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Stack direction="row" spacing={4}>
              <Button colorScheme="blue" onClick={handleSubmit}>
                Crear
              </Button>
              <Button onClick={handleCloseModal}>Cancelar</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default OrderEvent;
