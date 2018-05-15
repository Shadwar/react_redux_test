import { ActionTypes } from '../actions';
import { getItems } from '../api';

/**
 * Редьюсер товаров, добавляет и удаляет по событию.
 * @param {Array} state Массив товаров
 * @param {object} action 
 */
const items = (state=[], action) => {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            const lastId = state.length ? state[state.length-1].id + 1 : 1;
            return [...state, 
                {
                    id: lastId,
                    title: action.title,
                    barcode: action.barcode
                }
            ];

        case ActionTypes.DELETE_ITEM:
            const filtered = state.filter((item) => item.id != action.id);
            for (let i = 0; i < filtered.length; i++) {
                filtered[i].id = i+1;
            }
            return filtered;
        
        case ActionTypes.GET_ITEMS:
            return [...state, ...getItems()];

        default:
            return state;
    }
};

export default items;
