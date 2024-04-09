"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PostCategoriesComponent() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    const router = useRouter();
 
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        try {
            const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ id, name, image}),
            });
            
            if (res.ok) {
                router.push("/dashboardadmin/vercategorias");
               
            } else {
                throw new Error("Fallo la Creacion de Prodcuto");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
      <>
        <h1 className="font-bold py-10 text-2xl text-center">Crear Categoria</h1>
        <main className="border p-5 w-4/5 mt-8 mx-auto rounded-md shadow-2xl ">
        
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ID</label>
            <input onChange={(e) => setId(e.target.value)}
                value={id} type="text" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
            <input onChange={(e) => setName(e.target.value)}
                value={name} type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Imagen</label>
            <input onChange={(e) => setImage(e.target.value)}
                value={image}  type="text" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>

                     
            <button
                type="submit" className="ext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Agregar
            </button>
        </form>
        </main>  
      </>
    )
  }
  