'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditCategoriesComponentForm({ id, name, image }) {
  const [newId, setNewId] = useState(id);
  const [newName, setNewName] = useState(name);
  const [newImage, setNewImage] = useState(image);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ id: newId, name: newName, image: newImage }),
      });

      if (!res.ok) {
        throw new Error("Fallo al encontrar la ruta");
      }

      router.refresh();
      router.push("/dashboardadmin/vercategorias");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="font-bold py-10 text-2xl text-center">Editar Categoria</h1>
      <main className="border p-5 w-2/5 mx-auto mt-8 rounded-md shadow-2xl">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              ID
            </label>
            <input
              onChange={(e) => setNewId(e.target.value)}
              value={newId}
              type="text"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 ,dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre
            </label>
            <input
              onChange={(e) => setNewName(e.target.value)}
              value={newName}
              type="text"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Imagen
            </label>
            <input
              onChange={(e) => setNewImage(e.target.value)}
              value={newImage}
              type="text"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <button
            type="submit"
            className="ext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Actualizar
          </button>
          
          <button
            type="submit"
            className="m-4 ext-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
            Cancelar
          </button>
        </form>
      </main>
    </>
  );
}

/*  PASO 1
// funcion para hacer la prueba de recibir el id como paramentro 
desde el page de editar categoria [id]y mostrarlo en pantalla
export default function EditCategoriesComponentForm({ id}) {
  return (
    <div>EditCategoriesCompoenent Formulario {id}</div>
     )
} */

