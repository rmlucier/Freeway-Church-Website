/**
 * Freeway Church Brand Configuration
 * 
 * This file contains all brand-related constants including colors, typography,
 * and logo paths based on the official brand guide.
 */

// Brand Colors (official Freeway Church brand guide)
export const brandColors = {
  primary: {
    darkGray: '#333333',
    lightGray: '#CCCCCC', 
    black: '#000000',
    white: '#FFFFFF',
  },
  secondary: {
    darkTeal: '#003333',
    brightTeal: '#006666',
  },
  tertiary: {
    gold: '#996600',
  },
} as const;

// Typography Configuration
export const typography = {
  fonts: {
    // Primary brand font (may need web alternatives)
    usual: {
      extraBold: 'Usual-ExtraBold, "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      light: 'Usual-Light, "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
      regular: 'Usual-Regular, "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    },
    // Web-safe fallbacks
    fallback: {
      headers: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      subheads: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
  },
  weights: {
    extraBold: 800,
    regular: 400,
    light: 300,
  },
} as const;

// Logo Paths
export const logoPaths = {
  horizontal: {
    outline: {
      light: '/images/logos/horizontal/outline/freeway-church-horizontal-outline-light.png',
      dark: '/images/logos/horizontal/outline/freeway-church-horizontal-outline-dark.png',
    },
    block: {
      light: '/images/logos/horizontal/block/freeway-church-horizontal-block-light.png',
      dark: '/images/logos/horizontal/block/freeway-church-horizontal-block-dark.png',
    },
    plain: {
      light: '/images/logos/horizontal/plain/freeway-church-horizontal-plain-light.png',
      dark: '/images/logos/horizontal/plain/freeway-church-horizontal-plain-dark.png',
    },
  },
  stacked: {
    outline: {
      light: '/images/logos/stacked/outline/freeway-church-stacked-outline-light.png',
      dark: '/images/logos/stacked/outline/freeway-church-stacked-outline-dark.png',
    },
    block: {
      light: '/images/logos/stacked/block/freeway-church-stacked-block-light.png',
      dark: '/images/logos/stacked/block/freeway-church-stacked-block-dark.png',
    },
    plain: {
      light: '/images/logos/stacked/plain/freeway-church-stacked-plain-light.png',
      dark: '/images/logos/stacked/plain/freeway-church-stacked-plain-dark.png',
    },
  },
  icon: {
    outline: {
      light: '/images/logos/icon/outline/freeway-church-icon-outline-light.png',
      dark: '/images/logos/icon/outline/freeway-church-icon-outline-dark.png',
    },
    block: {
      light: '/images/logos/icon/block/freeway-church-icon-block-light.png',
      dark: '/images/logos/icon/block/freeway-church-icon-block-dark.png',
    },
    plain: {
      light: '/images/logos/icon/plain/freeway-church-icon-plain-light.png',
      dark: '/images/logos/icon/plain/freeway-church-icon-plain-dark.png',
    },
  },
} as const;

// Brand Usage Guidelines
export const brandGuidelines = {
  logoUsage: {
    // Recommended logo variations for different contexts
    header: 'horizontal.outline', // or horizontal.plain
    footer: 'horizontal.plain',
    mobile: 'icon.outline',
    social: 'icon.block',
    print: 'horizontal.block',
  },
  typography: {
    // Font usage hierarchy
    h1: 'usual.extraBold',
    h2: 'usual.extraBold',
    h3: 'usual.regular',
    h4: 'usual.regular',
    h5: 'usual.regular',
    h6: 'usual.regular',
    subtitle: 'usual.light',
    body: 'usual.regular',
    caption: 'usual.light',
  },
  colors: {
    // Recommended color applications
    backgrounds: {
      primary: 'primary.black',
      secondary: 'primary.darkGray',
      accent: 'secondary.darkTeal',
      light: 'primary.white',
    },
    text: {
      primary: 'primary.white', // on dark backgrounds
      secondary: 'primary.black', // on light backgrounds
      accent: 'tertiary.gold',
      muted: 'primary.lightGray',
    },
    buttons: {
      primary: 'tertiary.gold',
      secondary: 'secondary.brightTeal',
      outline: 'transparent',
    },
  },
} as const;

// Utility function to get logo path
export function getLogoPath(
  type: keyof typeof logoPaths,
  style: keyof typeof logoPaths.horizontal,
  variant: 'light' | 'dark'
) {
  return logoPaths[type][style][variant];
}

// Utility function to get brand color
export function getBrandColor(category: string, color: string): string {
  // Type-safe color retrieval
  const colorMap = brandColors as any;
  return colorMap[category]?.[color] || '#000000';
}