import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'

// theme
export const MAIN_THEME = 'mainTheme'
export const mainTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#4f46e5',
    secondary: '#9333ea',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#22c55e',
    warning: '#f59e0b'
  }
}

// default
const defaults = {
  // VAppBar: {
  //   flat: true,
  //   color: 'primary',
  // },
  VDataTableServer: {
    // locale:"ja-jp",
    // itemsPerPageText: "1ページあたりの表示数",
    // itemsPerPageOptions: [
    //     { value: 5, title: '5件' },
    //     { value: 10, title: '10件' },
    //     { value: 25, title: '25件' },
    //     { value: 50, title: '50件' },
    //     { value: 100, title: '100件' },
    //     // { value: -1, title: 'すべて' }
    // ]
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: false,
    defaults,
    theme: {
      defaultTheme: MAIN_THEME,
      themes: {
        mainTheme
        // mainDarkTheme,
      },
      // primary-darken-9 primary-lighten-9 までできるようにする
      variations: {
        colors: ['primary', 'secondary', 'accent'],
        lighten: 9,
        darken: 9
      }
    },
    components
  })

  nuxtApp.vueApp.use(vuetify)
})
