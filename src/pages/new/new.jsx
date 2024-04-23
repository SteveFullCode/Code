import  Header  from "../../components/header/header";
import Input from "../../components/input/input/input";
import NoteItems from "../../components/noteItems/noteItems";
import Section from "../../components/section/section";
import TextArea from "../../components/textArea/textArea";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";


export default function New() {
    return(
    <section className="grid grid-rows-[80px,1fr] h-screen">
        <Header />
    <div className="overflow-y-auto mb-5">
        <form className="max-w-xl mx-auto mt-9">
          <div className="flex justify-between mb-9">
            <h1 className="text-2xl">Criar nota</h1>
            <Link to="/" className="text-lg text-zinc-500">
              Voltar
            </Link>
          </div>
          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />
          <Section title="Links úteis">
            <NoteItems value="https://Rocketseat.com.br" />
            <NoteItems isNew placeholder="Novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="flex justify-between flex-wrap ">
              <NoteItems value="React" />
              <NoteItems isNew placeholder="Nova tag" />
            </div>
            <Button title="Salvar" />
          </Section>
            </form>
    </div>
     </section>
    )
}