import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Input from "../../components/input/input/input";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import Button from "../../components/button/Button";
import { BsFillCameraFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Profile(){
    return(
        <div className="w-full h-screen flex flex-col">
            <header className="h-32 bg-zinc-900 flex items-center px-28">
             <Link to="/" className="text-3xl"><BsFillArrowLeftCircleFill /></Link>
                <div className=" w-48 h-48 mx-auto container -mb-40 relative">
                 
                    <img
                        src="https://github.com/stevefullcode.png"
                        alt="Foto do usuário"
                        className="rounded-full w-48 h-48  "
                    />
                    
                    <div className="absolute w-12 h-12 rounded-full flex items-center justify-center bottom-2 right-2 cursor-pointer bg-orange-400 ">
                        <BsFillCameraFill className="w-5 h-5 text-zinc-900"/>
                    <input
                        id="avatar"
                        type="file"
                        className="flex-none opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                    />
                    </div>

                </div>
            </header>

            <form className="max-w-96 flex flex-col m-auto container">
                
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
            <div className="flex flex-col">
              <Input
                placeholder='Senha atual'
                type='password'
                icon={GiPadlock}
                required
              />
              <Input
                placeholder='Senha nova'
                type='password'
                icon={GiPadlock}
                required
              />
            </div>
            <Button title="salvar"/>
            </form>
        </div>
    )
}