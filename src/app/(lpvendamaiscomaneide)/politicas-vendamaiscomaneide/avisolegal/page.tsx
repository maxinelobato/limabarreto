import Link from 'next/link'
import { Paragraph1, RootProperty, TitleH1 } from './AvisoLegalComponents'

export default function Home() {
  return (
    <>
      <title>Aviso Legal | Políticas Venda Mais Com A Neide 4.0</title>
      <RootProperty>
        <TitleH1>Aviso Legal</TitleH1>

        <Paragraph1>
          Esse produto é comercializado através da Hotmart. A plataforma não faz
          controle editorial prévio dos produtos comercializados, tão menos
          avalia a tecnicidade e experiência daqueles que os produzem. A
          existência de um produto e sua aquisição, através da plataforma, não
          podem ser consideradas como garantia de qualidade de conteúdo e
          resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara
          estar ciente dessas informações. Os termos e políticas da Hotmart
          podem ser acessados aqui, antes mesmo da conclusão da compra.
        </Paragraph1>

        <Link
          href={{
            pathname: '/vendamaiscomaneide',
          }}
          className="mt-6 uppercase inline-block rounded-full bg-brandVendaMaisComANeideOne hover:transition-colors hover: hover:bg-brandVendaMaisComANeideTwo px-5 py-3 text-sm font-medium text-white"
        >
          voltar para o site
        </Link>
      </RootProperty>
    </>
  )
}
