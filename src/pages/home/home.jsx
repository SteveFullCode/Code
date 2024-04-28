import Brand from "../../components/brand/brand";
import Header from "../../components/header/header";
import Input from "../../components/input/input";
import { BiSearchAlt } from "react-icons/bi";
import Note from "../../components/note/note";
import Section from "../../components/section/section";

export default function Home() {
  return (
    <main className="flex">
      <Brand />
      <div className="flex flex-col w-full h-full">
        <Header />
        <div className=" px-16 pt-16">
          <Input placeholder="text" icon={BiSearchAlt} />

          <Section title="Minhas notas">
            <Note
              data={{
                title: "React",
                tags: [
                  { id: "1", name: "react" },
                  { id: "2", name: "rocket" },
                ],
              }}
            />
          </Section>
        </div>
      </div>
    </main>
  );
}
