import React from 'react';
import InvoiceItem from './InvoiceItem'

class Invoice extends React.Component {

    render() {
        const items = this.props.items;

        const itemRows = items.map(item => {
            return (
                <InvoiceItem key={item.id}
                    item={item}
                    onUpdateItem={this.props.onUpdateItem}
                    onDeleteItem={() => this.props.onRemoveItem(item.id)}
                />
            );
        });

        return (
            <div className='Invoice'>
                <table >
                    <thead>
                        <tr>
                            <th>
                                {'ITEM'}
                            </th>
                            <th>
                                {'QTY'}
                            </th>
                            <th>
                                {'PRICE'}
                            </th>
                            <th>
                                {'TOTAL'}
                            </th>
                            <th>
                            </th>
                        </tr>
                    </thead>
                </table>
                <div className='InvoiceBody'>
                    <table>
                        <tbody>
                            {itemRows} 
                        </tbody>
                        
                    </table>
                    
                </div>
                <div onClick={this.props.onAddItem} className='NewItem'>
                    {'New Item'}
                </div>
                
                
            </div>
        )
    }
}

export default Invoice;