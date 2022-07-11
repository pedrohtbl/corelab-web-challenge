import { useEffect, useState } from "react";
import { Button, Search } from "../../components";
import { IVehicle } from "../../types/Vehicle";
import { ArrowLeft, CustomMain } from "./style";
import {RiMenuAddLine} from "react-icons/ri"
import Announcements from "../../components/Announcements";
import api from "../../lib/api";
import { Redirect } from "react-router-dom";
import { IUser } from "../../types/User";
import { useLoading } from "../../providers/LoadingProvider";
import NewVehicleModal from "../../components/NewVehicleModal";
import FilterModal from "../../components/FilterModal";

const VehiclesPage = () => {
  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const [search, setSearch] = useState<string>("");
  const [token, setToken] = useState<string>(sessionStorage.getItem("token") || "")
  const [userId, setUserId] = useState<string>(sessionStorage.getItem("id") || "")
  const [favorite, setFavorite] = useState<IVehicle[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openFilterModal, setOpenFilterModal] = useState<boolean>(false)
  const {isLoading, setIsLoading} = useLoading()
  const [filterVehicles, setFilterVehicles] = useState<IVehicle[]>([])
  const [filterVehiclesModal, setFilterVehiclesModal] = useState<IVehicle[]>([])
  const [filterVehiclesFav, setFilterVehiclesFav] = useState<IVehicle[]>([])

  useEffect(() => {
    api.get("/vehicles",{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then(res =>{
      setIsLoading(true)
      setVehicles(res.data)
    })
  }, [isLoading]);

  useEffect(() => {
    api.get("/users")
    .then(res =>{
      const userFavorite = res.data.filter((user:IUser ) => user.id === userId)
      setIsLoading(true)
      setFavorite(userFavorite[0].favorite_vehicles)
    })
  },[isLoading]);

  if(!token){
    return <Redirect to={"/"}/>
  }

  const inputFilter = () =>{
    const filtered = vehicles.filter(vehicle =>
      vehicle.name.toLowerCase().includes(search) ||
      vehicle.model.toLowerCase().includes(search) ||
      vehicle.description.toLowerCase().includes(search) ||
      vehicle.price.toString().toLowerCase().includes(search) ||
      vehicle.year.toString().toLowerCase().includes(search) ||
      vehicle.color.toLowerCase().includes(search) ||
      vehicle.plate.toLowerCase().includes(search) 
    )

    const filteredFav = favorite.filter(vehicle =>
      vehicle.name.toLowerCase().includes(search) ||
      vehicle.model.toLowerCase().includes(search) ||
      vehicle.description.toLowerCase().includes(search) ||
      vehicle.price.toString().toLowerCase().includes(search) ||
      vehicle.year.toString().toLowerCase().includes(search) ||
      vehicle.color.toLowerCase().includes(search) ||
      vehicle.plate.toLowerCase().includes(search) 
    )

    setFilterVehicles(filtered)
    setFilterVehiclesFav(filteredFav)
    
  }

  const cleanFilters = () =>{
    setFilterVehiclesModal([])
    setFilterVehicles([])
    setFilterVehiclesFav([])
    setSearch('')
  }

  return (
    <>
      <NewVehicleModal openModal={openModal} setOpenModal={setOpenModal}/>
      <FilterModal openModal={openFilterModal} setOpenModal={setOpenFilterModal} vehicles={vehicles} setFilterVehiclesModal={setFilterVehiclesModal}/>
      <ArrowLeft onClick={cleanFilters}/>
      <CustomMain>
        <section>
          <Search placeholder="Search" setSearch={setSearch} inputFilter={inputFilter}/>
          <RiMenuAddLine onClick={()=> setOpenFilterModal(true)}/>
        </section>
        <Button text="Add new vehicle" onClick={() => setOpenModal(true)} />
        {filterVehiclesModal.length === 0  ? 
          <>
            <Announcements title="Favorites" type="fav" products={search === "" ? favorite : filterVehiclesFav}/>
            <Announcements title="Announcements" products={search === "" ? vehicles : filterVehicles}/>
          </> 
        :
          <Announcements title="Announcements" products={filterVehiclesModal}/>
        }
      </CustomMain>
    </>
  );
};

export default VehiclesPage;
