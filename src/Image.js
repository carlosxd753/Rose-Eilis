import React, { useState, useEffect } from "react";

export const Image = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/albums?limit=50&market=US", {
      headers: {
        Authorization:
          "Bearer BQAZizmpboeLCB-I4vdpfnxuEc3NTZuQkM93CvejPWDaVBwzqbM1YSWH97LeLaLQqCsCKFQBvxHL6pIsLezXbw4a1XNxLcevwz3nLnP9-EzKnW3oEQ3pe6dJZHPTyhfB_h4VGKxzNhEhOgIbFeqS_gJnYsPTbznJmwQ2v8v5CXkJXyW-l6PeWzwOWBai2WuYo5MHBV_K3A",
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
