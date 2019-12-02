const theme = {
  colors: {
    // primaries
    red: '#EC3944',
    slate: 'currentColor',
    chalk: '#F9EFE6',
    white: '#FFFFFF',
    // secondaries
    lightSlate: '#34476C',
    mint: '#27C497',
    lightGrey: '#F5F5F4',
    darkSlate: '#0C0E13',
    mediumGrey: '#A9A9A9',
    pencil: '#F6D04C',
    darkRed: '#bC1A23',
    blue: '#4571C9',
    lightRed: '#F56B73',
  },
}

theme.combos = [
  {
    foreground: theme.colors.red,
    background: theme.colors.white,
    name: 'Red and White',
  },
  {
    foreground: theme.colors.blue,
    background: theme.colors.white,
    name: 'Blue and White',
  },
  {
    foreground: theme.colors.chalk,
    background: theme.colors.red,
    name: 'Chalk and Red',
  },
  {
    foreground: theme.colors.darkSlate,
    background: theme.colors.mint,
    name: 'Dark Slate and Mint',
  },
  {
    foreground: theme.colors.red,
    background: theme.colors.slate,
    name: 'Red and Slate',
  },
  {
    foreground: theme.colors.pencil,
    background: theme.colors.blue,
    name: 'Pencil and Blue',
  },
  {
    foreground: theme.colors.darkSlate,
    background: theme.colors.pencil,
    name: 'Dark Slate and Pencil',
  },
]

export default theme
