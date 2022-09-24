import {extendTheme} from 'native-base';

export default extendTheme({
  colors: {
    main: '#04AF00',
  },
  components: {
    Input: {
      defaultProps: {
        py: '6',
        borderColor: 'transparent',
        placeholderTextColor: 'gray.600',
        fontWeight: 'medium',
        bg: 'gray.200',
        focusOutlineColor: 'main',
      },
    },
    Pressable: {
      defaultProps: {
        _pressed: {
          opacity: 0.5,
          style: {
            transform: [{scale: 0.99}],
          },
        },
      },
    },
    Button: {
      defaultProps: {
        py: '5',
        rounded: 'lg',
        bg: 'main',

        _text: {
          color: 'white',
          fontWeight: 'bold',
        },
        _pressed: {
          bg: 'green.800',
          transform: [
            {
              scale: 0.99,
            },
          ],
        },
      },
    },
  },
});
