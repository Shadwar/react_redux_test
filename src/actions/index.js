export const ActionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    DELETE_ITEM: 'DELETE_ITEM'
};

/**
 * Добавление нового товара
 * @param {string} title Название
 * @param {string} barcode Штрихкод
 */
export const addItem = (title, barcode) => {
    return {
        type: ActionTypes.ADD_ITEM,
        title, barcode
    }
};

/**
 * Удаление товара по его id
 * @param {number} id Ид.номер
 */
export const deleteItem = (id) => {
    return {
        type: ActionTypes.DELETE_ITEM,
        id
    }
};

