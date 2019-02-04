let nextItemId = 0;
export const addItem = () => ({
    type: 'ADD_ITEM',
    id: nextItemId++
});

export const removeItem = id => ({
    type: 'REMOVE_ITEM',
    id
});

export const updateItem = item => ({
    type: 'UPDATE_ITEM',
    item
});

export const updateTax = taxRate => ({
    type: 'UPDATE_TAX',
    taxRate
});