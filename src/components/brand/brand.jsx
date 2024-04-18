import ButtonText from "../buttonText/buttonText";


export default function Brand() {
    return(
        <section className="w-60 bg-zinc-900 border-e border-zinc-700 ">
            <div className="h-20 border-b border-zinc-700 flex justify-center items-center">
                <h1 className="text-center text-2xl text-orange-400 ">RocketSet</h1>
            </div>
            <menu className="">
                <ul className="flex flex-col">
                    <ButtonText title='Todos'/>
                    <ButtonText title='React.js'/>
                    <ButtonText title='Node.js'/>
                </ul>
            </menu>
        </section>
    )
}