"use client";

import React from "react";
import { Box } from "@mui/material";
import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function ProfessionalSeparator() {
  const { mode } = useThemeContext(); // Accéder au mode clair ou sombre

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: mode === "light" ? "#ffffff" : "#000000", // Fond de la ligne
        overflow: "visible", // Permet au robot de dépasser
      }}
    >
      {/* Ligne gauche */}
      <Box
        sx={{
          height: "2px",
          width: "40%",
          background: `linear-gradient(to right, ${
            mode === "light" ? "#6a98c9" : "#fff"
          }, transparent)`,
        }}
      />

      

      {/* Ligne droite */}
      <Box
        sx={{
          height: "2px",
          width: "40%",
          background: `linear-gradient(to left, ${
            mode === "light" ? "#6a98c9" : "#fff"
          }, transparent)`,
        }}
      />
    </Box>
  );
}
