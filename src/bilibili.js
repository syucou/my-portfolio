import React from "react";
import PropTypes from "prop-types";

//youtube方式を参考にビリビリ動画を入れた
const BilibiliEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="640"
      height="480"
      src={`https://player.bilibili.com/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded bilibili"
    />
  </div>
);

BilibiliEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default BilibiliEmbed;