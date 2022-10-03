import React, { useState, useEffect } from "react";

export const Image = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/albums?limit=50&market=US", {
      headers: {
        Authorization:
          "Bearer BQCQnbGlnkVkyEdG7QOCVBto3gbwkTkegYX3AgxJRQGPpTM7tBxyVDjyCq4BktAOIokjhJ0oIxwyWSBTOolwLkLKOKaEPCNNqQquYZVG2Yeb_EOdCxl7WDGrglV9J",
      },
    })
      .then((response) => response.json())
      .then((dog) => {
        setImageUrl(dog.items);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <h1> </h1>
      </div>
    );
  }

  return (
    <div className="App">
      {imageUrl.map((e) => (
        <img
          src={e.album.images[0].url}
          alt="Imagen de perrito aleatoria"
          height="250"
          width="250"
        />
      ))}
    </div>
  );
};
