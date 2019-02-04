export const getSubTotal = items => {
    return items.reduce(
        (acc, item) => acc + (item.price * item.quantity), 0
    );
}

export const getTaxTotal = (items, taxRate) => {
    let taxTotal = getSubTotal(items) * taxRate / 100;

    return isNaN(taxTotal) ? 0 : taxTotal;
}

export const getTotal = (items, taxRate) => {
    let total = getSubTotal(items) + getTaxTotal(items, taxRate);

    return isNaN(total) ? 0 : total;
}