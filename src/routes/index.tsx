import { Switch, Route } from "react-router-dom"
import Login from "../pages/Login"
import VehiclesPage from "../pages/Vehicles"

const Routes = () =>{
  return(
    <Switch>
      <Route exact path={'/'}>
        <Login/>
      </Route>
      <Route exact path={'/vehicles'}>
        <VehiclesPage/>
      </Route>
    </Switch>
  )
}

export default Routes