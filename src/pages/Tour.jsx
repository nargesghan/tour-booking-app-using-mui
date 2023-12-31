import { Container, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import StandardImageList from "../components/ImageCollage";
import BasicAccordion from "../components/Accordian";
import Paper from "@mui/material/Paper";
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from "../components/Modal";

const Tour = () => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore The World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
        />
        <StandardImageList>Helloo</StandardImageList>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginY={3}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          voluptates rem quos delectus debitis earum modi, ipsum veritatis.
          Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
          omnis reprehenderit blanditiis quis incidunt minima voluptatibus illum
          quam corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Exercitationem officiis commodi beatae
          animi incidunt necessitatibus aut provident ad ex. Saepe!
        </Typography>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently asked questions.
        </Typography>
        <BasicAccordion></BasicAccordion>
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
        <BasicModal/>
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
