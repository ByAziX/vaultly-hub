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
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        color: mode === "light" ? "#000000" : "#ffffff",
        padding: 0,
        margin: 0,
        backgroundImage:
          mode === "light"
            ? "url('/background-blanc.png')" // Fond unique en mode clair
            : "url('/background-noir.png')", // Pas de fond supplémentaire en mode sombre
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        {/* Section Gauche : Texte et Boutons */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: isMobile ? "center" : "flex-start",
            height: "100vh",
            padding: isMobile ? "2rem" : "4rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "3rem" : "6rem",
              lineHeight: 1.2,
              textAlign: isMobile ? "center" : "left",
              marginBottom: "1.5rem",
              marginLeft: isMobile ? "0" : "5%",
            }}
          >
            Ready to make{" "}
            <span
              style={{
                display: "inline-block",
                color: "#6a98c9",
                fontSize: isMobile ? "3.5rem" : "6.5rem",
              }}
            >
              some noise?
            </span>
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? "1rem" : "2rem",
              alignItems: isMobile ? "center" : "flex-start",
              marginLeft: isMobile ? "0" : "5%",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: mode === "light" ? "#000000" : "#ffffff",
                color: mode === "light" ? "#000000" : "#ffffff",
                fontSize: isMobile ? "0.9rem" : "1.2rem",
                padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                "&:hover": {
                  borderColor: "#00d4ff",
                  color: "#00d4ff",
                },
              }}
            >
              <span>Explore</span>
              <KeyboardArrowDownIcon sx={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }} />
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: mode === "light" ? "#000000" : "#ffffff",
                color: mode === "light" ? "#000000" : "#ffffff",
                fontSize: isMobile ? "0.9rem" : "1.2rem",
                padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                "&:hover": { borderColor: "#00d4ff", color: "#00d4ff" },
              }}
            >
              <span>Marketplace</span>
              <ArrowForwardIcon sx={{ fontSize: isMobile ? "1.2rem" : "1.5rem" }} />
            </Button>
          </Box>
        </Grid>

        {/* Section Droite : Vidéo et Robot */}
        {!isMobile && (
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              position: "relative",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            {/* Vidéo en mode sombre */}
            {mode === "dark" && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
                >
                  <source src="/robot-background-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            )}

            {/* Robot avec animation */}
            <Box
  sx={{
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translate(50%, -50%)",
    zIndex: 1,
    animation: `
      float 3s ease-in-out infinite${
        mode === "dark" ? ", pulseBrightness 10s cubic-bezier(0.33, 0.33, 0.66, 0.66) infinite 1s" : ""
      }`, // pulseBrightness ajouté uniquement en mode sombre
  }}
>
  <Image
    src="/Vaultly.svg"
    alt="Robot"
    width={500}
    height={500}
    style={{ objectFit: "contain" }}
  />
</Box>

{/* Animation CSS */}
<style jsx>{`
  @keyframes float {
    0% {
      transform: translate(50%, -50%) translateY(0);
    }
    50% {
      transform: translate(50%, -50%) translateY(-10px);
    }
    100% {
      transform: translate(50%, -50%) translateY(0);
    }
  }

  @keyframes pulseBrightness {
    0% {
      filter: brightness(1);
    }
    50% {
      filter: brightness(2); /* Augmentation de la luminosité */
    }
    100% {
      filter: brightness(1); /* Retour à la luminosité initiale */
    }
  }
`}</style>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
