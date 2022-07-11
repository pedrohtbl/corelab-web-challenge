import { ReactNode, useState } from "react";
import { CustomLi } from "./style";
import { BsHeart, BsHeartFill } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"
import { IVehicle } from "../../types/Vehicle";
import api from "../../lib/api";
import { useLoading } from "../../providers/LoadingProvider";
import { toast } from "react-toastify";
import EditVehicleModal from "../EditVehicleModal";

export interface ICard {
  product: IVehicle;
  children?: ReactNode;
  type?: string;
}

const Card = ({product, type}: ICard) => {
  const [token, setToken] = useState<string>(sessionStorage.getItem("token") || "")
  const [userId, setUserId] = useState<string>(sessionStorage.getItem("id") || "")
  const [openModal, setOpenModal] = useState<boolean>(false)
  const {setIsLoading} = useLoading()

  const {id,name,model,description,plate,year,price,created_at,color} = product


  const favoriteVehicle = () =>{
    api.post(`/vehicles/favorite/${id}`,{},{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((res) =>{
      toast.success("now it's a favorite",{
        theme: "dark"
      })
      setIsLoading(false)
    })
    .catch((error) =>{
      toast.error("is already a favorite",{
        theme: "dark"
      })
    })
  }

  const unfavoriteVehicle = () =>{
    api.delete(`/vehicles/favorite/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res =>{
      toast.success("is no longer a favorite",{
        theme: "dark"
      })
      setIsLoading(false)
    })
  }

  const deleteVehicle = () =>{
    api.delete(`/vehicles/${product.id}`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then(res =>{
      setIsLoading(false)
      toast.success("deleted",{
        theme: "dark"
      })
    })
  }

  return (
    <CustomLi color={color.toLowerCase()}>
      <EditVehicleModal vehicle={product} openModal={openModal} setOpenModal={setOpenModal}/>
      
      <div>
          {type === "fav" ? 
          <BsHeartFill onClick={unfavoriteVehicle}/>    
          : 
          <>
            {product.user && product.user.id === userId && 
            <>
              <FiEdit onClick={()=> setOpenModal(true)}/>
              <AiOutlineClose onClick={deleteVehicle}/>
            </>
            }
            <BsHeart onClick={favoriteVehicle}/> 
          </>
          }
        
      </div>
      <h2>{name}</h2>
      <p><span>Price:</span> {price}</p>
      <p><span>Description:</span> {description}</p>
      <p><span>Year:</span> {year}</p>
      <p><span>Color:</span> {color}</p>
    </CustomLi>
  );
};

export default Card;
