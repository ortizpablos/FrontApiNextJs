import GetCategoriesComponent from "@/components/dashboardadmin/GetCategoriesComponent";
import PostCategoriesComponent from "@/components/dashboardadmin/PostCategoriesComponent";


export default function pageCategorias() {
  return (
    <>
              <main className="flex w-full h-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
            
            <section className="w-1/2 m-7 mx-auto h-screen">
                <PostCategoriesComponent />
            </section>
        </main>

    </>
  )
}
