import { createStore, Store, AnyAction } from 'redux';
import { reducer } from './reducers';
import Peer from '../interfaces/Peer';

export const store: Store<Peer[],AnyAction> = createStore(reducer);