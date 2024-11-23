import Image from 'next/image'
import LogoBlackFriday from '../../../../../public/browextension/lgo-blackfriday.webp'

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
                src={LogoBlackFriday}
                width={500}
                height={500}
                className="h-auto w-72 sm:h-auto sm:w-64"
                alt="Logo Genograma"
                loading="lazy"
              />
            </HeroImgProperty>
            <HeroCardText>
              <HeroCardH1>
                Garanta Acesso Vitalício ao Método Brow Extension Pro 4.0!
                <HeroCardH1Span>
                  {' '}
                  A Oferta Exclusiva da Black Friday Que Vai Transformar Sua
                  Carreira para Sempre!
                </HeroCardH1Span>
              </HeroCardH1>
              <HeroCardP2>
                A única técnica de extensão de sobrancelhas com certificação MEC
                e durabilidade excepcional na acoplagem de fios diretamente na
                pele. Resultados naturais e sofisticados que você e seus
                clientes vão amar!
              </HeroCardP2>
            </HeroCardText>
            <HeroCardBanner>
              <HeroCardP3>► Certificação MEC</HeroCardP3>
              <HeroCardP3>► Acesso à Blindagem de Sobrancelhas</HeroCardP3>
              <HeroCardP3>► Acesso Vitalício e Bônus Inéditos</HeroCardP3>
              <HeroCardP1>
                De <HeroCardP1Span1>R$997</HeroCardP1Span1> por{' '}
                <HeroCardP1Span2>R$597,00</HeroCardP1Span2>
              </HeroCardP1>
            </HeroCardBanner>
            <ButtonHome href="https://go.hotmart.com/A96669387V?ap=47b6">
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
