import { SealCheck } from '@phosphor-icons/react/dist/ssr'

export function Guarantee() {
  return (
    <>
      <div className="flex items-center justify-start gap-x-2">
        <div className="flex justify-center">
          <SealCheck className="w-5 text-zinc-300" weight="fill" size={32} />
        </div>
        <div>
          <h2 className="text-xs uppercase font-semibold text-white">
            garantia de 7 dias
          </h2>
        </div>
      </div>
    </>
  )
}
