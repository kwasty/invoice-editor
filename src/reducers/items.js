const validateItemAndFix = (item) => {
    item.price = item.price < 0 ? 0 : item.price;
    item.quantity = item.quantity < 0 ? 0 : item.quantity;
    item.quantity = item.quantity % 1 !== 0 ? 0 : item.quantity;

    return item;
}

const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    price: '',
                    quantity: '' 
                }
            ];
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.id);
        case 'UPDATE_ITEM':
            return state.map(item =>
                (item.id === action.item.id)
                    ? item = validateItemAndFix(action.item)
                    : item
            );
        default:
            return state;
    }
};

export default items;