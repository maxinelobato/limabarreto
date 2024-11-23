import Image from 'next/image'
import LogoLM from '../../../../../public/lb.org-branca.svg'
import Link from 'next/link'
import {
  FooterCenter,
  FooterFlexColReverseCenter,
  FooterFlexColReverseJustify,
  FooterLiBrand,
  FooterLiBrandImg,
  FooterLiMenuHorizontal,
  FooterLiRights,
  FooterMenuHorizontel,
  FooterRoot,
  FooterUlBrand,
  FooterUlMenuHorizontal,
  FooterUlRights,
} from './FooterComponents'

export function Footer() {
  return (
    <>
      <FooterRoot>
        <FooterCenter>
          <FooterMenuHorizontel>
            <FooterUlMenuHorizontal>
              <FooterLiMenuHorizontal>
                <Link
                  href="/politicas-browextension/avisolegal"
                  target="_blank"
                >
                  Aviso Legal
                </Link>
              </FooterLiMenuHorizontal>
              <FooterLiMenuHorizontal>
                <Link
                  href="/politicas-browextension/termosecondicoes"
                  target="_blank"
                >
                  Termos de Uso
                </Link>
              </FooterLiMenuHorizontal>
              <FooterLiMenuHorizontal>
                <Link
                  href="/politicas-browextension/politicadeprivacidade"
                  target="_blank"
                >
                  Política de Privacidade
                </Link>
              </FooterLiMenuHorizontal>
            </FooterUlMenuHorizontal>
          </FooterMenuHorizontel>
          <FooterFlexColReverseJustify>
            <FooterUlRights>
              <FooterLiRights>
                Lima Barreto Organizações © 2024 - Todos os Direitos Reservados
              </FooterLiRights>
            </FooterUlRights>
          </FooterFlexColReverseJustify>
          <FooterFlexColReverseCenter>
            <FooterUlBrand>
              <FooterLiBrand>Desenvolvido por</FooterLiBrand>
              <FooterLiBrandImg>
                <Image
                  alt="Logo"
                  width={80}
                  height={80}
                  loading="lazy"
                  src={LogoLM}
                  className="w-5 sm:mx-auto"
                />
              </FooterLiBrandImg>
            </FooterUlBrand>
          </FooterFlexColReverseCenter>
        </FooterCenter>
      </FooterRoot>
    </>
  )
}
