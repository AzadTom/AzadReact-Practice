import ShowModel from "../../components/ReusableComponent/Dialog/ShowModel"
import { HeroModel } from "./SignUpModel"

function SignUpModelPage() {
  return (
    <main>
        <ShowModel bg="rgba(0,0,0,0.5)">
            <HeroModel/>
        </ShowModel>
    </main>
  )
}

export default SignUpModelPage