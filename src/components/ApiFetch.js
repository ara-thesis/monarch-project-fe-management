import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function FetchApi() {
  useEffect(() => {
    fetchData();
  }, []);

  const [posts, setPosts] = useState([]);
  // const posts;
  const fetchData = async () => {
    const { data } = await axios.get(
      // "https://jsonplaceholder.typicode.com/posts"
      "http://172.22.56.135:8000/api/news"
    );
    console.log("fetch", data);
    if (data.data) setPosts(data.data);
  };
}

export default FetchApi;
