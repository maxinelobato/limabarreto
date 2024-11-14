import Image from 'next/image'
import imgDesktop from '@/app/assets/images/desktop-produtora.webp'
import imgMobile from '@/app/assets/images/mobile-produtora.webp'
import LogoGenograma from '@/app/assets/images/logogenograma-gold.webp'
import LogoLM from '@/app/assets/images/lb.org-branca.svg'

import {
  HeroCard,
  HeroCardH1,
  HeroCardP1,
  HeroCardP3,
  HeroCardText,
  HeroGradient,
  HeroImgProperty,
  HeroProperty,
  HeroPropertyFooter,
  HeroRoot,
} from './HeroComponents'
import { ArrowCircleUpRight } from '@phosphor-icons/react/dist/ssr'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import Link from 'next/link'

export function Hero() {
  return (
    <>
      <HeroRoot>
        <Image
          src={imgDesktop}
          alt="BgImage"
          sizes="100vh"
          unoptimized
          priority
          fill
          className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover sm:bg-[imgDesktop]"
        />
        <Image
          src={imgMobile}
          alt="BgImage"
          sizes="100vh"
          unoptimized
          priority
          fill
          className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover lg:hidden sm:hidden sm:bg-[imgMobile]"
        />
        <HeroGradient />
        <HeroProperty>
          <HeroCard>
            <HeroImgProperty>
              <Image
                src={LogoGenograma}
                width={600}
                height={600}
                className="z-50 h-auto w-44 sm:h-auto sm:w-64"
                alt="Logo Genograma"
                loading="lazy"
              />
            </HeroImgProperty>
            <HeroCardText>
              <HeroCardH1>
                Rompa com padrões de{' '}
                <span className="bg-brandPrimary bg-clip-text font-black text-transparent">
                  comportamentos que se repetem em no mínimo 3 gerações
                </span>
              </HeroCardH1>
              <HeroCardP1>
                Trabalhe a causa raiz dos problemas e formule hipóteses,
                estratégias e um plano terapêutico desde a primeira sessão
              </HeroCardP1>
              <HeroCardP3>► Bônus exclusivo 01: Ecomapa R$97,00</HeroCardP3>
              <HeroCardP3>
                ► Bônus exclusivo 02: Mentalidade Financeira R$97,00
              </HeroCardP3>
              <HeroCardP1>
                De <span className="line-through text-red-500">R$1191,00</span>{' '}
                por{' '}
                <span className="text-green-500 text-4xl">12x de R$29,64</span>
              </HeroCardP1>
            </HeroCardText>
            <ButtonHome href="https://go.hotmart.com/N96345039N?dp=1">
              <ButtonHomeText>acessar o site completo</ButtonHomeText>
              <ButtonHomeFlex>
                <ArrowCircleUpRight
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  weight="fill"
                />
              </ButtonHomeFlex>
            </ButtonHome>
          </HeroCard>
        </HeroProperty>
        <HeroPropertyFooter>
          <div className="mx-auto text-center">
            <div className="mx-auto max-w-6xl space-y-5 px-8 text-center">
              <ul className="menu menu-horizontal bg-base-200">
                <li>
                  <Link href="/avisolegal" target="_blank">
                    Aviso Legal
                  </Link>
                </li>
                <li>
                  <Link href="/termosdeuso" target="_blank">
                    Termos de Uso
                  </Link>
                </li>
                <li>
                  <Link href="/politicadeprivacidade" target="_blank">
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
              <p className="text-center text-sm text-white">AVISO LEGAL</p>
              <p className="text-center text-sm text-white">
                “Esse produto é comercializado através da Hotmart. A plataforma
                não faz controle editorial prévio dos produtos comercializados,
                tão menos avalia a tecnicidade e experiência daqueles que os
                produzem. A existência de um produto e sua aquisição, através da
                plataforma, não podem ser consideradas como garantia de
                qualidade de conteúdo e resultado, em qualquer hipótese. Ao
                adquiri-lo, o comprador declara estar ciente dessas informações.
                Os termos e políticas da Hotmart podem ser acessados aqui, antes
                mesmo da conclusão da compra."
              </p>
            </div>
            <div className="flex flex-col-reverse px-8 max-w-6xl justify-between pt-5 lg:flex-row">
              <ul className="mb-3 flex flex-row items-center justify-center space-x-2 sm:space-y-0 lg:mb-0">
                <li className="text-center text-xs text-zinc-400 sm:text-left">
                  Lima Barreto Organizações © 2024 - Todos os Direitos
                  Reservados
                </li>
              </ul>
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
      </HeroRoot>
    </>
  )
}
