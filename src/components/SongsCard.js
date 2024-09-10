import React from "react";
import Rating from "./Rating";
import PropTypes from "prop-types";

const songCard = ({ data }) => {
  const { thumb, title, artist, rating } = data;
  return (
    <div className="song-card">
      <img src={thumb} alt={title} className="st-dhumb" />
      <div className="song-title">
        {title} by {artist}
      </div>
      <Rating stars={rating} />
    </div>
  );
};

songCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
  }),
};

export default songCard;
