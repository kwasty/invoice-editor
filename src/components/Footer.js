import React from 'react';

class Footer extends React.Component {
    validateTax(e) {
        let display = 'none';
        let msg = '';
        if (e.target.value < 0) {
            display = 'inherit';
            msg = 'Tax must be greater than or equal to 0.';
        }

        this.refs.taxValidate.style.display = display;
        this.refs.taxValidate.innerHTML = msg;
    }

    render() {
        const subtotal = this.props.subTotal;
        const taxTotal = this.props.taxTotal;
        const total = this.props.total;

        return (
            <table className="Footer">
                <tbody>
                    <tr>
                        <td className="Left">{'Subtotal'}</td>
                        <td className="Right">{'$' + subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="Left">
                            {'Tax '}
                            <input 
                                defaultValue={this.props.tax}
                                type='number' min='0'
                                onChange={(e) => {this.props.onChange(e); this.validateTax(e)}}
                            />
                            {'%'}
                            <p className='Validate' ref='taxValidate'></p>
                        </td>
                        <td className="Right">{'$' + taxTotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td className="Left">{'Total'}</td>
                        <td className="Right">{'$' + total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Footer;