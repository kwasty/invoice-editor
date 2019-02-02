import React from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Footer from './Footer'
import Invoice from './Invoice'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextId: 0,
      items: [],
      taxRate: 5,
    };
  }

  handleAddItem() {
    const items = this.state.items;
    const nextId = this.state.nextId + 1;

    this.setState({
      items: items.concat([{
        key: nextId,
        price: null,
        quantity: null
      }]),

      nextId: nextId
    });
  }

  handleQuantityChange(key, e) {
    const items = this.state.items.slice();
    items.find(x => x.key === key).quantity = e.target.value;

    this.setState({
      items: items
    });
  }

  handlePriceChange(key, e) {
    const items = this.state.items.slice();
    items.find(x => x.key === key).price = e.target.value;

    this.setState({
      items: items
    });
  }

  handleNameChange(key, e) {
    const items = this.state.items.slice();
    items.find(x => x.key === key).name = e.target.value;

    this.setState({
      items: items
    });
  }

  handleTaxChange(e) {
    this.setState({taxRate: e.target.value});
  }

  handleDeleteItem(key) {
     const items = this.state.items.filter(item => item.key !== key);

    this.setState({
      items: items
    });
  }

  render() {
    const reducer = function (acc, item) {
      if (isNaN(item.price) || isNaN(item.quantity) || item.price < 0 || item.quantity < 0) {
        return acc;
      }
      return acc + (item.price * Math.round(item.quantity)); 
    };

    const items = this.state.items;
    const subTotal = items.reduce(reducer, 0);
    const taxRate = this.state.taxRate;

    

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Invoice Editor</h2>
        </div>

        
        <div className="Invoice">
          <Invoice 
            items={items}
            onClick={this.handleAddItem.bind(this)}
            onNameChange={this.handleNameChange.bind(this)}
            onPriceChange={this.handlePriceChange.bind(this)}
            onQuantityChange={this.handleQuantityChange.bind(this)}
            onDeleteItem={this.handleDeleteItem.bind(this)}
          />
          <Footer 
            subtotal={subTotal}
            taxRate={taxRate}
            onChange={this.handleTaxChange.bind(this)}
          />
        </div>
        
      </div>
    );
  }
}


export default App;
