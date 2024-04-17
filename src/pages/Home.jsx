import { Header } from "../components/header/header";
import Section from "../components/section/section";


export function Home() {
  return (
    <main className="h-full w-full">
         <Header/>
         <Section title="Links úteis">
          <ul className="flex flex-col gap-2 mt-3">
            <li><a href="https://www.linkedin.com/in/isthivi-h-8277a7271/">https://www.linkedin.com/in/isthivi-h-8277a7271/</a></li>
            <li><a href="https://github.com/SteveFullCode">https://github.com/SteveFullCode</a></li>
          </ul>
         </Section>

         <Section title="Marcadores">
          <ul className="flex flex-col gap-2 mt-3 ">
            <li> <a href="#"> item 1</a></li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
         </Section>
    </main>
  )
}