import "../css/ratingMovie.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function RatingMovie({ setRating, value }) {
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend" className="ratingTypography">
        Filtrar por rating:
        <Rating
          name="simple-controlled"
          value={value}
          className="ratingStars"
          onChange={(event, rating) => {
            setRating(rating);
          }}
        />
      </Typography>
    </Box>
  );
}

export default RatingMovie;
