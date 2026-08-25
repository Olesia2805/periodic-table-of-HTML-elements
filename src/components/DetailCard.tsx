import type { CSSProperties } from 'react'
import { categories } from '../data/categories'
import type { ElementData } from '../types'

type DetailCardProps = {
  element: ElementData | null
  onClose: () => void
}

export function DetailCard({ element, onClose }: DetailCardProps) {
  if (!element) {
    return <aside className="mx-auto mt-[23px] flex min-h-16 w-full max-w-[620px] items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-[13px] text-[var(--color-faint)]">Select any element to see its role.</aside>
  }

  const category = categories[element.category]
  return (
    <aside className="mx-auto mt-[23px] flex min-h-16 w-full max-w-[620px] items-center gap-[13px] rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3" aria-live="polite">
      <div className="w-2 shrink-0 self-stretch rounded bg-[var(--element-accent)]" style={{ '--element-accent': `var(${category.accentVariable})` } as CSSProperties} />
      <div>
        <p className="mb-0.5 text-[10px] uppercase tracking-[.09em] text-[var(--color-subtle)]">{category.name}</p>
        <h2 className="mr-2 inline font-mono text-[17px] font-medium">&lt;{element.tag}&gt;</h2>
        <span className="text-xs text-[var(--color-muted)]">{element.description}</span>
      </div>
      <button className="ml-auto text-[22px] leading-none text-[var(--color-subtle)]" onClick={onClose} aria-label="Close element details">×</button>
    </aside>
  )
}
