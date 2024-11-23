import { ComponentProps } from 'react'

export interface AvisoLegalComponents {
  className: string
}

type GridPropertyProps = ComponentProps<'div'>

export function GridProperty(props: GridPropertyProps) {
  return (
    <div
      className="grid h-auto max-w-full place-content-center bg-zinc-950 px-4"
      {...props}
    />
  )
}

type RootPropertyProps = ComponentProps<'div'>

export function RootProperty(props: RootPropertyProps) {
  return (
    <div className="text-center max-w-4xl pt-32 pb-10 space-y-4" {...props} />
  )
}

type HeadingProps = ComponentProps<'h1'>

export function Heading(props: HeadingProps) {
  return (
    <h1
      className="font-black pb-4 text-zinc-300 text-5xl md:text-7xl sm:text-6xl"
      {...props}
    />
  )
}

type ParagraphProps = ComponentProps<'p'>

export function Paragraph(props: ParagraphProps) {
  return (
    <p className="text-zinc-200 text-justify text-sm sm:text-base" {...props} />
  )
}

type ParagraphPbProps = ComponentProps<'p'>

export function ParagraphPb(props: ParagraphPbProps) {
  return (
    <p
      className="text-zinc-200 text-justify text-sm sm:text-base pb-4"
      {...props}
    />
  )
}

type UlPropertyProps = ComponentProps<'ul'>

export function UlProperty(props: UlPropertyProps) {
  return (
    <ul
      className="list-disc text-justify text-zinc-200 text-sm sm:text-base"
      {...props}
    />
  )
}

type LiPropertyProps = ComponentProps<'li'>

export function LiProperty(props: LiPropertyProps) {
  return <li className="list-inside indent-8" {...props} />
}
