import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

const colors = {
  red: {
    '400': '#FF3B4B',
    '500': '#F2293A',
    '600': '#BA2634',
  }
}

const styles = {
  global: {
    body: {
      bg: 'gray.900',
      color: 'gray.100',
    }
  }
}

export const theme = extendTheme({colors, styles})