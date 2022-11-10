import React from "react";
import { Container, Wrapper, Image } from "./HomeStyles";
import image from "../../assets/banner.jpg";
import Category from "../../components/Category/Category";
import Typography from "../../components/Typography/Typography";
import { Config } from "./config";

function Home() {
   return (
      <>
         <Image alt="background Image" src={image} />
         {Config.length > 0 &&
            Config.map(({ name, Component, items }) => (
               <Container>
                  <Typography variant="h1" align="center">
                     {name}
                  </Typography>
                  <Wrapper>
                     {items && items.map((data) => <Component key={data.id} {...data} />)}
                  </Wrapper>
               </Container>
            ))}
      </>
   );
}

export default Home;
