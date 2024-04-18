import ButtonText from "../../components/buttonText/buttonText";
import { Header } from "../../components/header/header";
import Section from "../../components/section/section";
import Tag from "../../components/tag/tag";


export function Datails() {
  return (
    <main className="h-full w-full">
         <Header/>
         <section className=" content-wrapper">
         <div className="m-auto max-w-xl py-16"> 

         <div className="text-end">
         <ButtonText title='Excluir nota'/>
         </div>

         <div className="flex flex-col gap-8">
            <h1 className="text-4xl pt-16">Introduçao ao React</h1>

            <p className="text-justify text-base ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Odio ab amet sit omnis neque quia expedita corrupti doloribus porro molestiae voluptatibus earum a, fugit,
               similique quisquam et provident debitis quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Maiores asperiores totam distinctio! Ipsum eos tenetur voluptatem ea minus consequatur quidem aliquid 
               sapiente accusantium quibusdam soluta voluptate nisi qui, impedit beatae. Lorem ipsum dolor, sit amet 
               consectetur adipisicing elit. Culpa deserunt fugiat modi qui quos nobis ea ipsa quibusdam, officia dicta debitis
                beatae exercitationem neque nisi hic voluptate? Cupiditate, ad laboriosam? Lorem ipsum dolor, 
                sit amet consectetur adipisicing elit. Consequatur dolor incidunt aliquam architecto officia
                 nisi iure ullam inventore? Expedita corrupti odit, et ipsam fuga possimus tenetur exercitationem 
                 dolorum. Hic, iusto! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ducimus quasi 
                 tempora repudiandae ipsa libero neque. Alias obcaecati ab perspiciatis modi molestiae, esse beatae
                  nam temporibus libero veritatis corporis dolor! Lorem ipsum dolor sit amet consectetur adipisicing 
                  elit. Qui nisi culpa, reprehenderit voluptates animi officiis enim rem quae in aperiam perspiciatis.
                   Inventore, eum nesciunt soluta sit natus nulla doloremque esse. Lorem ipsum dolor sit amet consectetur 
                   adipisicing elit. Illum pariatur optio error voluptatum. Eaque explicabo dicta, sed velit eius eum ad 
                   itaque possimus laudantium, deserunt consequuntur illum optio autem quidem.

            </p>

            </div>
         <Section title="Links úteis">
          <ul className="flex flex-col gap-2 mt-3">
            <li>
              <a href="https://www.linkedin.com/in/isthivi-h-8277a7271/">https://www.linkedin.com/in/isthivi-h-8277a7271/</a>
              </li>
            <li>
              <a href="https://github.com/SteveFullCode">https://github.com/SteveFullCode</a>
              </li>
          </ul>
         </Section>

         <Section title="Marcadores">
          <div className="flex pt-4">
          <Tag title='Express'/>
          <Tag title='Node.js'/>
          </div>
         </Section>
         </div>
         </section>
    </main>
  )
}