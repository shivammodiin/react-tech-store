import React from "react";
import loadingGif from "../images/loading-arrow.gif";

function Loading() {
  return (
    <div className="loading text-center" >
      <h4>Products are loading...</h4>
      <img src={loadingGif} alt="Loading Gif" />
    </div>
  );
}

export default Loading;
