import { COLOR_PALETTE } from './styling-helper';

export function isBrowser() {
  if (typeof window !== 'undefined') {
    return true;
  } else return false;
}

export type PokemonTypes = 'fire' | 'flying' | 'grass' | 'poison' | 'bug' | 'dark' | 'dragon' | 'electric' | 'fairy' | 'fighting' | 'ghost' | 'ground' | 'ice' | 'normal' | 'psychic' | 'rock' | 'steel' | 'water';
export function TypeToColor(type: PokemonTypes) {
  switch (type) {
    case 'fire':
      return COLOR_PALETTE.RED_2;
    case 'flying':
      return COLOR_PALETTE.GREY_3;
    case 'grass':
      return COLOR_PALETTE.GREEN_1;
    case 'poison':
      return COLOR_PALETTE.PURPLE_1;
    case 'bug':
      return COLOR_PALETTE.GREEN_2;
    case 'dark':
      return COLOR_PALETTE.BLACK_1;
    case 'dragon':
      return COLOR_PALETTE.PURPLE_3;
    case 'electric':
      return COLOR_PALETTE.ORANGE_2;
    case 'fairy':
      return COLOR_PALETTE.PINK_1;
    case 'fighting':
      return COLOR_PALETTE.ORANGE_1;
    case 'ghost':
      return COLOR_PALETTE.PURPLE_2;
    case 'ground':
      return COLOR_PALETTE.BROWN_2;
    case 'ice':
      return COLOR_PALETTE.BLUE_3;
    case 'normal':
      return COLOR_PALETTE.GREY_2;
    case 'psychic':
      return COLOR_PALETTE.PINK_2;
    case 'rock':
      return COLOR_PALETTE.BROWN_1;
    case 'steel':
      return COLOR_PALETTE.GREEN_3;
    case 'water':
      return COLOR_PALETTE.BLUE_1;
  }
}
