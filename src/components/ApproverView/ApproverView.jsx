import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Center, Heading, Image, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { BsCalendarDate } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { MdMapsHomeWork } from 'react-icons/md';
import { Avatar } from '@chakra-ui/react';
import logo from '../../assets/images/Logotipo.png';
import opendays from '../../assets/images/opendays.png';

const ApproverView = () => {
  const userConnected = useSelector((state) => state.auth.userConnected);
  const [tabIndex, setTabIndex] = useState(0);

  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };

  return (
    <Center as="section" bg="gray.100" h="100vh">
      <Box maxW="430px" bg="#e6dfcf" p="6">
        <Box display="flex" alignItems="center" justifyContent="space-between" bg="#004368" p={1} borderRadius="xl">
          <Image src={logo} />
          <div style={{ flex: 1 }}></div>
          <Avatar name={userConnected?.name} src={userConnected?.avatar} size="sm" />
        </Box>
        <Image src={opendays} alt="openday" borderRadius="xl" objectFit="cover" mx="auto" mt={4} />
        <Heading my="4" size="lg" fontFamily="Nocturne-Black" color="#004368">
          Open Day Masters
        </Heading>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BsCalendarDate size={25} color="#cb7862" />
            <span style={{ marginLeft: '8px' }}>19/10/2023</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BiTimeFive size={25} color="#cb7862" />
            <span style={{ marginRight: '8px' }}>18:00 hrs</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <GoLocation size={25} color="#cb7862" />
            <span style={{ marginLeft: '8px' }}>EDEM / Online </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MdMapsHomeWork size={25} color="#cb7862" />
            <span style={{ marginLeft: '8px' }}>Planta 2, sala reuniones 207 </span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Center my="8" height="20px">
            <Button backgroundColor="white" color="#cb7862" _hover={{ backgroundColor: '#004368', color: 'white' }}>
              Rechazar
            </Button>
          </Center>
          <div>
            <Center my="8" height="20px">
              <Button backgroundColor="#cb7862" color="white" _hover={{ backgroundColor: '#004368', color: 'white' }}>
                Aprobar
              </Button>
            </Center>
          </div>
        </div>
        <Box>
          <input type="range" min="0" max="3" value={tabIndex} style={{ width: '100%', height: '40px' }} onChange={handleSliderChange} />
          <Tabs index={tabIndex} onChange={handleTabsChange}>
            <TabList>
              <Tab>Aprobación</Tab>
              <Tab>Difusión</Tab>
              <Tab>Inscritos</Tab>
              <Tab>Recursos</Tab>
            </TabList>
            <TabPanels>
              <TabPanel backgroundColor="white">
                <p>La aprobación de un evento en la empresa EDEM es un proceso fundamental para garantizar que cada actividad planificada cumpla con los estándares de calidad y excelencia que representan nuestra institución. Nuestro compromiso con la excelencia se refleja en cada etapa del proceso de aprobación. Una vez que un evento recibe la aprobación de EDEM, podemos proceder con confianza en su planificación y ejecución. Nos enorgullece ofrecer eventos que fomentan la conexión, el aprendizaje y el crecimiento en un ambiente de calidad y profesionalismo.</p>
              </TabPanel>
              <TabPanel backgroundColor="white">
                <p>La difusión de eventos en EDEM es un componente esencial de nuestra misión de compartir conocimientos, promover el aprendizaje y fomentar la colaboración en la comunidad empresarial. Nos comprometemos a difundir eventos de calidad que aporten valor a nuestros participantes. Nuestra estrategia de difusión se centra en llegar a un público diverso y relevante. Utilizamos diversos canales de comunicación, como redes sociales, boletines informativos, invitaciones personalizadas y alianzas estratégicas, para asegurarnos de que nuestro mensaje llegue a la audiencia adecuada.</p>
              </TabPanel>
              <TabPanel backgroundColor="white">
                <p>Los inscritos en nuestros eventos son el corazón y la fuerza impulsora de la comunidad de EDEM. Valoramos profundamente a cada individuo que decide unirse a nosotros en nuestros eventos, ya que son ellos quienes enriquecen nuestras actividades con sus conocimientos y experiencias únicas. En EDEM, creemos en la diversidad y la inclusión, y nos enorgullece contar con inscritos de diferentes perfiles, industrias y antecedentes. Esta diversidad enriquece las discusiones, fomenta la colaboración y brinda una perspectiva amplia en cada evento que organizamos. Nuestros inscritos son profesionales apasionados que contribuyen significativamente al éxito de nuestras actividades.</p>
              </TabPanel>
              <TabPanel backgroundColor="white">
                <p>Los recursos desempeñan un papel crucial en la organización y el éxito de los eventos en EDEM. Nuestra dedicación a brindar experiencias excepcionales a nuestros participantes requiere una planificación y gestión cuidadosa de recursos de todo tipo. Estamos comprometidos a garantizar la calidad en cada aspecto de nuestros eventos. Nuestras bibliotecas bien surtidas, laboratorios de última generación y espacios versátiles de aprendizaje son solo algunos ejemplos de los recursos físicos que ponemos a disposición de nuestros participantes. Además, contamos con un equipo dedicado y talentoso que trabaja incansablemente para que nuestros eventos sean memorables y enriquecedores.</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Center>
  );
};

export default ApproverView;
