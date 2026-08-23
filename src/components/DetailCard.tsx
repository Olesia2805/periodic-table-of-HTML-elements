import { categories } from '../data/categories'
import type { ElementData } from '../types'

type DetailCardProps = {
  element: ElementData | null
  onClose: () => void
}

export function DetailCard({ element, onClose }: DetailCardProps) {
  if (!element) {
    return <aside className="mx-auto mt-[23px] flex min-h-16 w-full max-w-[620px] items-center rounded-lg border border-[#e0e3ec] bg-white px-4 text-[13px] text-[#77809b]">Select any element to see its role.</aside>
  }

  const category = categories[element.category]
  return (
    <aside className="mx-auto mt-[23px] flex min-h-16 w-full max-w-[620px] items-center gap-[13px] rounded-lg border border-[#e0e3ec] bg-white px-4 py-3" aria-live="polite">
      <div className={`self-stretch rounded ${category.backgroundClass} w-2 shrink-0`} />
      <div>
        <p className="mb-0.5 text-[10px] uppercase tracking-[.09em] text-[#7d869e]">{category.name}</p>
        <h2 className="mr-2 inline font-mono text-[17px] font-medium">&lt;{element.tag}&gt;</h2>
        <span className="text-xs text-[#66708b]">{element.description}</span>
      </div>
      <button className="ml-auto text-[22px] leading-none text-[#9ba2b5]" onClick={onClose} aria-label="Close element details">×</button>
    </aside>
  )
}
