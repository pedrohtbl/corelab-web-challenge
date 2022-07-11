import { DialogContent } from "@mui/material"
import { useForm } from "react-hook-form"
import {IModalSelect } from "../../types/Modal"
import Form from "../Form"
import { CustomDialog } from "./style"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Select from "../Select"
import Input from "../Input"
import { toast } from "react-toastify"

const FilterModal = ({openModal, setOpenModal, vehicles, setFilterVehiclesModal}:IModalSelect) =>{
  const schema = yup.object().shape({
    pricemin: yup.number().typeError("type number").required("required field"),
    pricemax: yup.number().typeError("type number").required("required field")
  })

  const {register, handleSubmit,reset, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })
  
  const onSubmit = (data: any) =>{
    const filtered = vehicles.filter(vehicle =>
      vehicle.model.includes(data.models) &&
      Number(vehicle.price) >= data.pricemin && Number(vehicle.price) <= data.pricemax &&
      vehicle.year.toString().includes(data.years.toString()) &&
      vehicle.color.includes(data.colors)
    )

    setFilterVehiclesModal(filtered)
    if(filtered.length === 0){
      toast.error("no vehicle found",{
        theme: "dark"
      })
    }
    handleClose()
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
            <Select label="Models" name="models" register={register}>
              {vehicles.map((vehicle) => <option key={vehicle.id} value={vehicle.model}>{vehicle.model}</option>)}
            </Select>
            <Select label="Colors" name="colors" register={register}>
              {vehicles.map((vehicle) => <option key={vehicle.id} value={vehicle.color}>{vehicle.color}</option>)}
            </Select>
            <Select label="Years" name="years" register={register}>
              {vehicles.map((vehicle) => <option key={vehicle.id} value={vehicle.year}>{vehicle.year}</option>)}
            </Select>
            <section>
              <Input errors={errors.year?.message} register={register} name={"pricemin"} label={"Price Min"}/>
              <Input errors={errors.color?.message} register={register} name={"pricemax"} label={"Price Max"}/>
            </section>
            <button type="submit">Save</button>
        </Form>
      </DialogContent>
    </CustomDialog>
    </>
  )
}

export default FilterModal