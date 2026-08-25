import { ThemeToggle } from './ThemeToggle'

type ElementsHeaderProps = {
  query: string
  onQueryChange: (query: string) => void
  theme: 'light' | 'dark'
  onThemeToggle: () => void
}

export function ElementsHeader({ query, onQueryChange, theme, onThemeToggle }: ElementsHeaderProps) {
  return (
    <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
      <h1 className="font-display text-[38px] font-bold leading-[.98] tracking-[-.05em] text-[var(--color-heading)] sm:text-[clamp(32px,4vw,55px)]">
        Periodic Table <span className="font-semibold text-[var(--color-muted)]">of HTML Elements</span>
      </h1>
      <div className="flex w-full items-center gap-3 sm:w-auto">
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
        <label className="flex h-[50px] min-w-0 flex-1 items-center gap-2 border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 shadow-[var(--shadow-card)] outline-none transition focus-within:border-[var(--color-focus)] focus-within:shadow-[0_0_0_3px_var(--color-focus-ring)] sm:w-[315px]">
          <span className="-rotate-[20deg] text-[25px] leading-none text-[var(--color-faint)]" aria-hidden="true">⌕</span>
          <input className="min-w-0 flex-1 border-0 bg-transparent text-sm text-[var(--color-text)] outline-none placeholder:text-[var(--color-subtle)]" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Filter elements, tags, categories…" aria-label="Filter HTML elements" />
          {query && <button className="text-[22px] leading-none text-[var(--color-subtle)]" onClick={() => onQueryChange('')} aria-label="Clear filter">×</button>}
        </label>
      </div>
    </header>
  );
}
