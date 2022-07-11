import { DialogContent } from "@mui/material"
import { useForm } from "react-hook-form"
import { IModal } from "../../types/Modal"
import Form from "../Form"
import { CustomDialog } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { IVehicle } from "../../types/Vehicle"
import Input from "../Input"
import api from "../../lib/api"
import { useState } from "react"
import { toast } from "react-toastify"
import { useLoading } from "../../providers/LoadingProvider"

const NewVehicleModal = ({openModal, setOpenModal}:IModal) =>{
  const [token, setToken] = useState<string>(sessionStorage.getItem("token") || "")
  const {setIsLoading} = useLoading()

  const schema = yup.object().shape({
    name: yup.string().required("required field").trim(),
    model: yup.string().required("required field").trim(),
    description: yup.string().required("required field").trim(),
    plate: yup.string().required("required field").trim(),
    year: yup.number().typeError("type number").integer("a integer number").required("required field"),
    color: yup.string().required("required field").trim(),
    price: yup.number().typeError("type number").required("required field")
  })

  const {register, handleSubmit,reset, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: IVehicle) =>{
    const {name,color,year,model,plate,price,description} = data
    api.post("/vehicles",{name,color,year,model,plate,price,description},{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then( res =>{
      toast.success("registered vehicle",{
        theme: "dark"
      })
      setIsLoading(false)
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

export default NewVehicleModal