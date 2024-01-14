import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    textStyles: {
      text: {
        // you can also use responsive styles
        fontfamily: "ClashDisplay Medium",
        fontSize: ['500px', '500px'],
        fontWeight: 'bold',
        lineHeight: '110%',
        letterSpacing: '-2%',
      },
      h2: {
        fontSize: ['36px', '48px'],
        fontWeight: 'semibold',
        lineHeight: '110%',
        letterSpacing: '-1%',
      },
    },
  })

  export default theme;