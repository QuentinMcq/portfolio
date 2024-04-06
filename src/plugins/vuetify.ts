import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import type { App } from 'vue'

const global = {
  ripple: false,
}

const icons = {
  iconfont: 'mdiSvg',
}

export function initVuetify(app: App<Element>) {
  const vuetifyInstance = createVuetify({
    defaults: {
      global,
      icons,
      VBtn: {
        style: 'transition: transform 0.6s',
      },
      VChip: {
        style: 'transition: transform 0.6s',
      },
      VContainer: {
        style: 'padding: 14px',
      },
    },
  })

  app.use(vuetifyInstance)
}
