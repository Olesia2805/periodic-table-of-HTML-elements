import { useEffect, useMemo, useState } from 'react'
import { categories } from './data/categories'
import { elements } from './data/elements'
import type { ElementData } from './types'
import { CodePlayground } from './components/CodePlayground'
import { ElementsHeader } from './components/ElementsHeader'
import { ElementsTable } from './components/ElementsTable'
import { Legend } from './components/Legend'

export default function App() {
  const [query, setQuery] = useState('')
  const [theme, setTheme] = useState<'light' | 'dark'>(() => localStorage.getItem('theme') === 'dark' ? 'dark' : 'light')
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null)
  const normalizedQuery = query.trim().toLowerCase()
  const matchingTags = useMemo(
    () => new Set(
      elements
        .filter((element) => `${element.tag} ${element.description} ${categories[element.category].name}`.toLowerCase().includes(normalizedQuery))
        .map((element) => element.tag),
    ),
    [normalizedQuery],
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main className="mx-auto w-[calc(100%-28px)] max-w-[1800px] py-7 text-[var(--color-text)] sm:w-[calc(100%-48px)] sm:py-[42px]">
      <ElementsHeader query={query} onQueryChange={setQuery} theme={theme} onThemeToggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <section className="mt-8 flex items-center justify-between gap-4 sm:mt-12">
        <p className="text-sm text-[var(--color-muted)] sm:text-base">Explore the building blocks of the web, organized by purpose.</p>
        <span className="shrink-0 font-mono text-[10px] font-medium uppercase tracking-[.09em] text-[var(--color-subtle)] sm:text-[11px]">
          {normalizedQuery ? `${matchingTags.size} matching elements` : `${elements.length} HTML elements`}
        </span>
      </section>
      <Legend query={query} onCategorySelect={setQuery} />
      <ElementsTable
        elements={elements}
        matchingTags={matchingTags}
        hasQuery={Boolean(normalizedQuery)}
        selectedElement={selectedElement}
        onSelect={setSelectedElement}
      />
      <CodePlayground element={selectedElement} onClose={() => setSelectedElement(null)} />
    </main>
  )
}
