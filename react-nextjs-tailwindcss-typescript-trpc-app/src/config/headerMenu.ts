export type HeaderMenu = {
  id: number
  name: string
  url: string
  canonicalURL: string | null
}

const headerMenus: HeaderMenu[] = [
  {id: 1, name: 'サンプル', url: '/sample', canonicalURL: null},
  {id: 2, name: 'フォーム', url: '/form', canonicalURL: null},
  {id: 2, name: 'フォールバック', url: '/fallback', canonicalURL: null},
]

export {headerMenus}
