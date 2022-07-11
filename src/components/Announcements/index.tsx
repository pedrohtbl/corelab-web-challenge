import { useLoading } from "../../providers/LoadingProvider";
import { IVehicle } from "../../types/Vehicle";
import Card, { ICard } from "../Card"
import { CustomUl, Div } from "./style"

interface IAnnouncements {
  products: IVehicle[];
  title: string;
  type?: string; 
}

const Announcements = ({products, type, title}: IAnnouncements) =>{
  return(
    <>
      <Div>
        <h1>{title}</h1>
      </Div>
      <CustomUl>
        {products.length === 0 ?  
        <p>Nothing here...</p> 
        : 
        products.map( product => <Card type={type} product={product} key={product.id}/>)}
      </CustomUl>
    </>
  )
}

export default Announcements