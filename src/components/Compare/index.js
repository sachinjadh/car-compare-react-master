import React from 'react'
import './styles.css'

const Compare = ({products}) =>
  <div className="row compare">
    <h1 className="text-center">Result</h1>
    <div className="col-12 mt-5 text-center">
      <table className="table">
        <thead className="thead-default">
          <tr>
            <th></th>
            {products.map(product =>
              <th key={product.id}>
                {product.name}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          <tr className="price">
            <th scope="row">Price</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.price}</td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Mileage</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.mileage}</td>
            )}
          </tr>
          <tr className="price">
            <th scope="row">Year</th>
            {products.map(product =>
              <td key={product.id} className="text-center">{product.description}</td>
            )}
          </tr>
          <tr className="colors">
            <th scope="row">Colors</th>
            {products.map(product =>
              <td key={product.id}>
                {product.colors.map((color, index) =>
                  <span key={index} className={"bg-" + color}></span>
                )}
              </td>
            )}
          </tr>
          <tr className="condition">
            <th scope="row">Condition</th>
            {products.map(product =>
              <td key={product.id} className={product.condition === "Used" ? "bg-red" : "bg-green"}>
                {product.condition}
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  </div>

export default Compare
