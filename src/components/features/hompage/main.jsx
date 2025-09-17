"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/ui/card";

const Main = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/fetchProducts");
      setData(res.data.data.data);
    }

    fetchData();
  }, []);
  return (
    <div className="p-4 flex gap-2 flex-wrap justify-center">
      {data &&
        data.map((item, i) => {
          return <Card key={i} item={item} />;
        })}
    </div>
  );
};

export default Main;
