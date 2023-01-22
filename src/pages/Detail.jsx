import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [url, setUrl] = useState("");

  const getUrl = async () => {
    const { data } = await axios.get(
      "https://youtube-music-downloader-mp3.p.rapidapi.com/get_download_url",
      {
        params: { id, ext: "mp3" },
        headers: {
          "X-RapidAPI-Key":
            "25b8e6962bmsh7f4a0f469c43c62p1d1fd7jsn7b2ce6e01b90",
          "X-RapidAPI-Host": "youtube-music-downloader-mp3.p.rapidapi.com",
        },
      }
    );
    console.log(data);
    location.href=`${data?.result?.download_url}`

    // setUrl(data?.result?.download_url);
  };

  // useEffect(() => {
  //   getUrl();
  // }, []);

  return (
    <div>
      <a
        target={"_blank"}
        href={url}
        className="text-white bg-blue-700 px-10 py-3 rounded shadow-sm"
      >
        download - {id}
      </a>
      <button
        onClick={() => getUrl()}
        className="text-white bg-blue-700 px-10 py-3 rounded shadow-sm"
      >
        download - {id}
      </button>
      <h1>We love Min Thiha</h1>
    </div>
  );
};

export default Detail;
