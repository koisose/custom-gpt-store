import React from 'react';
import { Box } from '@mui/joy';

interface CenterLayoutProps {
  children: React.ReactNode;
}

export const CenterLayout: React.FC<CenterLayoutProps> = ({ children }) => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  }} >
    {children}
  </Box>
  );