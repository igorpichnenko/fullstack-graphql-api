import 'reflect-metadata';
import { Container } from 'inversify';
import { iocNames } from './iocNames';
import { CardsStore } from './stores/CardsStore';

export function createIOC() {
  const ioc = new Container({ skipBaseClassChecks: true });

  ioc.bind(iocNames.cardsStore).to(CardsStore).inSingletonScope();

  return ioc;
}
