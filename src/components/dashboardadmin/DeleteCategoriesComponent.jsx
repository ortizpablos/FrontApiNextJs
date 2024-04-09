"use client";

import { useRouter } from "next/navigation";

export default function DeleteCategoriesComponent({id}) {
    //console.log(Productid);
    const router = useRouter();

    const EliminarCategory = async () => {
        const confirmed = confirm("Estas Seguro?");
        
        if (confirmed) { // `/api/products?id=${id}`
            const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`, {
                method: "DELETE",                
            });

            //console.log(res);
            if (res.ok) {
                router.refresh();
            }
        }
    };

  return (
        <>
            <button onClick={EliminarCategory} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Eliminar</button>
        </>
  )
}

