import React, { useState } from 'react';
import { Box, Text, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import locationService from "../../../features/location/locationService";

const GetLocationById = () => {
    const [location, setLocation] = useState(null); 
    const [loading, setLoading] = useState(false); 
    const [showMessage, setShowMessage] = useState(false); 
    const [locationId, setLocationId] = useState(''); 

    const handleSearch = async () => {
        setLoading(true);
        try {
            const locationData = await locationService.getLocationById(locationId);
            setLocation(locationData);
        } catch (error) {
            console.error("Something went wrong, try again:", error);
            setLocation(null);
            setShowMessage(true);
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
    };

    return (
        <Box p="4%">
        <FormControl>
            <FormLabel>Searching location by ID:</FormLabel>
            <Input type="text" value={locationId} onChange={(e) => setLocationId(e.target.value)} />
        </FormControl>
        <Button mt={10} colorScheme="blue" onClick={handleSearch} style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            Search Location
        </Button>
        {location ? (
            <Box mt={4}>
                <Text fontWeight="bold"> Details about the location:</Text>
                <Text>ID: {location.id}</Text>
                <Text>Facility: {location.facility_id}</Text>
                <Text>Room: {location.meeting_room}</Text>
                <Text>Capacity: {location.capacity}</Text>
                <Text>Description: {location.description}</Text>
            </Box>
        ) : (
            showMessage && (
                <div style={{ color: 'red' }}>
                    Location not found by ID
                </div>
            )
        )}
    </Box>
    );
};

export default GetLocationById;


