
import  EditCategoriesComponentForm from "@/components/dashboardadmin/EditCategoriesComponentForm";

async function getCategoryById(id)  {
  try {
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}`,{
      method: "GET",
      cache: "no-cache",      
    });   
   
    if(!res.ok){
      throw new Error('Error al encontrar la categoria');
    } 
   const datos = await res.json() // Gardar datos en constante para probar los datos por consola
   console.log(datos); //probar los datos pos consola
   return datos;

   } catch (error) {
    console.log(error);
  }
};

export default async function EditCategoria({params}) {
  const id  = params.id;
  const category = await getCategoryById(id);
  
  /* if(!category){
    return <h1> Cargando</h1>  
  } */
   return (
       <>
        <EditCategoriesComponentForm id={id} name={category.name} image={category.image} />
        <br />
        <hr />
        <br />
        <h1>Informacion de la Categoria actual</h1>
         <h1>Identificador: {id}</h1>  
         <h2>Nombre: {category.name}</h2>
         <h2>Imagen: {category.image}</h2>
       </>

  );
};

/* PASO 1
funcion para hacer la prueba pasar como paramentro el id al componente
hijo EditarCategoriesCompoenentFomr
export default async function pageEditCategoria({params}) { //pasar paramento id
  const {id} = params; // destructurar del arreglo y sacar id
  return (
    <>
        <h1>Pagina para editar</h1>
        <EditCategoriesComponentForm id={id}/> // mostrar id en el formulario
    </>
  )
} */
