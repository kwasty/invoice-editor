import reducer from '../../src/reducers/items'

describe('items reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual([]);
    });

    it('should handle ADD_ITEM', () => {
        const id = 0;
        expect(
            reducer([], {
                type: 'ADD_ITEM',
                id
            })
        ).toEqual([
            {
                id,
                price: '',
                quantity: '' 
            }
        ]);

        expect(
            reducer([
                {
                    id: 0,
                    price: 60,
                    quantity: 70 
                }
            ], {
              type: 'ADD_ITEM',
              id: 1
            })
          ).toEqual([
                {
                    id: 0,
                    price: 60,
                    quantity: 70 
                },
                {
                    id: 1,
                    price: '',
                    quantity: '' 
                }
          ]);
    });

    it('should handle UPDATE_ITEM', () => {
        const item = {
            id: 1,
            price: 50,
            quantity: 70,
        };
        expect(
            reducer([
                {
                    id: 0,
                    price: 40,
                    quantity: 20 
                },
                {
                    id: 1,
                    price: '',
                    quantity: '' 
                }
            ], {
                type: 'UPDATE_ITEM',
                item
            })
        ).toEqual([
            {
                id: 0,
                price: 40,
                quantity: 20 
            },
            {
                id: 1,
                price: 50,
                quantity: 70,
            }
            
        ]);

        expect(
            reducer([
                {
                    id: 0,
                    price: 40,
                    quantity: 20 
                }
            ], {
                type: 'UPDATE_ITEM',
                item
            })
        ).toEqual([
            {
                id: 0,
                price: 40,
                quantity: 20 
            }
        ]);
    });

    it('should handle REMOVE_ITEM', () => {
        const id = 1;

        expect(
            reducer([], {
                type: 'REMOVE_ITEM',
                id
            })
        ).toEqual([]);
        expect(
            reducer([
                {
                    id: 0,
                    price: 40,
                    quantity: 20 
                }
            ], {
                type: 'REMOVE_ITEM',
                id
            })
        ).toEqual([
            {
                id: 0,
                price: 40,
                quantity: 20 
            }
        ]);
        expect(
            reducer([
                {
                    id: 0,
                    price: 40,
                    quantity: 20 
                },
                {
                    id: 1,
                    price: 60,
                    quantity: 70 
                }
            ], {
                type: 'REMOVE_ITEM',
                id
            })
        ).toEqual([
            {
                id: 0,
                price: 40,
                quantity: 20 
            }
        ]);
    });

    
})