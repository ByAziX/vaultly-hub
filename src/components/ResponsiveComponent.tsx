// src/components/ResponsiveComponent.tsx
"use client";

import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from '@mui/material';

export default function ResponsiveComponent() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Typography variant="h6">
      {isSmallScreen ? 'Petit écran détecté' : 'Grand écran détecté'}
    </Typography>
  );
}
