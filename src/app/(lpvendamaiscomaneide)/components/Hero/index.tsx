import Image from 'next/image'
import LogoNeide from '../../../../../public/vendamaiscomaneide/logovendamaiscomaneide.webp'

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
                src={LogoNeide}
                width={500}
                height={500}
                className="h-auto w-72 sm:h-auto sm:w-64"
                alt="Logo Genograma"
                loading="lazy"
              />
            </HeroImgProperty>
            <HeroCardText>
              <HeroCardH1>
                VEM APRENDER COM O MÉTODO{' '}
                <HeroCardH1Span>NEIDE CARVALHO</HeroCardH1Span>, COMO VENDER SEU
                ESTOQUE PARADO USANDO AS ESTRATÉGIAS CERTAS PARA SAIR DO FIADO E
                FAZER AÇÕES DE VENDAS SEM PERDER O SEU LUCRO!
              </HeroCardH1>
              <HeroCardP2>
                Curso com 9 planilhas, incluindo controle de estoque e vendas,
                lucro e precificação.
              </HeroCardP2>
            </HeroCardText>
            <HeroCardBanner>
              <HeroCardP3>► 12 Meses de Acesso</HeroCardP3>
              <HeroCardP3>► Planilhas Automáticas</HeroCardP3>
              <HeroCardP3>► Troféu de Reconhecimento e muito mais</HeroCardP3>
              <HeroCardP1>
                De <HeroCardP1Span1>R$697</HeroCardP1Span1> por{' '}
                <HeroCardP1Span2>R$297,00</HeroCardP1Span2>
              </HeroCardP1>
            </HeroCardBanner>
            <ButtonHome href="https://go.hotmart.com/P96403660J">
              <ButtonHomeText>acessar o site completo</ButtonHomeText>
              <ButtonHomeFlex>
                <ArrowCircleUpRight
                  className="h-5 w-5 sm:h-6 sm:w-6 fill-white"
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
