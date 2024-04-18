import { FaPowerOff } from "react-icons/fa6";

export function Header() {
    return(
        <section className=" h-20 w-full border-b border-b-zinc-700 flex items-center justify-between px-20">
            <div className="flex items-center gap-4">
                <img 
                src="https://github.com/SteveFullCode.png"
                alt="Foto de perfil"
                className="rounded-full h-12 w-12"
                />
                <div className="flex flex-col">
                <p className="font-sans text-sm text-zinc-400">Bem vindo</p>
                <h2 className="text-white">Steve Herison</h2>
                </div>
            </div>
            <div>
                <button>
                <FaPowerOff className="h-6 w-6 text-zinc-400" />
                </button>
                <p></p>
            </div>
    
        </section>
    )
}

