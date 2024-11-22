import Image from 'next/image'
import imgDesktop from '../../../../../public/genogramaexpert/desktop-produtora.webp'
import imgMobile from '../../../../../public/genogramaexpert/mobile-produtora.webp'
import LogoGenograma from '../../../../../public/genogramaexpert/logogenograma-gold.webp'

import {
  HeroCard,
  HeroCardH1,
  HeroCardP1,
  HeroCardP3,
  HeroCardText,
  HeroGradient,
  HeroImgProperty,
  HeroProperty,
  HeroRoot,
} from './HeroComponents'
import { ArrowCircleUpRight } from '@phosphor-icons/react/dist/ssr'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'

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
          className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover 2xl:bg-[imgDesktop] xl:bg-[imgDesktop] lg:bg-[imgDesktop] md:bg-[imgDesktop] sm:bg-[imgDesktop]"
        />
        <Image
          src={imgMobile}
          alt="BgImage"
          sizes="100vh"
          unoptimized
          priority
          fill
          className="h-auto w-full bg-cover bg-fixed bg-center bg-no-repeat object-cover sm:hidden sm:bg-[imgMobile]"
        />
        <HeroGradient />
        <HeroProperty>
          <HeroCard>
            <HeroImgProperty>
              <Image
                src={LogoGenograma}
                width={600}
                height={600}
                className="h-auto w-44 sm:h-auto sm:w-64"
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
              <div className="bg-gradient-to-r from-transparent via-white/10 to-transparent backdrop-blur-lg max-w-fit">
                <HeroCardP3>► Bônus exclusivo 01: Ecomapa R$97,00</HeroCardP3>
                <HeroCardP3>
                  ► Bônus exclusivo 02: Mentalidade Financeira R$97,00
                </HeroCardP3>
                <HeroCardP1>
                  De{' '}
                  <span className="line-through text-red-500">R$1.191,00</span>{' '}
                  por{' '}
                </HeroCardP1>
                <HeroCardP1>
                  <span className="text-green-500 text-4xl">
                    12x de R$29,64
                  </span>
                </HeroCardP1>
              </div>
            </HeroCardText>
            <ButtonHome href="https://go.hotmart.com/N96345039N">
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
      </HeroRoot>
    </>
  )
}
