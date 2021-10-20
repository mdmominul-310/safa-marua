import { useContext } from "react"
import { AllAuth } from "../../Context/AuthProvider"


const UseAuth=()=>{
   return useContext(AllAuth);
}
export default UseAuth;