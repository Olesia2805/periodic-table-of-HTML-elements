import type { Category } from '../types'

export type CategoryData = {
  name: string
  color: string
  backgroundClass: string
}

export const categories: Record<Category, CategoryData> = {
  root: { name: 'Root element', color: '#f2536d', backgroundClass: 'bg-[#f9cad3]' },
  metadata: { name: 'Metadata & scripting', color: '#6070c9', backgroundClass: 'bg-[#ccd2f2]' },
  text: { name: 'Text-level semantics', color: '#c7c34d', backgroundClass: 'bg-[#e6e6ad]' },
  grouping: { name: 'Grouping content', color: '#e36924', backgroundClass: 'bg-[#f9c7ac]' },
  forms: { name: 'Forms', color: '#64ad3d', backgroundClass: 'bg-[#c7e4b7]' },
  sectioning: { name: 'Document sections', color: '#8d9000', backgroundClass: 'bg-[#d9db9c]' },
  tabular: { name: 'Tabular data', color: '#c97850', backgroundClass: 'bg-[#efc8b6]' },
  interactive: { name: 'Interactive elements', color: '#c7bdc8', backgroundClass: 'bg-[#e1d9e2]' },
  media: { name: 'Image & multimedia', color: '#0fcfd1', backgroundClass: 'bg-[#a7e8e9]' },
  embedded: { name: 'Embedding content', color: '#7956f7', backgroundClass: 'bg-[#d7cafa]' },
}
