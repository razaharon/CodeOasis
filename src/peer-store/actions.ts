import { AnyAction } from "redux"

export const removePeer = (peerId: number): AnyAction => {
    return {
        type: 'REMOVE',
        payload: peerId
    }
}