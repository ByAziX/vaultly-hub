"use client";

import React from "react";
import { Box, Typography, Button, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useThemeContext } from "@/app/contexts/ThemeContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function HeroSection() {
  const { mode } = useThemeContext(); // Accéder au mode clair ou sombre
  const isMobile = useMediaQuery("(max-width:600px)"); // Vérifie si l'écran est de taille mobile

  return (
    <Box
      sx={{
        position: "relative", // Permet de superposer les éléments
        minHeight: "100vh", // Prend tout l'écran
        overflow: "hidden", // Cache les débordements
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: mode === "light" ? "#000000" : "#ffffff", // Couleur du texte
        padding: 4,
      }}
    >
      {/* Arrière-plan */}
      {isMobile ? (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              mode === "dark"
                ? "url('/background-noir.png')" // Image pour le fond noir
                : "url('/background-blanc.png')", // Image pour le fond blanc
            backgroundSize: "cover", // Recouvre tout le conteneur
            backgroundPosition: "center", // Centre l'image
            backgroundRepeat: "no-repeat", // Pas de répétition
            zIndex: -1, // Place l'image derrière les autres éléments
          }}
        />
      ) : (
        mode === "dark" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover", // Recouvre tout le conteneur
              zIndex: -1, // Place la vidéo derrière les autres éléments
            }}
          >
            <source src="/background-dark-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url('/background-blanc.png')", // Image pour le mode clair
              backgroundSize: "cover", // Recouvre tout le conteneur
              backgroundPosition: "center", // Centre l'image
              backgroundRepeat: "no-repeat", // Pas de répétition
              zIndex: -1, // Place l'image derrière les autres éléments
            }}
          />
        )
      )}

      {/* Contenu */}
      <Grid container spacing={2} alignItems="center">
        {/* Section Gauche : Texte et Boutons */}
        <Grid item xs={12} md={6}>
          {/* Texte principal */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "3.5rem" : "6rem", // Taille réduite sur mobile
              lineHeight: 1.2,
              marginBottom: 4,
            }}
          >
            Ready to make <br />
            <span style={{ color: "#6a98c9", fontSize: isMobile ? "4rem" : "6.5rem" }}>some noise?</span>
          </Typography>

          {/* Boutons */}
          <Box display="flex" gap={3} flexDirection={isMobile ? "column" : "row"}>
            <Button
              variant="outlined"
              sx={{
                borderColor: mode === "light" ? "#000000" : "#ffffff",
                color: mode === "light" ? "#000000" : "#ffffff",
                fontSize: isMobile ? "1rem" : "1.5rem", // Taille réduite sur mobile
                padding: isMobile ? "10px 20px" : "15px 30px", // Padding réduit sur mobile
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                "&:hover": {
                  borderColor: "#00d4ff",
                  color: "#00d4ff",
                },
              }}
            >
              <span>Explore</span>
              <KeyboardArrowDownIcon sx={{ fontSize: isMobile ? "1.5rem" : "2rem" }} /> {/* Taille réduite sur mobile */}
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: mode === "light" ? "#000000" : "#ffffff",
                color: mode === "light" ? "#000000" : "#ffffff",
                fontSize: isMobile ? "1rem" : "1.5rem", // Taille réduite sur mobile
                padding: isMobile ? "10px 20px" : "15px 30px", // Padding réduit sur mobile
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                "&:hover": { borderColor: "#00d4ff", color: "#00d4ff" },
              }}
            >
              <span>Marketplace</span>
              <ArrowForwardIcon sx={{ fontSize: isMobile ? "1.5rem" : "2rem" }} /> {/* Taille réduite sur mobile */}
            </Button>
          </Box>
        </Grid>

        {/* Section Droite : Image du Robot */}
        {!isMobile && ( // Masquer le robot sur mobile
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: "45%", // Décalage du robot
                bottom: "-100px", // Ajustement vertical
                transform: "scale(1.5)", // Agrandissement du robot
              }}
            >
              <Image
                src="/Vaultly.svg" // Remplacez par l'image du robot
                alt="Robot"
                width={400}
                height={400}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
