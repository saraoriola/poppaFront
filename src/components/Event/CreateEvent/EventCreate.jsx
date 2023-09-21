import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEvent } from "../../../features/events/eventsSlice";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";
import "./EventCreate.scss";

function EventCreate() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        location_id: "",
        dateTime: new Date(),
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

    const handleDateChange = (date) => {
        setFormData({
            ...formData,
            dateTime: date,
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
        <Box p="5%">
            <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                    <FormControl>
                        <FormLabel>Título</FormLabel>
                        <Input type="text" name="title" value={formData.title} onChange={handleChange} />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Fecha y Hora</FormLabel>
                        <Datetime inputProps={{ name: "dateTime", className: "form-control" }} value={formData.dateTime} onChange={handleDateChange} dateFormat="DD/MM/YYYY" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Duration (minutes)</FormLabel>
                        <Input type="number" name="duration_min" value={formData.duration_min} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Type</FormLabel>
                        <Input type="text" name="type" value={formData.type} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Banner</FormLabel>
                        <Input type="file" name="banner" value={formData.banner} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Textarea name="description" value={formData.description} onChange={handleChange} />
                    </FormControl>

                    <FormControl>
                        <FormLabel>Location ID</FormLabel>
                        <Input type="number" name="location_id" value={formData.location_id} onChange={handleChange} />
                    </FormControl>

                    <Button type="submit">Create Event</Button>
                </VStack>
            </form>
        </Box>
    );
}

export default EventCreate;
