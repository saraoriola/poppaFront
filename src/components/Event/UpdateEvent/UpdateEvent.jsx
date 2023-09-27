import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Select } from "@chakra-ui/react";

const UpdateEvent = () => {
  const [formData, setFormData] = useState({ title: "", description: "", date: "", time: "", location: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos actualizados:", formData);
  };

  return (
    <Box p={4}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Título del Evento</FormLabel>
          <Input type="text" name="title" value={formData.title} onChange={handleChange} />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Descripción</FormLabel>
          <Textarea name="description" value={formData.description} onChange={handleChange} />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Fecha</FormLabel>
          <Input type="date" name="date" value={formData.date} onChange={handleChange} />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Hora</FormLabel>
          <Input type="time" name="time" value={formData.time} onChange={handleChange} />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Ubicación</FormLabel>
          <Select name="location" value={formData.location} onChange={handleChange}>
            <option value="edem">EDEM</option>
            <option value="online">Online</option>
            <option value="otro">Otro</option>
          </Select>
        </FormControl>

        <Button type="submit" mt={4} colorScheme="teal">
          Actualizar Evento
        </Button>
      </form>
    </Box>
  );
};

export default UpdateEvent;
