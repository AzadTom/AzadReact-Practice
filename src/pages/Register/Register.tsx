import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
    step?:string;
}
function Register() {
   
  const location = useLocation();
  const state  = location.state as LocationState;
  const navigate  = useNavigate();

  const handleNext = ()=>{
    navigate('/register',{
        state:{
            step: state?.step ? state.step+1 :1
        },
        replace:false
    })
  }
  return (
    <div className="flex flex-col items-center justify-center m-4">
        <button className="bg-pink-900 border border-pink-600 rounded-full px-4 py-2" onClick={handleNext}> Register {state?.step ? state.step :1}</button>
    </div>
  )
}

export default Register