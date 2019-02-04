import * as utils from '../../src/util/util'

describe('utils', () => {
    it('should return the subtotal of all items', () => {
        let items = [];
        expect(
          utils.getSubTotal(items)
        ).toEqual(0);

        items = [
            {
                id: 0,
                price: 70.56,
                quantity: 30
            },
            
            {
                id: 1,
                price: 30.50,
                quantity: 20
            },
            
        ];

        expect(
            utils.getSubTotal(items).toFixed(2)
        ).toEqual('2726.80');
    });

    it('should return the tax on all items', () => {
        let items = [];
        expect(
          utils.getTaxTotal(items, 5)
        ).toEqual(0);

        items = [
            {
                id: 0,
                price: 70.56,
                quantity: 30
            },
            
            {
                id: 1,
                price: 30.50,
                quantity: 20
            },
            
        ];

        expect(
            utils.getTaxTotal(items, 5).toFixed(2)
        ).toEqual('136.34');
    });

    it('should return the total including tax on all items', () => {
        let items = [];
        expect(
          utils.getTotal(items, 6)
        ).toEqual(0);

        items = [
            {
                id: 0,
                price: 70.56,
                quantity: 30
            },
            
            {
                id: 1,
                price: 30.50,
                quantity: 20
            },
            
        ];

        expect(
            utils.getTotal(items, 5).toFixed(2)
        ).toEqual('2863.14');
    });
});