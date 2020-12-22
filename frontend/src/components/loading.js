import React from "react";
import loadingImg from '../static/loading_animation.svg'

const Loading = () => (
  <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;
