type Color = {
  [key: string]: {
    text: string;
    background: string;
    primary: string;
    foreground: string;
    inputBackground?: string;
    inputBorder?: string;
    inputPlaceholder?: string;
  };
};

const Colors: Color = {
  light: {
    text: '#000000',
    background: '#F5F5F5',
    primary: '#FFCB11',
    foreground: '#FFFFFF',
    inputBackground: '#FFFFFF',
    inputBorder: '#000000',
    inputPlaceholder: '#5B5858',
  },
  dark: {
    text: '#FFFFFF',
    background: '#151515',
    primary: '#FFCB11',
    foreground: '#232327',
    inputBackground: '#232327',
    inputBorder: '#FFFFFF',
    inputPlaceholder: '#AFAFAF',
  },
};

export default Colors;
