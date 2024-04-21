import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Input from "../../components/input/input/input";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import Button from "../../components/button/Button";

export default function Profile(){
    return(
        <div className="w-full h-screen flex flex-col">
            <header className="h-32 bg-zinc-900 flex items-center px-28">
             <a href="#" className="text-3xl"><BsFillArrowLeftCircleFill /></a>
            </header>

            <form className="max-w-96 flex flex-col m-auto container">
                <div>
                    <img
                        src="https://github.com/stevefullcode.png"
                        alt="Foto do usuário"
                        className="rounded-full"
                    />
                    <input
                        id="avatar"
                        type="file"
                    />
                </div>
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

            <Button title=""/>
            </form>
        </div>
    )
}