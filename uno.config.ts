import {
    defineConfig,
    presetAttributify,
    presetUno,
    transformerDirectives as Directives,
    transformerVariantGroup as VariantGroup,
} from 'unocss'

export default defineConfig({
    transformers: [VariantGroup(), Directives()],
    presets: [presetUno(), presetAttributify()],
})
