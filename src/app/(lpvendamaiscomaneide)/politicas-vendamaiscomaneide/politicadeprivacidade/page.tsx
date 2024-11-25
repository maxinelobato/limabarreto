import Link from 'next/link'
import {
  GridProperty,
  Heading,
  LiProperty,
  Paragraph,
  ParagraphPb,
  RootProperty,
  UlProperty,
} from './PoliticasPrivacidadeComponents'

export default function Home() {
  return (
    <>
      <title>
        Política de Privacidade | Políticas Venda Mais Com A Neide 4.0
      </title>
      <GridProperty>
        <RootProperty>
          <Heading>Política de Privacidade</Heading>
          <Paragraph>
            A sua privacidade é importante para nós. É política do Venda Mais
            Com A Neide 4.0 respeitar a sua privacidade em relação a qualquer
            informação sua que possamos coletar no site Venda Mais Com A Neide
            4.0, e outros sites que possuímos e operamos.
          </Paragraph>
          <Paragraph>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </Paragraph>
          <Paragraph>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </Paragraph>
          <Paragraph>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </Paragraph>
          <Paragraph>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas políticas de privacidade.
          </Paragraph>
          <Paragraph>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </Paragraph>
          <Paragraph>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contacto connosco.
          </Paragraph>

          <UlProperty>
            <LiProperty>
              O serviço Google AdSense que usamos para veicular publicidade usa
              um cookie DoubleClick para veicular anúncios mais relevantes em
              toda a Web e limitar o número de vezes que um determinado anúncio
              é exibido para você.
            </LiProperty>
            <LiProperty>
              Para mais informações sobre o Google AdSense, consulte as FAQs
              oficiais sobre privacidade do Google AdSense.
            </LiProperty>
            <LiProperty>
              Utilizamos anúncios para compensar os custos de funcionamento
              deste site e fornecer financiamento para futuros desenvolvimentos.
              Os cookies de publicidade comportamental usados ​​por este site
              foram projetados para garantir que você forneça os anúncios mais
              relevantes sempre que possível, rastreando anonimamente seus
              interesses e apresentando coisas semelhantes que possam ser do seu
              interesse.
            </LiProperty>
            <LiProperty>
              Vários parceiros anunciam em nosso nome e os cookies de
              rastreamento de afiliados simplesmente nos permitem ver se nossos
              clientes acessaram o site através de um dos sites de nossos
              parceiros, para que possamos creditá-los adequadamente e, quando
              aplicável, permitir que nossos parceiros afiliados ofereçam
              qualquer promoção que pode fornecê-lo para fazer uma compra.
            </LiProperty>
          </UlProperty>

          <Paragraph>Compromisso do Usuário</Paragraph>

          <Paragraph>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o Venda Mais Com A Neide 4.0 oferece no site e com
            caráter enunciativo, mas não limitativo:
          </Paragraph>

          <UlProperty>
            <LiProperty>
              A) Não se envolver em atividades que sejam ilegais ou contrárias à
              boa fé a à ordem pública;
            </LiProperty>
            <LiProperty>
              B) Não difundir propaganda ou conteúdo de natureza racista,
              xenofóbica, kiwibet ou azar, qualquer tipo de pornografia ilegal,
              de apologia ao terrorismo ou contra os direitos humanos;
            </LiProperty>
            <LiProperty>
              C) Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) do Venda Mais Com A Neide 4.0, de seus fornecedores ou
              terceiros, para introduzir ou disseminar vírus informáticos ou
              quaisquer outros sistemas de hardware ou software que sejam
              capazes de causar danos anteriormente mencionados.
            </LiProperty>
          </UlProperty>

          <Paragraph>Mais informações</Paragraph>

          <Paragraph>
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </Paragraph>

          <ParagraphPb>
            Esta política é efetiva a partir de 15 November 2024 19:43
          </ParagraphPb>
          <Link
            href={{
              pathname: '/vendamaiscomaneide',
            }}
            className="mt-6 uppercase inline-block rounded-full bg-brandVendaMaisComANeideOne hover:transition-colors hover: hover:bg-brandVendaMaisComANeideTwo px-5 py-3 text-sm font-medium text-white"
          >
            voltar para o site
          </Link>
        </RootProperty>
      </GridProperty>
    </>
  )
}
