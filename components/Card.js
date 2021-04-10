import { useState, useEffect } from "react";

export default function Card({ data }) {
  const [cardImageUrl, setCardImageUrl] = useState();

  const getCardImage = async () => {
    const response = await fetch(
      "https://api.pokemontcg.io/v2/cards/" + data.id,
      {
        headers: {
          "X-Api-Key": process.env.POKEMONTCG_API_KEY,
        },
      }
    );
    const cardData = await response.json();
    setCardImageUrl(cardData.data.images.small);
  };

  useEffect(() => {
    getCardImage();
  }, []);

  return (
    <li className="p-4">
      <img
        className={`rounded ${
          data.owned === false &&
          "opacity-25 hover:opacity-50 transition duration-300"
        }`}
        src={cardImageUrl}
        alt={data.name}
      />
    </li>
  );
}
