import { iocNames } from '../iocNames';
import { CardsStore } from '../stores/CardsStore';
import { useInject } from './useInject';

export function useCardsStore() {
  return useInject<CardsStore>(iocNames.cardsStore);
}
