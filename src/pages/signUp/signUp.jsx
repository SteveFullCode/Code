import Input from "../../components/input/input/input";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import Button from '../../components/button/Button'
import { AiOutlineUser } from "react-icons/ai";

export default function SignUp() {
    return(
        <div className="h-screen w-full flex items-center">
          <div className="flex-1 h-full bg-no-repeat bg-cover bg-[url('assets/imgdefundo.png')]"/>
            <div className="px-28 flex flex-col text-center w-2/5">
            <h1 className="text-4xl xl:text-5xl  text-orange-400">Web Notes</h1>
            <p className="text-sm">Aplição para salvar e gerenciar seus links úteis.</p>

            <h2 className="text-2xl my-6 ">Crie sua conta</h2>
            <div className="flex flex-col gap-4">
            <Input
              placeholder='Nome'
              type='text'
              icon={AiOutlineUser}
            />
            <Input
              placeholder='E-mail'
              type='email'
              icon={MdOutlineAlternateEmail}
            />
              <Input
                placeholder='Senha'
                type='password'
                icon={GiPadlock}
                required
              />
            </div>
            <Button title="Cadastrar"/>
            <a href="#"  className='mt-32 text-orange-400'>Ir para o Login</a>
            </div>
        </div>
    ) 
}