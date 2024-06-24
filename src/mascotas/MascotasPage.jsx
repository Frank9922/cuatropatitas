import { Spinner } from "@chakra-ui/react";
import { useGetMascotasQuery } from "../api"
import { HomeLayout } from "../page/HomeLayout";

export const MascotasPage = () => {

  const { isLoading, data} = useGetMascotasQuery();


  return (
    <HomeLayout>
      <div>
        <h1>MascotasPage</h1>
        {
          isLoading ? <Spinner /> : JSON.stringify(data)
        }
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et nam incidunt, corporis commodi id magni, quidem delectus quam voluptatibus ea rerum totam porro repellendus, at architecto cum tenetur sed.</p>
      
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et nam incidunt, corporis commodi id magni, quidem delectus quam voluptatibus ea rerum totam porro repellendus, at architecto cum tenetur sed.</p>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et nam incidunt, corporis commodi id magni, quidem delectus quam voluptatibus ea rerum totam porro repellendus, at architecto cum tenetur sed.</p>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et nam incidunt, corporis commodi id magni, quidem delectus quam voluptatibus ea rerum totam porro repellendus, at architecto cum tenetur sed.</p>
      </div>

    </HomeLayout>
  )
}
