import React, { useEffect, useState } from "react";
import "./Information.css";
import { useCard } from "../../context/cardContext";

const Information = () => {
  const { selected, setSelected } = useCard();
  const [page, setPage] = useState<number>(1);

  const fetchImages = async () => {
    const images = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=9`
    );
    const response = await images.json();
    const urls = response.map((item: { download_url: string; }) => item.download_url);    
    setSelected({ ...selected, images : urls })

    setPage((page) => page + 1);
  };

  useEffect(() => {
    const interval = setInterval(fetchImages, 10000);
    return () => clearInterval(interval);
  });

  return (
    <div className="info_container">
      <h3 className="h3">{selected.name}</h3>
      <p className="p">{selected.description}</p>

      <div className="grid-container">
        {selected &&
          selected.images &&
          selected.images.map((image: any, index: any) => (
            <div key={index} className="grid-item">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="grid-image"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Information;
