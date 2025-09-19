"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useParams } from "next/navigation";
import EditModal from "@/components/features/editProduct/editModal";

const Page = () => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState(null);
  const [isEdit,setIsEdit] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`/api/getById/${id}`);
        setData(res.data.message.data);
        console.log(res.data.message.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="p-4 relative flex items-center justify-center flex-col h-screen w-full">
      {isEdit && <EditModal data={data && data} setIsEdit={setIsEdit}/>}
      {data ? (
        <>
          <div className="w-full p-4 items-center flex gap-2 ">
            <Image
              width={400}
              height={400}
              alt="product image"
              className=" h-auto w-1/3 aspect-square "
              src={data.image}
            />
            <div className=" flex flex-col gap-4 w-2/3 p-4 ">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-medium">{data.name}</h1>
                <p className="text-lg">{data.quantity} pieces</p>
                <p className="text-2xl text-red-500">${data.price}</p>
              </div>

              <div className="flex *:text-white *:cursor-pointer *:active:scale-95 *:border *:w-30 *:h-12 *:rounded-lg  gap-2 w-full ">
                <button className=" bg-green-500 "
                onClick={()=>{
                  setIsEdit(true)
                }}
                >Edit</button>
                <button className="bg-red-500">Delete</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        "loading"
      )}
    </div>
  );
};

export default Page;
