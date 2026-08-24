import type { Category } from '../types'

export type CategoryData = {
  name: string
  accentVariable: string
  backgroundVariable: string
}

export const categories: Record<Category, CategoryData> = {
  root: { name: 'Root element', accentVariable: '--color-root-accent', backgroundVariable: '--color-root' },
  metadata: { name: 'Metadata & scripting', accentVariable: '--color-metadata-accent', backgroundVariable: '--color-metadata' },
  text: { name: 'Text-level semantics', accentVariable: '--color-text-level-accent', backgroundVariable: '--color-text-level' },
  grouping: { name: 'Grouping content', accentVariable: '--color-grouping-accent', backgroundVariable: '--color-grouping' },
  forms: { name: 'Forms', accentVariable: '--color-forms-accent', backgroundVariable: '--color-forms' },
  sectioning: { name: 'Document sections', accentVariable: '--color-sectioning-accent', backgroundVariable: '--color-sectioning' },
  tabular: { name: 'Tabular data', accentVariable: '--color-tabular-accent', backgroundVariable: '--color-tabular' },
  interactive: { name: 'Interactive elements', accentVariable: '--color-interactive-accent', backgroundVariable: '--color-interactive' },
  media: { name: 'Image & multimedia', accentVariable: '--color-media-accent', backgroundVariable: '--color-media' },
  embedded: { name: 'Embedding content', accentVariable: '--color-embedded-accent', backgroundVariable: '--color-embedded' },
}
