import React from 'react';
import { Box, Grid, GridItem, Card, Text } from '@chakra-ui/react';
import BarChart from './Charts/BarChart/BarChart';
import PieChart from './Charts/PieChart/PieChart';
import LineChart from './Charts/LineChart/LineChart';

import './Dashboard.scss';
import ChartEvent from './Charts/ChartEvent/ChartEvent';
import Attendees from './Charts/Attendees/Attendees.JSX';


const Dashboard = () => {
  return (
    <div>
      <Box className="dashboard-container" bg="#e6dfcf" >
          <ChartEvent/>
          <Attendees />
        <Grid templateColumns="repeat(1, 1fr)" gap={4} width="100%">
          <GridItem>
            <Card title="Bar Chart" borderRadius={5} marginTop={2} marginLeft={5} marginRight={5}>
              <LineChart />
            </Card>
          </GridItem>
          <GridItem>
            <Card title="Pie Chart" borderRadius={5} marginTop={1} marginLeft={5} marginRight={5}>
              <PieChart/>
            </Card>
          </GridItem>
          <GridItem>
            <Card title="Bar Chart" borderRadius={5} marginTop={1} marginLeft={5} marginRight={5}>
              <BarChart />
            </Card>
          </GridItem>
        </Grid>
  
      </Box>
    </div>
  );
};

export default Dashboard;
