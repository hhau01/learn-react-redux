import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // don't try to manipulate state, instead do this
            // return state.concat([action.payload.data]);
            // insert to front of array
            return [ action.payload.data, ...state ]; // [city, city, city]
    }

    return state;
}