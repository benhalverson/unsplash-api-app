import type { NextPage } from "next";
import useSwr from "swr";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../components/header";
import loader from "../components/loader.svg";
import axios from "axios";
import ImageList from "../components/imageList";
import SearchBar from "../components/searchBar";

const Home: NextPage = () => {
  const fetcher = () =>
    axios
      .get("https://api.unsplash.com/search/photos", {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
        },
        params: {
          query: `${search}`,
        },
      })
      .then((results) => results.data)
      .catch((e) => console.log(e));

  const [images, setImages] = useState<string[]>([]);
  const [search, setSearch] = useState("dogs");
  const { data } = useSwr("/", fetcher);

  useEffect(() => {
    if (data) {
      setImages(data.results);
    }
  }, [data]);
  return (
    <div>
      <Header />
      {/* <SearchBar search={search} onSubmit={onSubmit} onChange={handleChange} /> */}
      <ImageList images={images} />
    </div>
  );
};

export default Home;
