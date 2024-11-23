import Image from 'next/image'
import LogoGenograma from '../../../../../public/genogramaexpert/logogenograma-gold.webp'

import {
  HeroCard,
  HeroCardBanner,
  HeroCardH1,
  HeroCardH1Span,
  HeroCardP1,
  HeroCardP1Span1,
  HeroCardP1Span2,
  HeroCardP2,
  HeroCardP3,
  HeroCardText,
  HeroImgProperty,
  HeroProperty,
  HeroSection,
} from './HeroComponents'
import { ArrowCircleUpRight } from '@phosphor-icons/react/dist/ssr'
import {
  ButtonHome,
  ButtonHomeFlex,
  ButtonHomeText,
} from '../Buttons/ButtonCta'
import { Footer } from '../Footer'

export function Hero() {
  return (
    <>
      <HeroSection>
        <HeroProperty>
          <HeroCard>
            <HeroImgProperty>
              <Image
                src={LogoGenograma}
                width={500}
                height={500}
                className="h-auto w-72 sm:h-auto sm:w-64"
                alt="Logo Genograma"
                loading="lazy"
              />
            </HeroImgProperty>
            <HeroCardText>
              <HeroCardH1>
                Rompa com padrões de
                <HeroCardH1Span>
                  {' '}
                  comportamentos que se repetem em no mínimo 3 gerações
                </HeroCardH1Span>
              </HeroCardH1>
              <HeroCardP2>
                Trabalhe a causa raiz dos problemas e formule hipóteses,
                estratégias e um plano terapêutico desde a primeira sessão
              </HeroCardP2>
            </HeroCardText>
            <HeroCardBanner>
              <HeroCardP3>► Bônus exclusivo 01: Ecomapa R$97,00</HeroCardP3>
              <HeroCardP3>
                ► Bônus exclusivo 02: Mentalidade Financeira R$97,00
              </HeroCardP3>
              <HeroCardP1>
                De <HeroCardP1Span1>R$1.191,00</HeroCardP1Span1> por{' '}
                <HeroCardP1Span2>12x de R$29,64</HeroCardP1Span2>
              </HeroCardP1>
            </HeroCardBanner>
            <ButtonHome href="https://go.hotmart.com/N96345039N">
              <ButtonHomeText>acessar o site completo</ButtonHomeText>
              <ButtonHomeFlex>
                <ArrowCircleUpRight
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-zinc-950"
                  weight="fill"
                />
              </ButtonHomeFlex>
            </ButtonHome>
          </HeroCard>
        </HeroProperty>
        <Footer />
      </HeroSection>
    </>
  )
}
