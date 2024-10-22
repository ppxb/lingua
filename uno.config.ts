import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'bg-base': 'bg-white dark:bg-black',
      'border-base': 'border-gray:20',
      'z-dialog': 'z-500',
    },
    [/^btn-simple-(.*)$/, ([,color]) => {
      return [
        `@hover:border-${color}/50 @hover:color-${color} @hover:opacity-100`,
        `active:bg-${color}/10`,
        `disabled:opacity-50 disabled:pointer-events-none`,
        `border border-base border-rounded-lg`,
        `flex gap-1 items-center justify-center`,
      ].join(' ')
    }],
  ],
  theme: {
    colors: {
      primary: '#0a9cae',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',
      timeouts: {
        warning: 7000,
        failure: 10000,
      },
      fonts: {
        sans: 'DM Sans',
        mono: 'Space Mono',
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
