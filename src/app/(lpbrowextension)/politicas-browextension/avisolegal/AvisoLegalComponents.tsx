import { ComponentProps } from 'react'

export interface AvisoLegalComponents {
  className: string
}

type RootPropertyProps = ComponentProps<'div'>

export function RootProperty(props: RootPropertyProps) {
  return (
    <div className="grid h-screen max-w-full place-content-center bg-zinc-950 px-4">
      <div className="text-center max-w-4xl pt-32 pb-10 space-y-4" {...props} />
    </div>
  )
}

type TitleH1Props = ComponentProps<'h1'>

export function TitleH1(props: TitleH1Props) {
  return (
    <h1
      className="font-black pb-4 text-zinc-300 text-5xl md:text-7xl sm:text-6xl"
      {...props}
    />
  )
}

type Paragraph1Props = ComponentProps<'p'>

export function Paragraph1(props: Paragraph1Props) {
  return <p className="text-zinc-200 text-sm sm:text-base pb-4" {...props} />
}
