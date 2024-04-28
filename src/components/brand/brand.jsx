import { Link } from "react-router-dom";
import ButtonText from "../buttonText/buttonText";
import { BsPlus } from "react-icons/bs";

export default function Brand() {
  return (
    <section className="w-60 bg-zinc-900 border-e border-zinc-700">
      <div className="h-20 border-b border-zinc-700 flex justify-center items-center">
        <h1 className="text-center text-2xl text-orange-400 ">RocketSet</h1>
      </div>
      <div className="flex flex-col justify-between h-menu">
        <ul className="flex flex-col gap-4 mt-16 items-center">
          <li>
            <ButtonText title="Todos" />
          </li>
          <li>
            <ButtonText title="FontEnd" />
          </li>
          <li>
            {" "}
            <ButtonText title="React.js" isActive />
          </li>
          <li>
            {" "}
            <ButtonText title="Node.js" />
          </li>
        </ul>
        <Link
          to="/new"
          className="flex justify-center items-center gap-2 bg-orange-400 p-4 text-black">
          <BsPlus />
          <p>Criar nota</p>
        </Link>
      </div>
    </section>
  );
}
