import { useNavigate } from "react-router-dom"
import { BackArrowIcon } from "../../assets/icons"
import Button from "../Button/Button"

const GoBack = () => {
   const navigate = useNavigate(); 
  return (
    <div className="max-w-[1000px] mt-4 py-4 mx-auto">
        <Button text="Back" className="text-sm text-[#7c7c7c] hover:text-white" icon={<BackArrowIcon/>} onClick={()=> navigate(-1)}/>
    </div>
  )
}

export default GoBack


