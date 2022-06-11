import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    app: {
      header: '#EA5D6C',
      background_primary: '#922246',
      background_primary_light: 'rgb(146, 34, 70,0.3)',
      background_secondary: '#FFFFFF',
      text: '#FFFFFF',
      text_detail: '#922246',
      title: '#45090E',
      line: '#45090E',
      purple_luxury: '#7646A5',
      blue_catalina_dark_shade: '#081871',
      main: '#D86593',
      main_light: '#FFFFFF',
      success: '#1CCF84',
      success_chateau_green: '#098036',
      success_chateau: '#7DBD59',
    },
    gray: {
      '900': '#181b23',
      '800': '#1F2029',
      '700': '#353646',
      '600': '#4b4d63',
      '500': '#616480',
      '400': '#797d9a',
      '300': '#9699b0',
      '200': '#b3b5c6',
      '100': '#d1d2dc',
      '50': '#eeeef2',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'app.background_primary',
        color: 'gray.50',
      },
    },
  },
});
