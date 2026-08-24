import { categories } from '../data/categories'
import type { Category } from '../types'

type LegendProps = {
  query: string
  onCategorySelect: (query: string) => void
}

export function Legend({ query, onCategorySelect }: LegendProps) {
  return (
    <section className="mb-[27px] mt-5 flex flex-wrap gap-x-[22px] gap-y-2 sm:mt-5" aria-label="Element categories">
      {(Object.entries(categories) as [Category, (typeof categories)[Category]][]).map(([key, category]) => (
        <button
          key={key}
          className="flex items-center gap-1.5 text-xs text-[var(--color-muted)] transition hover:text-[var(--color-heading)]"
          onClick={() => onCategorySelect(query === category.name ? '' : category.name)}
        >
          <i className="block size-2.5 rounded-[2px]" style={{ background: `var(${category.accentVariable})` }} />
          {category.name}
        </button>
      ))}
    </section>
  )
}
