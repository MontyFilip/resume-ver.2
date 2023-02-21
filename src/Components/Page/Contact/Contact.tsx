import React from 'react';
import Hero from '../../View/Banner/Banner';
import { Box } from '../Home/Home';
import { ContactData } from '../../../DB/data';

const Contact: React.FC = () => {
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
