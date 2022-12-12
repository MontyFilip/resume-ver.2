import React from 'react';
import Hero from '../../View/Hero/Hero';
import { Box } from '../Home/Home';
import { ContactData } from '../../../DB/data';

const Contact = () => {
  return (
    <Box>
      <Hero
        title={ContactData.title}
        text={ContactData.mail}
        text2={ContactData.phone}
      />
    </Box>
  );
};

export default Contact;
