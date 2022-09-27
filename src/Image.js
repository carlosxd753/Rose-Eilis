import React, { useState, useEffect } from "react";

export const Image = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/albums?limit=50&market=US", {
      headers: {
        Authorization:
          "Bearer BQDLgvAph7xVIta0aT2qehhj22-SO4Vh2S4HqtfrfkLqG3YEZqjL58eUNZMTPEW3h59vf69JTzqWu-pTVEQ17t511_BPC7_kDAa7jbk_6lQCrU_fnqC7cpC_TvJmjmjUz7LeRUEwxqAbNKRxMYb43eyIFUL0nyZgylYkwM26T5PMAPM6VD0VhBn4IDFEDkC-JyaTVcMY2A",
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
