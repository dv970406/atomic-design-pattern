export type TWidths =
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

export interface IWidthPalette {
  [key: string]: string;
}

export const widthPalette: IWidthPalette = {
  default: '',
  fv: '100vw',
  full: '100%',
  xxl: '320px',
  xl: '280px',
  lg: '240px',
  md: '200px',
  sm: '160px',
  xs: '100px',
  xxs: '50px',
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
