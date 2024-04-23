import Input from "../../components/input/input/input";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import Button from '../../components/button/Button'
import { Link } from "react-router-dom";



export default function Signin() {
    return(
        <div className="h-screen w-full flex items-center">
            <div className="px-28 flex flex-col text-center w-2/5">
            <h1 className="text-4xl xl:text-5xl  text-orange-400">Web Notes</h1>
            <p>Aplição para salvar e gerenciar seus links úteis.</p>

            <h2 className="text-2xl my-6 ">Faça seus login</h2>
            <div className="flex flex-col ">
            <Input
              placeholder='E-mail'
              type='email'
              icon={MdOutlineAlternateEmail}
            />
            <Input
              placeholder='Senha'
              type='password'
              icon={GiPadlock}
            />
            </div>
            <Button title="Entrar"><Link to="/"/></Button>
            <Link to="/register" className='mt-32 text-orange-400'>Criar conta</Link> 
            </div>
            <div className="flex-1 h-full bg-no-repeat bg-cover bg-[url('assets/imgdefundo.png')]"/>
        </div>
    )
}