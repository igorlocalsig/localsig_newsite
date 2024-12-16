import React, { useState } from 'react';
import { Box, Typography, Tab, Tabs } from '@mui/material';
import Atoms from '../components/atoms/AtomsTab';
import Molecules from '../components/molecules/MoleculesTab';
import Organisms from '../components/organisms/OrganismsTab';

type Category = 'atoms' | 'molecules' | 'organisms';

const Home: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('atoms');
  const [tabValue, setTabValue] = useState<number>(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    const category = ['atoms', 'molecules', 'organisms'][newValue];
    setSelectedCategory(category as Category);
  };

  const renderCategoryComponents = (): React.ReactNode => {
    switch (selectedCategory) {
      case 'atoms':
        return <Atoms />;
      case 'molecules':
        return <Molecules />;
      case 'organisms':
        return <Organisms />;
      default:
        return <div>Select a category</div>;
    }
  };

  return (
    <Box sx={{ fontFamily: 'Arial, sans-serif', padding: 2 }}>
      <Typography variant="h3" gutterBottom>
        Design Atômico
      </Typography>
      
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="category tabs" sx={{ marginBottom: 3 }}>
        <Tab label="Átomos" />
        <Tab label="Moléculas" />
        <Tab label="Organismos" />
      </Tabs>
      
      <Box>
        <Typography variant="h4" gutterBottom>
          {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Components
        </Typography>
        {renderCategoryComponents()}
      </Box>
    </Box>
  );
};

export default Home;
