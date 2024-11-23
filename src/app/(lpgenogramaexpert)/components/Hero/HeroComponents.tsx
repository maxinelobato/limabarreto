import { ComponentProps } from 'react'

export interface HeroComponents {
  className: string
}

type HeroSectionRootProps = ComponentProps<'section'>

export function HeroSectionRoot(props: HeroSectionRootProps) {
  return <section className="relative h-auto overflow-hidden" {...props} />
}

type HeroSectionProps = ComponentProps<'div'>

export function HeroSection(props: HeroSectionProps) {
  return (
    <section className="md:bgDesktopGenogramaExpert lg:bgDesktopGenogramaExpert hero min-h-min bg-bgMobileGenogramaExpert bg-cover bg-fixed bg-center bg-no-repeat sm:bg-bgDesktopGenogramaExpert sm:bg-cover md:bg-cover lg:bg-cover">
      <div
        className="hero-overlay bg-opacity-0 bg-gradient-to-r from-black/5 from-5%"
        {...props}
      />
    </section>
  )
}

type HeroPropertyProps = ComponentProps<'div'>

export function HeroProperty(props: HeroPropertyProps) {
  return (
    <div className="mt-48 pt-8 sm:my-12 sm:py-8">
      <div className="mx-auto max-w-screen-xl justify-between gap-x-12 px-4 md:flex md:px-8">
        <div className="max-w-3xl space-y-4" {...props} />
      </div>
    </div>
  )
}

type HeroCardProps = ComponentProps<'div'>

export function HeroCard(props: HeroCardProps) {
  return (
    <div className="bg-black/10 backdrop-blur-sm max-w-fit p-2 rounded-lg card-compact h-auto w-full min-w-full">
      <div className="card-body" {...props} />
    </div>
  )
}

type HeroCardTextProps = ComponentProps<'div'>

export function HeroCardText(props: HeroCardTextProps) {
  return <div className="text-center sm:text-left" {...props} />
}

type HeroCardH1Props = ComponentProps<'h1'>

export function HeroCardH1(props: HeroCardH1Props) {
  return (
    <h1
      className="mt-0 sm:mt-4 pb-4 text-2xl font-extrabold text-white drop-shadow-lg md:text-4xl"
      {...props}
    />
  )
}

type HeroCardH1SpanProps = ComponentProps<'span'>

export function HeroCardH1Span(props: HeroCardH1SpanProps) {
  return (
    <span
      className="bg-clip-text font-black text-transparent bg-brandGenograma"
      {...props}
    />
  )
}

type HeroCardP1Props = ComponentProps<'p'>

export function HeroCardP1(props: HeroCardP1Props) {
  return (
    <p
      className="mt-4 pb-4 text-sm leading-relaxed text-white md:text-xl"
      {...props}
    />
  )
}

type HeroCardP1Span1Props = ComponentProps<'span'>

export function HeroCardP1Span1(props: HeroCardP1Span1Props) {
  return <span className="line-through text-zinc-300" {...props} />
}

type HeroCardP1Span2Props = ComponentProps<'span'>

export function HeroCardP1Span2(props: HeroCardP1Span2Props) {
  return <span className="text-brandGenograma text-4xl font-black" {...props} />
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
type HeroCardP3Props = ComponentProps<'p'>

export function HeroCardP3(props: HeroCardP3Props) {
  return (
    <p
      className="z-50 mt-2 text-xs font-medium leading-relaxed text-zinc-200"
      {...props}
    />
  )
}

type HeroImgPropertyProps = ComponentProps<'div'>

export function HeroImgProperty(props: HeroImgPropertyProps) {
  return (
    <>
      <div
        className="flex justify-center sm:flex-none sm:justify-start"
        {...props}
      />
    </>
  )
}

type HeroCardBannerProps = ComponentProps<'div'>

export function HeroCardBanner(props: HeroCardBannerProps) {
  return (
    <>
      <div
        className="p-2 rounded-lg mx-auto sm:mx-0 text-center sm:text-left bg-white/10 backdrop-blur-lg max-w-fit"
        {...props}
      />
    </>
  )
}
