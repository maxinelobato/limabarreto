import Image from 'next/image'
import LogoBlackFriday from '../../../../../public/browextension/lgo-blackfriday.webp'

import {
  HeroCard,
  HeroCardH1,
  HeroCardP1,
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
      {/* <HeroRoot>
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
                className="h-auto w-24 sm:h-auto sm:w-28"
                alt="Logo Genograma"
                loading="lazy"
              />
            </HeroImgProperty>
            <HeroCardText>
              <HeroCardH1>
                Garanta Acesso Vitalício ao{' '}
                <span className="bg-brandPrimary bg-clip-text font-black text-transparent">
                  Método Brow Extension Pro 4.0! {''}
                </span>
                A Oferta Exclusiva da Black Friday Que Vai Transformar Sua
                Carreira para Sempre!
              </HeroCardH1>
              <HeroCardP1>
                A única técnica de extensão de sobrancelhas com certificação MEC
                e durabilidade excepcional na acoplagem de fios diretamente na
                pele. Resultados naturais e sofisticados que você e seus
                clientes vão amar!
              </HeroCardP1>
            </HeroCardText>
            <div className="mx-auto sm:mx-0 text-center sm:text-left bg-gradient-to-r from-transparent via-white/10 to-transparent backdrop-blur-lg max-w-fit">
              <HeroCardP3>► Certificação MEC</HeroCardP3>
              <HeroCardP3>► Acesso à Blindagem de Sobrancelhas</HeroCardP3>
              <HeroCardP3>► Acesso Vitalício e Bônus Inéditos</HeroCardP3>
              <HeroCardP1>
                De <span className="line-through text-zinc-300">R$997</span> por{' '}
              </HeroCardP1>
              <HeroCardP1>
                <span className="text-brandPrimary text-4xl font-black">
                  R$597,00
                </span>
              </HeroCardP1>
            </div>
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
      </HeroRoot> */}
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
                <span className="bg-clip-text font-black text-transparent bg-white">
                  {' '}
                  A Oferta Exclusiva da Black Friday Que Vai Transformar Sua
                  Carreira para Sempre!
                </span>
              </HeroCardH1>
              <HeroCardP2>
                A única técnica de extensão de sobrancelhas com certificação MEC
                e durabilidade excepcional na acoplagem de fios diretamente na
                pele. Resultados naturais e sofisticados que você e seus
                clientes vão amar!
              </HeroCardP2>
            </HeroCardText>
            <div className="p-2 rounded-lg mx-auto sm:mx-0 text-center sm:text-left bg-white/10 backdrop-blur-lg max-w-fit">
              <HeroCardP3>► Certificação MEC</HeroCardP3>
              <HeroCardP3>► Acesso à Blindagem de Sobrancelhas</HeroCardP3>
              <HeroCardP3>► Acesso Vitalício e Bônus Inéditos</HeroCardP3>
              <HeroCardP1>
                De <span className="line-through text-zinc-300">R$997</span> por{' '}
                <span className="text-brandPrimary text-4xl font-black">
                  R$597,00
                </span>
              </HeroCardP1>
            </div>
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
