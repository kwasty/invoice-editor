import * as actions from '../../src/actions/index';

describe('actions', () => {
  it('should create an action to add an item', () => {
    const id = 0;
    const expectedAction = {
      type: 'ADD_ITEM',
      id
    };
    expect(actions.addItem()).toEqual(expectedAction)
  });

  it('should create an action to add an item with increasing item id', () => {
    const id = 2;
    const expectedAction = {
      type: 'ADD_ITEM',
      id
    };

    actions.addItem();
    expect(actions.addItem()).toEqual(expectedAction)
  });

  it('should create an action to remove an item', () => {
    const id = 2;
    const expectedAction = {
      type: 'REMOVE_ITEM',
      id
    };

    expect(actions.removeItem(id)).toEqual(expectedAction)
  });

  it('should create an action to update an item', () => {
    const item = {
      id: 2,
      price: 20,
      quantity: 10
    };

    const expectedAction = {
      type: 'UPDATE_ITEM',
      item
    };

    expect(actions.updateItem(item)).toEqual(expectedAction)
  });

  it('should create an action to update the tax rate', () => {
    const taxRate = 6;
    const expectedAction = {
      type: 'UPDATE_TAX',
      taxRate
    };

    expect(actions.updateTax(taxRate)).toEqual(expectedAction)
  });
});