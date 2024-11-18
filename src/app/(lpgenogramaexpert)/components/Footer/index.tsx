import Image from 'next/image'
import LogoLM from '@/app/assets/images/lb.org-branca.svg'
import Link from 'next/link'
import { HeroPropertyFooter } from '../Hero/HeroComponents'

export function Footer() {
  return (
    // <footer className="shadow-zinc-500/20 shadow-t-md z-50">
    //   <div className="mx-auto px-4 pt-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
    //     <div className="mx-auto max-w-5xl p-4 py-10">
    //       <p className="text-center text-sm text-white">AVISO LEGAL</p>
    //       <p className="text-center text-sm text-white">
    //         “Esse produto é comercializado através da Hotmart. A plataforma não
    //         faz controle editorial prévio dos produtos comercializados, tão
    //         menos avalia a tecnicidade e experiência daqueles que os produzem. A
    //         existência de um produto e sua aquisição, através da plataforma, não
    //         podem ser consideradas como garantia de qualidade de conteúdo e
    //         resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara
    //         estar ciente dessas informações. Os termos e políticas da Hotmart
    //         podem ser acessados aqui, antes mesmo da conclusão da compra."
    //       </p>
    //     </div>
    //     <div className="flex flex-col-reverse justify-between pb-10 pt-5 lg:flex-row">
    //       <ul className="mb-3 flex flex-row items-center justify-center space-x-2 sm:space-y-0 lg:mb-0">
    //         <li className="text-center text-xs text-zinc-400 sm:text-left">
    //           Lima Barreto Organizações © 2024 - Todos os Direitos Reservados
    //         </li>
    //       </ul>
    //       <ul className="mb-3 flex flex-row items-center justify-center space-x-2 sm:space-y-0 lg:mb-0">
    //         <li className="text-xs text-zinc-400">Desenvolvido por</li>
    //         <li>
    //           <Image
    //             alt="Logo"
    //             width={80}
    //             height={80}
    //             loading="lazy"
    //             src={LogoLM}
    //             className="w-8 sm:mx-auto"
    //           />
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </footer>
    <HeroPropertyFooter>
      <div className="mx-auto text-center">
        <div className="mx-auto space-y-5 px-8 text-center">
          <ul className="menu menu-horizontal menu-xs justify-center bg-zinc-800/20 backdrop-blur-sm rounded-full text-white">
            <li>
              <Link href="/avisolegal" target="_blank">
                Aviso Legal
              </Link>
            </li>
            <li>
              <Link href="/termosecondicoes" target="_blank">
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link href="/politicadeprivacidade" target="_blank">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col-reverse px-8 justify-between pt-10 lg:flex-row">
          <ul className="mb-3 flex flex-row items-center justify-center space-x-2 sm:space-y-0 lg:mb-0">
            <li className="text-center text-xs text-zinc-400 sm:text-left">
              Lima Barreto Organizações © 2024 - Todos os Direitos Reservados
            </li>
          </ul>
        </div>
        <div className="flex flex-col-reverse px-8 justify-center pt-4 lg:flex-row">
          <ul className="mb-3 flex flex-row items-center justify-center space-x-2 sm:space-y-0 lg:mb-0">
            <li className="text-xs text-zinc-400">Desenvolvido por</li>
            <li>
              <Image
                alt="Logo"
                width={80}
                height={80}
                loading="lazy"
                src={LogoLM}
                className="w-5 sm:mx-auto"
              />
            </li>
          </ul>
        </div>
      </div>
    </HeroPropertyFooter>
  )
}
