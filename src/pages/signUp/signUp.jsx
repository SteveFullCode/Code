import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/input";
import { api } from "../../services/api";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSingUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }
    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usúario cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.res) {
          alert(error.res.data.message);
        } else {
          alert("Nao foi possivel cadastrar");
        }
      });
  }

  return (
    <div className="h-screen w-full flex items-center">
      <div className="flex-1 h-full bg-no-repeat bg-cover bg-[url('assets/imgdefundo.png')]" />
      <div className="px-28 flex flex-col text-center w-2/5">
        <h1 className="text-4xl xl:text-5xl  text-orange-400">Web Notes</h1>
        <p className="text-sm">
          Aplição para salvar e gerenciar seus links úteis.
        </p>

        <h2 className="text-2xl my-7 ">Crie sua conta</h2>
        <div className="flex flex-col">
          <Input
            placeholder="Nome"
            type="text"
            icon={AiOutlineUser}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            type="email"
            icon={MdOutlineAlternateEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={GiPadlock}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button title="Cadastrar" onClick={handleSingUp} />
        <Link to="/" className="mt-32 text-orange-400">
          Ir para o Login
        </Link>
      </div>
    </div>
  );
}
