import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <Box
          sx={{
            bgcolor: "red",
            color: "white",
            textAlign: "center",
            p: 1,
            // position: "fixed", // Position the footer at the bottom
            bottom: 0, // Ensure it stays at the bottom
            width: "100%", // Full width
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
            &copy;All Rights Reserved
          </Typography>
        </Box>
      </div>
    </div>
  );
}

export default Footer;
