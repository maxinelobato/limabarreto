import Image from 'next/image'
import LogoLM from '@/app/assets/images/lb.org-branca.svg'
import Link from 'next/link'
import { HeroPropertyFooter } from './FooterComponents'

export function Footer() {
  return (
    <>
      <HeroPropertyFooter>
        <div className="mx-auto text-center">
          <div className="mx-auto space-y-5 px-8 text-center">
            <ul className="menu menu-horizontal menu-xs justify-center bg-zinc-800/20 backdrop-blur-sm rounded-full text-white">
              <li>
                <Link
                  href="/politicas-browextension/avisolegal"
                  target="_blank"
                >
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/politicas-browextension/termosecondicoes"
                  target="_blank"
                >
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link
                  href="/politicas-browextension/politicadeprivacidade"
                  target="_blank"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="flex flex-col-reverse px-8 justify-between pt-10 lg:flex-row">
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
          </div> */}
        </div>
      </HeroPropertyFooter>
    </>
  )
}
