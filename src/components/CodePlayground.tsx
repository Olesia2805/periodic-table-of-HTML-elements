import { useEffect, useMemo, useState } from 'react'
import { categories } from '../data/categories'
import type { ElementData } from '../types'

type CodePlaygroundProps = {
  element: ElementData | null
  onClose: () => void
}

type EditorProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

const voidElements = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'])

function createHtmlExample(element: ElementData) {
  if (element.tag === 'img') return '<img src="https://picsum.photos/240/120" alt="A random landscape">'
  if (element.tag === 'input') return '<label>\n  Your name\n  <input type="text" placeholder="Ada Lovelace">\n</label>'
  if (element.tag === 'br') return 'First line<br>Second line'
  if (element.tag === 'hr') return '<p>A section ends here.</p>\n<hr>\n<p>A new section begins here.</p>'
  if (voidElements.has(element.tag)) return `<${element.tag}>`

  return `<${element.tag}>${element.tag === 'a' ? 'Explore HTML' : `A ${element.tag} element`}</${element.tag}>`
}

function Editor({ label, value, onChange }: EditorProps) {
  return (
    <label className="flex min-h-[180px] flex-1 flex-col overflow-hidden border-b border-[var(--color-border)] last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
      <span className="border-b border-[var(--color-border)] bg-[var(--color-page)] px-4 py-2 font-mono text-xs font-medium text-[var(--color-muted)]">{label}</span>
      <textarea
        className="min-h-[145px] flex-1 resize-y bg-[var(--color-surface)] p-4 font-mono text-xs leading-5 text-[var(--color-text)] outline-none focus:bg-[var(--color-page)]"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        spellCheck="false"
        aria-label={`${label} code`}
      />
    </label>
  )
}

export function CodePlayground({ element, onClose }: CodePlaygroundProps) {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [javascript, setJavascript] = useState('')

  useEffect(() => {
    if (!element) return

    setHtml(createHtmlExample(element))
    setCss(`body {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  color: #202536;\n}\n\n${element.tag} {\n  color: #4f46e5;\n}`)
    setJavascript('')
  }, [element])

  useEffect(() => {
    if (!element) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [element, onClose])

  const previewDocument = useMemo(
    () => `<!doctype html><html><head><style>${css.replace(/<\/style>/gi, '<\\/style>')}</style></head><body>${html}<script>${javascript.replace(/<\/script>/gi, '<\\/script>')}<\/script></body></html>`,
    [css, html, javascript],
  )

  if (!element) {
    return null
  }

  const category = categories[element.category]
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-modal-backdrop)] p-4 sm:p-8" onMouseDown={(event) => event.currentTarget === event.target && onClose()}>
      <aside className="max-h-full w-full max-w-[1400px] overflow-y-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]" role="dialog" aria-modal="true" aria-labelledby="playground-title">
        <header className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] px-4 py-3">
          <div>
            <p className="text-[10px] uppercase tracking-[.09em] text-[var(--color-subtle)]">{category.name}</p>
            <h2 id="playground-title" className="mt-1 font-mono text-lg font-medium text-[var(--color-heading)]">&lt;{element.tag}&gt; playground</h2>
            <p className="mt-1 text-xs text-[var(--color-muted)]">{element.description}</p>
          </div>
          <button className="text-[22px] leading-none text-[var(--color-subtle)]" onClick={onClose} aria-label="Close code playground">×</button>
        </header>
        <div className="grid lg:grid-cols-3">
          <Editor label="HTML" value={html} onChange={setHtml} />
          <Editor label="CSS" value={css} onChange={setCss} />
          <Editor label="JS" value={javascript} onChange={setJavascript} />
        </div>
        <section className="border-t border-[var(--color-border)]">
          <h3 className="border-b border-[var(--color-border)] bg-[var(--color-page)] px-4 py-2 font-mono text-xs font-medium text-[var(--color-muted)]">RENDER</h3>
          <iframe className="h-64 w-full bg-white" srcDoc={previewDocument} sandbox="allow-scripts" title={`${element.tag} example preview`} />
        </section>
      </aside>
    </div>
  )
}
