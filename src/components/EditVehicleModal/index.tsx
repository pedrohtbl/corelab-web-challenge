import { DialogContent } from "@mui/material"
import { useForm } from "react-hook-form"
import { IModal } from "../../types/Modal"
import Form from "../Form"
import { CustomDialog } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../Input"
import api from "../../lib/api"
import { useState } from "react"
import { toast } from "react-toastify"
import { useLoading } from "../../providers/LoadingProvider"

const EditVehicleModal = ({openModal, setOpenModal, vehicle}:IModal) =>{
  const [token, setToken] = useState<string>(sessionStorage.getItem("token") || "")
  const {setIsLoading} = useLoading()

  const schema = yup.object().shape({
    name: yup.string().trim(),
    model: yup.string().trim(),
    description: yup.string().trim(),
    plate: yup.string().trim(),
    year: yup.number().typeError("year is required").integer("a integer number"),
    color: yup.string().trim(),
    price: yup.number().typeError("price is required")
  })

  const {register, handleSubmit,reset, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
    defaultValues:{
      name: vehicle?.name,
      model: vehicle?.model,
      description: vehicle?.description,
      plate: vehicle?.plate,
      year: vehicle?.year,
      color: vehicle?.color,
      price: vehicle?.price
    }
  })

  const onSubmit = (data: any) =>{
    let newData: any = {}
    for(let key in data){
      if( data[key] !== ""){
        newData[key] = data[key]
      }
    } 
    api.patch(`/vehicles/${vehicle?.id}`,newData,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then( res =>{
      toast.success("Edited vehicle",{
        theme: "dark"
      })
      setIsLoading(false)
      setOpenModal(false)
      reset()
    })
    .catch(error =>{
      toast.error("certified if the plate already exists",{
        theme:"dark"
      })
    }) 
  }

  const handleClose = () =>{
    setOpenModal(false)
  }

  return(
    <>
    <CustomDialog
      open={openModal}
      onClose={handleClose}
    >
      <DialogContent>
        <Form handleSubmit={handleSubmit} onSubmitFunction={onSubmit}>
            <Input errors={errors.name?.message} register={register} name={"name"} label={"Name"}/>
            <Input errors={errors.model?.message} register={register} name={"model"} label={"Model"}/>
            <Input errors={errors.description?.message} register={register} name={"description"} label={"Description"}/>
            <Input errors={errors.plate?.message} register={register} name={"plate"} label={"Plate"}/>
            <Input errors={errors.year?.message} register={register} name={"year"} label={"Year"}/>
            <Input errors={errors.color?.message} register={register} name={"color"} label={"Color"}/>
            <Input errors={errors.price?.message} register={register} name={"price"} label={"price"}/>
            <button type="submit">Save</button>
        </Form>
      </DialogContent>
    </CustomDialog>
    </>
  )
}

export default EditVehicleModal