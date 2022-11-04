import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React from 'react';
import sampleImage from '../logo192.png';

import Commerce from '@chec/commerce.js';




const ProductRow = () => {
    return (
        <div className="row product">
            <div className="col-md-2">
                <img src={image} alt={name} height="150" />
            </div>
            <div className="col-md-8 product-detail">
                <h4>{name}</h4>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
            <div className="col-md-2 product-price">
                {price}
            </div>
        </div>
    );
}



const commerce = new Commerce('<your_api_key>');

class ProductList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        }
    }

    componentDidMount() {
        commerce.products.list().then((result) => {
            this.setState({ products: result.data });
        });
    }

    render() {
        return (
            <div className="container main-content">
                {
                    this.state.products.map(product => {
                        return <ProductRow key={product.id} image={product.media.source} name={product.name} description={product.description} price={product.price.formatted_with_symbol} />
                    })
                }
            </div>
        );
    }
}



function App() {
    return (
        <div className="container">
            <header className="header">
                <h1>My Products</h1>
            </header>
            <ProductList />
        </div>
    );
}

