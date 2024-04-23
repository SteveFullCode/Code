import { FaPowerOff } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header() {
    return(
<section className="h-20 w-full border-b border-b-zinc-700 flex items-center justify-between pe-7 pl-20">
      
        <Link to="/profile" className="flex items-center gap-4">
        <img
          src="https://github.com/SteveFullCode.png"
          alt="Foto de perfil"
          className="rounded-full h-12 w-12"
        />
        <div className="flex flex-col">
          <p className="font-sans text-sm text-zinc-400">Bem vindo</p>
          <h2 className="text-white">Steve Herison</h2>
        </div>
        </Link>
      <div>
        <button>
          <FaPowerOff className="h-6 w-6 text-zinc-400" />
        </button>
      </div>
    </section>
    )
}

