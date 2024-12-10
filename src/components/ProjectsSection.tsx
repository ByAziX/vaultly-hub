"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, Avatar } from "@mui/material";
import { useThemeContext } from "@/app/contexts/ThemeContext";

export default function ProjectsSection() {
  const { mode } = useThemeContext(); // Accéder au mode clair ou sombre

  // Exemple de données de projets
  const projects = [
    {
      title: "Marketplace",
      description: "Discover and explore a variety of products and services.",
      logo: "/marketplace-icon.svg",
      link: "/marketplace",
    },
    {
      title: "Vault",
      description: "Secure your data with our cutting-edge vault technology.",
      logo: "/vault-icon.svg",
      link: "/vault",
    },
    {
      title: "Analytics",
      description: "Track and analyze your data with powerful tools.",
      logo: "/analytics-icon.svg",
      link: "/analytics",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: mode === "light" ? "#f9f9f9" : "#121212",
        color: mode === "light" ? "#000000" : "#ffffff",
        padding: "4rem 2rem",
        minHeight: "100vh",
      }}
    >
      {/* Titre de la section */}
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "3rem",
        }}
      >
        Explore Our Features
      </Typography>

      {/* Grille de projets */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: mode === "light" ? "#ffffff" : "#1e1e1e",
                color: mode === "light" ? "#000000" : "#ffffff",
                borderRadius: "16px",
                boxShadow: mode === "light" ? "0 6px 12px rgba(0, 0, 0, 0.1)" : "0 6px 12px rgba(255, 255, 255, 0.1)",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                },
              }}
            >
              {/* Logo */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1.5rem",
                  background: `linear-gradient(135deg, #00d4ff, ${mode === "light" ? "#ffffff" : "#2c2c2c"})`,
                }}
              >
                <Avatar
                  src={project.logo}
                  alt={project.title}
                  sx={{
                    width: 70,
                    height: 70,
                    border: "4px solid #ffffff",
                  }}
                />
              </Box>

              {/* Contenu de la carte */}
              <CardContent
                sx={{
                  textAlign: "center",
                  padding: "1.5rem",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", marginBottom: "1rem", textTransform: "uppercase" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: mode === "light" ? "#666" : "#bbb" }}>
                  {project.description}
                </Typography>
              </CardContent>

              {/* Actions de la carte */}
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "1rem 1.5rem",
                  backgroundColor: mode === "light" ? "#f5f5f5" : "#2a2a2a",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: mode === "light" ? "#000000" : "#ffffff",
                    color: mode === "light" ? "#000000" : "#ffffff",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": { borderColor: "#00d4ff", color: "#00d4ff" },
                  }}
                  href={project.link}
                >
                  En savoir +
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#00d4ff",
                    color: "#ffffff",
                    textTransform: "none",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#00a6d6" },
                  }}
                  href={project.link}
                >
                  Explorer
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
