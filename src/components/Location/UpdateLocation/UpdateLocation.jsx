import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { locationUpdate } from "../../../features/location/locationSlice";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack, useToast } from "@chakra-ui/react";

const UpdateLocation = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    id:"",
    facility_id: "",
    meeting_room: "",
    capacity: "",
    description: "",
  });

  const { message, isSuccess, isError } = useSelector((state) => state.location);
  const toast = useToast();

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Te has actulizado la ubicación con éxito",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
    if (isError) {
      toast({
        title: "Hubo un error al se actualizar la ubicación",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [message, isSuccess, isError, toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(locationUpdate({ id: formData.id, formData: formData })).then((result) => {
        if (locationUpdate.fulfilled.match(result)) {
          console.log("Location atualizada com sucesso:", result.payload);
        } else if (locationUpdate.rejected.match(result)) {
          console.error("Erro ao atualizar a localização:", result.error.message);
        }
      });
  };

  return (
    <Box p="4%">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          
        <FormControl>
            <FormLabel> UDPATE LOCATION: </FormLabel>
            <Input type="text" name="title" value={formData.title} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>ID:</FormLabel>
            <Input type="number" name="id" value={formData.id} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Meeting room:</FormLabel>
            <Input type="number" name="meeting_room" value={formData.meeting_room} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Description:</FormLabel>
            <Textarea type="text" name="description" value={formData.description} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Capacity:</FormLabel>
            <Input type="number" name="capacity" value={formData.capacity} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Facility ID:</FormLabel>
            <Input type="number" name="facility_id" value={formData.facility_id} onChange={handleChange} />
          </FormControl>

          <Button mt={10} colorScheme="blue" type="submit">
            Update Location
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default UpdateLocation;


