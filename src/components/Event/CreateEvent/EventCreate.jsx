import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEvent } from "../../../features/events/eventsSlice";

import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";

function EventCreate() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        location_id: "",
        dateTime: "",
        duration_min: "",
        type: "",
        banner: "",
        description: "",
        title: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createEvent(formData)).then((result) => {
            if (createEvent.fulfilled.match(result)) {
                console.log("Evento creado exitosamente:", result.payload);
            } else if (createEvent.rejected.match(result)) {
                console.error("Error al crear el evento:", result.error.message);
            }
        });
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl>
                        <FormLabel>Location ID</FormLabel>
                        <Input type="number" name="location_id" value={formData.location_id} onChange={handleChange} />
                    </FormControl>
                    {/* Resto de campos de formulario aquí */}
                    <Button type="submit">Create Event</Button>
                </VStack>
            </form>
        </Box>
    );
}

export default EventCreate;
