const taxRate = (state = 5, action) => {
    switch (action.type) {
        case 'UPDATE_TAX':
            return [
                action.taxRate < 0 ? 0 : action.taxRate
            ];
        default:
            return state;
    }
};

export default taxRate;