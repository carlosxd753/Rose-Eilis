import React, { useState, useEffect } from "react";

export const Image = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/albums?limit=50&market=US", {
      headers: {
        Authorization:
          "Bearer BQCjtnJCajh0XUXN5xepmo1aj35oXVCrWkCAUU20_yR-8xVXZko-mbwD6SYQzo4yXxrVnN4kXFuLjEjXJ6UTJvblZBmw54xdO54EcAGTQFpxTIuh92klHo1kYZh0-T46Vs9AZruiJJPjsiJyI6n3_2BDfUHevKHE3i2dskxDCRKrAX9oU_oR9FEyXF5WAw_m9lgBvTbumQ",
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
