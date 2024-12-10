"use client";

import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
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
            mode === "light" ? "#ffffff" : "#fff"
          }, transparent)`,
        }}
      />

      {/* Robot statique chevauchant les deux sections */}
      <Box
        sx={{
          position: "absolute",
          top: "-40px", // Décalage pour chevaucher les deux sections
          width: "80px",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2, // Au-dessus des lignes
        }}
      >
        <Image
          src="/Vaultly.svg" // Remplacez par votre image de robot
          alt="Robot"
          width={80}
          height={80}
          style={{ objectFit: "contain" }}
        />
      </Box>

      {/* Ligne droite */}
      <Box
        sx={{
          height: "2px",
          width: "40%",
          background: `linear-gradient(to left, ${
            mode === "light" ? "#ffffff" : "#fff"
          }, transparent)`,
        }}
      />
    </Box>
  );
}
