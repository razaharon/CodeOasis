import Peer from "../interfaces/Peer";
import { AnyAction } from "redux";
import PeersData from '../assets/PeersData';

const initialState: Peer[] = PeersData;

export const reducer = (state: Peer[] = initialState, action: AnyAction): Peer[] => {
    switch (action.type) {
        case 'REMOVE':
            return state.filter(peer => peer.id !== action.payload);
        default:
            return state;
    }
}