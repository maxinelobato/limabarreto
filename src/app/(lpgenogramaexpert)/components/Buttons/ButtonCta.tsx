import { ComponentProps } from 'react'

export interface ButtonCta {
  className: string
}

type ButtonHomeProps = ComponentProps<'a'>

export function ButtonHome(props: ButtonHomeProps) {
  return (
    <div className="z-50 my-2 flex w-full justify-center sm:justify-start">
      <a
        target="_blank"
        aria-label="Clique no botão"
        className="focus:shadow-outline delay-0 inline-flex h-12 w-auto items-center justify-center rounded-full bg-brandGenograma px-8 font-medium text-white duration-75 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-transparent hover:to-amber-200 hover:transition-colors focus:outline-none sm:h-14 md:w-auto"
        {...props}
      />
    </div>
  )
}

type ButtonHomeFlexProps = ComponentProps<'div'>

export function ButtonHomeFlex(props: ButtonHomeFlexProps) {
  return <div className="z-50 ml-3 flex items-center" {...props} />
}

type ButtonHomeTextProps = ComponentProps<'div'>

export function ButtonHomeText(props: ButtonHomeTextProps) {
  return (
    <div
      className="z-50 text-center text-xs font-semibold uppercase text-zinc-950 sm:text-left sm:text-lg sm:font-semibold"
      {...props}
    />
  )
}

type ButtonFloatProps = ComponentProps<'a'>

export function ButtonFloat(props: ButtonFloatProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex h-24 w-24 items-end justify-end p-2 hover:-translate-x-0 hover:scale-110 hover:transition-all hover:duration-300">
      <div className="absolute flex items-center justify-center rounded-full bg-brandGenograma p-4 text-zinc-950 hover:bg-gradient-to-r hover:from-transparent hover:to-amber-200 hover:transition-colors focus:outline-none">
        <a
          className="decoration-transparent"
          target="_blank"
          aria-label="Clique no botão"
          {...props}
        />
      </div>
    </div>
  )
}
