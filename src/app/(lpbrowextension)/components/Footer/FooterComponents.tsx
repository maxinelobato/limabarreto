import { ComponentProps } from 'react'

export interface FooterComponents {
  className: string
}

type HeroPropertyFooterProps = ComponentProps<'footer'>

export function HeroPropertyFooter(props: HeroPropertyFooterProps) {
  return (
    <footer
      className="max-w-full space-y-2 mx-auto justify-center gap-x-2 px-px pb-4 sm:pb-10 md:flex"
      {...props}
    />
  )
}
