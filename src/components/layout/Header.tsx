"use client";

import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@mui/material";
import Image from "next/image";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function Header() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <AppBar
      position="absolute" // Navbar superposée à l'image de fond
      elevation={0}
      sx={{
        backgroundColor: "transparent", // Fond transparent
        color: mode === "light" ? "#000000" : "#ffffff", // Texte contrasté
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between", // Espace entre le logo et le bouton
          alignItems: "center",
          height: "100px", // Hauteur ajustée pour le Header
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            transform: "translate(20px, 30px)", // Décale le logo vers la droite et vers le bas
          }}
        >
          <Image
            src={mode === "light" ? "/Vaultly-logo-dark-star.svg" : "/Vaultly-logo-light-star.svg"} // Change selon le mode
            alt="Vaultly Hub Logo"
            width={190}
            height={190}
          />
        </Box>

        {/* Bouton de bascule */}
        <IconButton onClick={toggleTheme} sx={{ color: mode === "light" ? "#000000" : "#ffffff" }}>
          {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
