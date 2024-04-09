import Link from "next/link";
import DeleteCategoriesComponent from "./DeleteCategoriesComponent";

const getCategories = async () => {
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories", { // conectar a la API Posts
            cache: "no-store",    // para que no almacene datos en cache
      });
  
      if (!res.ok) { // confirmar la coneccion a la API
        throw new Error("Fallo la Busqueda de Posts"); // mensaje de error
       }
  
      return res.json(); 
    } catch (error) {
      console.log("Error al cargar posts: ", error); 
    }
  }

export default async function GetCategoriesComponent() {
     const categories = await getCategories();
    //console.log(hoteles);
    return (
      <>
          {/* <h1 className="text-center">HOTEL</h1> */}
          <div className="text-right">
              <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" href={"/dashboardadmin/crearcategorias"}>
                Agregar Categoria
              </Link>  
          </div>
          <br />
          <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" className="px-6 py-3">ID</th>
                          <th scope="col" className="px-6 py-3">NOMBRE</th>
                          <th scope="col" className="px-6 py-3">IMAGEN</th>
                          <th scope="col" className="px-6 py-3">ACCIONES</th>
                          
                        
                      </tr>
                  </thead>
                  <tbody>
                  {
                    categories?.map((category) => (
                    <tr key={category.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> {category.id}</td>
                    <td className="px-6 py-4">{category.name}</td>
                    <td className="px-6 py-4"> <img className="w-1/4" src={category.image} alt="" /> </td>
                    <td className="flex justify-center align-center ">
                    
                    <Link href={`/dashboardadmin/verdetallecategoria/${category.id}`}>
                    <button type="button" class="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Detalle</button>
                    </Link>
                    <Link href={`/dashboardadmin/editarcategoria/${category.id}`}>
                      <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Editar</button>
                    </Link>
                        <DeleteCategoriesComponent id={category.id}/>
                        </td>
                </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </>
    )
}
