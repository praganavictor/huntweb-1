import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './style.css';

export default class Product extends Component {
  state = {
    product: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const res = await api.get(`/products/${id}`);

    this.setState({ product: res.data });
  }

  render() {
    const { product } = this.state;

    return (
      <div className="content">
        <div className="back-button"><Link to="/">Voltar</Link></div>
        <div className="product-info">
          <h1 className="product-info-title">{product.title}</h1>
          <div className="product-info-content">
            <p className="product-info-description">{product.description}</p>
            <p className="product-info-url">
              URL: <a href={product.url}>{product.url}</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}