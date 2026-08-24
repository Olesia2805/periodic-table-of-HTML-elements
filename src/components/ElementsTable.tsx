import { categories } from '../data/categories'
import type { ElementData } from '../types'

type ElementsTableProps = {
  elements: ElementData[]
  matchingTags: Set<string>
  hasQuery: boolean
  selectedElement: ElementData | null
  onSelect: (element: ElementData | null) => void
}

export function ElementsTable({ elements, matchingTags, hasQuery, selectedElement, onSelect }: ElementsTableProps) {
  return (
    <section className="overflow-x-auto px-[3px] pb-3 pt-[3px]" aria-label="Periodic table of HTML elements">
      <div className="grid min-w-[1170px] grid-cols-[repeat(18,minmax(0,1fr))] grid-rows-[repeat(8,63px)_25px_63px] gap-[7px] sm:grid-rows-[repeat(8,72px)_25px_72px]">
        {elements.map((element) => {
          const isSelected = selectedElement?.tag === element.tag
          const isDimmed = hasQuery && !matchingTags.has(element.tag)
          return (
            <button
              className={[
                categories[element.category].backgroundClass,
                'flex min-w-0 flex-col items-start justify-center overflow-hidden rounded-[7px] border border-transparent p-[9px] text-left text-[#26303c] transition duration-150 hover:z-10 hover:-translate-y-[3px] hover:shadow-[0_8px_18px_rgba(36,41,56,.17)]',
                isSelected ? 'z-10 -translate-y-[3px] border-[#252b3a] shadow-[0_8px_18px_rgba(36,41,56,.17)]' : '',
                isDimmed ? 'opacity-[.14] hover:translate-y-0 hover:shadow-none' : '',
              ].join(' ')}
              style={{ gridArea: element.position }}
              key={element.tag}
              onClick={() => onSelect(isSelected ? null : element)}
              aria-pressed={isSelected}
            >
              <span className="font-mono text-[clamp(13px,1.2vw,16px)] font-medium leading-tight">&lt;{element.tag}&gt;</span>
              <span className="mt-[5px] w-full overflow-hidden text-ellipsis whitespace-nowrap text-[9px] text-[#1f253180]">{categories[element.category].name}</span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
