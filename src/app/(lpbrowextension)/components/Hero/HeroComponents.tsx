import { ComponentProps } from 'react'

export interface HeroComponents {
  className: string
}

type HeroRootProps = ComponentProps<'section'>

export function HeroRoot(props: HeroRootProps) {
  return <section className="relative h-svh" {...props} />
}

type HeroGradientProps = ComponentProps<'div'>

export function HeroGradient(props: HeroGradientProps) {
  return (
    <div
      className="absolute h-full w-full bg-gradient-to-t from-zinc-950 from-30% to-transparent to-70% sm:bg-gradient-to-r sm:from-transparent"
      {...props}
    />
  )
}

type HeroPropertyProps = ComponentProps<'div'>

export function HeroProperty(props: HeroPropertyProps) {
  return (
    <div className="pt-44 sm:py-0">
      <div className="mx-auto max-w-6xl justify-between gap-x-4 px-2 md:flex">
        <div className="max-w-3xl space-y-4" {...props} />
      </div>
    </div>
  )
}

type HeroPropertyFooterProps = ComponentProps<'footer'>

export function HeroPropertyFooter(props: HeroPropertyFooterProps) {
  return (
    <div className="mx-auto justify-center gap-x-2 pt-44 pb-4 md:pt-10 sm:pt-10 sm:pb-10 px-4 md:flex">
      <footer className="max-w-full space-y-2" {...props} />
    </div>
  )
}

type HeroCardProps = ComponentProps<'div'>

export function HeroCard(props: HeroCardProps) {
  return (
    <div className="card-normal h-auto w-full min-w-full">
      <div className="card-body" {...props} />
    </div>
  )
}

type HeroCardTextProps = ComponentProps<'div'>

export function HeroCardText(props: HeroCardTextProps) {
  return <div className="z-50 text-center sm:text-left" {...props} />
}

type HeroCardH1Props = ComponentProps<'h1'>

export function HeroCardH1(props: HeroCardH1Props) {
  return (
    <h1
      className="mt-4 pb-2 text-lg font-semibold uppercase text-white md:text-2xl"
      {...props}
    />
  )
}

type HeroCardP1Props = ComponentProps<'p'>

export function HeroCardP1(props: HeroCardP1Props) {
  return (
    <p
      className="z-50 pb-2 text-xs font-medium leading-relaxed text-zinc-200 md:text-lg"
      {...props}
    />
  )
}

type HeroCardP3Props = ComponentProps<'p'>

export function HeroCardP3(props: HeroCardP3Props) {
  return (
    <p
      className="z-50 mt-2 text-xs font-medium leading-relaxed text-zinc-200"
      {...props}
    />
  )
}

type HeroCardP2Props = ComponentProps<'p'>

export function HeroCardP2(props: HeroCardP2Props) {
  return (
    <p
      className="pb-1 pt-1 text-sm leading-relaxed text-white md:text-xl"
      {...props}
    />
  )
}

type HeroImgPropertyProps = ComponentProps<'div'>

export function HeroImgProperty(props: HeroImgPropertyProps) {
  return (
    <>
      <div
        className="z-50 flex justify-start sm:flex-none sm:justify-start"
        {...props}
      />
    </>
  )
}
