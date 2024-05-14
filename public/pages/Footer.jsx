
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  return (
    <>
      <Box sx={{ textAlign: "center", bgcolor: "red", color: "white", p: 3 }}>
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
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
          variant="h5"
          sx={{
            "@media (max-width: 600px)": {
              fontSize: "1rem",
            },
          }}
        >
          &copy;All Rights Reserved
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
