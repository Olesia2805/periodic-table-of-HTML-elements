type Theme = 'light' | 'dark'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      className="relative h-9 w-[68px] rounded-full border-4 border-[var(--color-toggle-border)] bg-[var(--color-toggle-background)] p-0 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)]"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
    >
      <span className={`absolute top-1/2 size-6 -translate-y-1/2 rounded-full bg-[var(--color-toggle-thumb)] transition-transform ${isDark ? 'translate-x-1' : 'translate-x-8'}`} />
    </button>
  )
}
