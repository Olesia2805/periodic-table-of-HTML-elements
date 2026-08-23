export type Category =
  | 'root'
  | 'metadata'
  | 'text'
  | 'grouping'
  | 'forms'
  | 'sectioning'
  | 'tabular'
  | 'interactive'
  | 'media'
  | 'embedded'

export type ElementData = {
  tag: string
  category: Category
  description: string
  position: string
}
