import reducer from '../../src/reducers/taxRate'

describe('tax reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(5);
    });

    it('should handle UPDATE_TAX', () => {
        let taxRate = 7;
        expect(
            reducer([], {
                type: 'UPDATE_TAX',
                taxRate
            })
        ).toEqual([7]);
        
        taxRate = -5;
        expect(
            reducer([], {
                type: 'UPDATE_TAX',
                taxRate
            })
        ).toEqual([0]);
    });
});