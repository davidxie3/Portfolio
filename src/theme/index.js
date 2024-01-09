// theme/index.js
import { extendTheme } from '@chakra-ui/react'

// Global style overrides
import styles from './styles'

import button from './components/button'
const overrides = {
    styles,
  // Other foundational style overrides go here
    components: {
        Button: button,
    },
}

export default extendTheme(overrides)