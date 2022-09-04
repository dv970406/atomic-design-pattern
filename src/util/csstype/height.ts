export type THeights =
  | 'default'
  | 'fv'
  | 'full'
  | 'xxl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs'
  | 'xxs'
  | '5%'
  | '10%'
  | '20%'
  | '30%'
  | '40%'
  | '50%'
  | '60%'
  | '70%'
  | '80%'
  | '90%';

export interface IHeightPalette {
  [key: string]: string;
}

export const heightPalette: IHeightPalette = {
  default: '',
  fv: '100vh',
  full: '100%',
  xxl: '600px',
  xl: '540px',
  lg: '480px',
  md: '420px',
  sm: '360px',
  xs: '300px',
  xxs: '240px',
  '5%': '5%',
  '10%': '10%',
  '20%': '20%',
  '30%': '30%',
  '40%': '40%',
  '50%': '50%',
  '60%': '60%',
  '70%': '70%',
  '80%': '80%',
  '90%': '90%',
};
