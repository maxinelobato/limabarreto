export default function Home() {
  return (
    <>
      <title>Aviso Legal</title>
      <div className="grid h-screen max-w-full place-content-center bg-zinc-950 px-4">
        <div className="text-center max-w-4xl pt-32 pb-10 space-y-4">
          <h1 className="font-black pb-4 text-zinc-300 text-5xl md:text-7xl sm:text-6xl">
            Aviso Legal
          </h1>

          <p className="text-zinc-200 text-sm sm:text-base pb-4">
            Esse produto é comercializado através da Hotmart. A plataforma não
            faz controle editorial prévio dos produtos comercializados, tão
            menos avalia a tecnicidade e experiência daqueles que os produzem. A
            existência de um produto e sua aquisição, através da plataforma, não
            podem ser consideradas como garantia de qualidade de conteúdo e
            resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara
            estar ciente dessas informações. Os termos e políticas da Hotmart
            podem ser acessados aqui, antes mesmo da conclusão da compra.
          </p>

          <a
            href="/genogramaexpert"
            className="mt-6 uppercase inline-block rounded-full bg-brandPrimary hover:transition-colors hover: hover:bg-yellow-600 px-5 py-3 text-sm font-medium text-yellow-950"
          >
            voltar para o site
          </a>
        </div>
      </div>
    </>
  )
}
