import { ActionTypes } from '../actions';

/**
 * Редьюсер товаров, добавляет и удаляет по событию.
 * @param {Array} state Массив товаров
 * @param {object} action 
 */
const items = (state=[], action) => {
    console.log(state, action);
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
            return state.filter((item) => item.id != action.id);

        default:
            return state;
    }
};

export default items;
