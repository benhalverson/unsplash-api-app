import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import ImageList from "../components/imageList";
import Header from "../components/header";

const Home: NextPage = () => {
  const [images, setImages] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const getPhotos = async () => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
      params: {
        query: `${search}`,
      },
    });
    const photos = response.data.results;
    if (photos) {
      setImages(photos);
    }
    return photos;
  };

  useEffect(() => {
    getPhotos();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: any) => {
    setSearch(e.target.value);
    getPhotos();
  };

  return (
    <div>
      <Header />
      <input type="text" value={search} onChange={handleChange} />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
      <ImageList images={images} />
    </div>
  );
};

export default Home;
