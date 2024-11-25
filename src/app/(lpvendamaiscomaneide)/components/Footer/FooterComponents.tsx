import { ComponentProps } from 'react'

export interface FooterComponents {
  className: string
}

type FooterRootProps = ComponentProps<'footer'>

export function FooterRoot(props: FooterRootProps) {
  return (
    <footer
      className="max-w-full space-y-2 mx-auto justify-center gap-x-2 px-px pt-4 pb-4 sm:pb-10 md:flex"
      {...props}
    />
  )
}

type FooterCenterProps = ComponentProps<'div'>

export function FooterCenter(props: FooterCenterProps) {
  return <div className="mx-auto text-center" {...props} />
}

type FooterMenuHorizontelProps = ComponentProps<'div'>

export function FooterMenuHorizontel(props: FooterMenuHorizontelProps) {
  return <div className="mx-auto space-y-5 px-4 text-center" {...props} />
}

type FooterUlMenuHorizontalProps = ComponentProps<'ul'>

export function FooterUlMenuHorizontal(props: FooterUlMenuHorizontalProps) {
  return (
    <ul
      className="menu menu-horizontal menu-xs justify-center text-white"
      {...props}
    />
  )
}

type FooterLiMenuHorizontalProps = ComponentProps<'li'>

export function FooterLiMenuHorizontal(props: FooterLiMenuHorizontalProps) {
  return <li {...props} />
}

type FooterFlexColReverseJustifyProps = ComponentProps<'div'>

export function FooterFlexColReverseJustify(
  props: FooterFlexColReverseJustifyProps,
) {
  return (
    <div
      className="flex flex-col-reverse px-4 justify-between pt-2 lg:flex-row"
      {...props}
    />
  )
}

type FooterUlRightsProps = ComponentProps<'ul'>

export function FooterUlRights(props: FooterUlRightsProps) {
  return (
    <ul
      className="mb-3 flex flex-row items-center justify-center space-x-2 sm:space-y-0 lg:mb-0"
      {...props}
    />
  )
}

type FooterLiRightsProps = ComponentProps<'li'>

export function FooterLiRights(props: FooterLiRightsProps) {
  return (
    <li className="text-center text-xs text-zinc-400 sm:text-left" {...props} />
  )
}

type FooterFlexColReverseCenterProps = ComponentProps<'div'>

export function FooterFlexColReverseCenter(
  props: FooterFlexColReverseCenterProps,
) {
  return (
    <div
      className="flex flex-col-reverse px-8 justify-center pt-2 lg:flex-row"
      {...props}
    />
  )
}

type FooterUlBrandProps = ComponentProps<'ul'>

export function FooterUlBrand(props: FooterUlBrandProps) {
  return (
    <ul
      className="mb-3 flex flex-row items-center justify-center space-x-2 sm:space-y-0 lg:mb-0"
      {...props}
    />
  )
}

type FooterLiBrandProps = ComponentProps<'li'>

export function FooterLiBrand(props: FooterLiBrandProps) {
  return <li className="text-xs text-zinc-400" {...props} />
}

type FooterLiBrandImgProps = ComponentProps<'li'>

export function FooterLiBrandImg(props: FooterLiBrandImgProps) {
  return <li {...props} />
}
