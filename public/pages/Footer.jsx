


import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "red",
        color: "white",
        textAlign: "center",
        p: 1,
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <Box
        sx={{
          my: 2,
          "& svg": {
            fontSize: "40px",
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: "black",
            transform: "translateX(5px)",
            transition: "all 400ms",
          },
        }}
      >
        <a
          href="https://www.instagram.com/spicehouse2024/?igsh=MWY1MHd3ZnNmbXh5cQ%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100088088538387"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>
      </Box>
      <Typography
        variant="h6"
        sx={{
          "@media (max-width: 600px)": {
            fontSize: "1rem",
          },
        }}
      >
        &copy; All Rights Reserved
      </Typography>
    </Box>
  );
}

export default Footer;

