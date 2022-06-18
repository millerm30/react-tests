import React, {useState} from 'react';
import {Container} from '../container/Container';

const PRODUCTS = [
  { category: 'Fruits', price: '$1.00', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1.00', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2.00', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2.00', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4.00', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1.00', stocked: true, name: 'Peas' },
  { category: 'Vegetables', price: '$10.00', stocked: true, name: 'Turnip' },
];

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange,}) {
  return (
      <form className="myForm container flex flex-col items-center m-auto bg-white rounded-lg mt-5 mb-5 p-10 sm:w-full">
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          onChange={(e) => onFilterTextChange(e.target.value)}
          className="border-2 border-gray-300 px-2 rounded-lg"
        />
        <label>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onInStockOnlyChange(e.target.checked)}
          />{" "}
          Only show products in stock
        </label>
      </form>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className="m-auto w-3/4 table-auto border-collapse border border-slate-400 lg:w-1/2">
      <thead className='border border-slate-400'>
        <tr className='border border-slate-400'>
          <th className='border border-slate-400 text-left'>Name</th>
          <th className='border border-slate-400'>Price</th>
        </tr>
      </thead>
      <tbody className='border border-slate-400'>{rows}</tbody>
    </table>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );

  return (
    <tr className='border border-slate-400'>
      <td className='border border-slate-400'>{name}</td>
      <td className='border border-slate-400 text-center'>{product.price}</td>
    </tr>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan='2'>{category}</th>
    </tr>
  );
}

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <Container title="React Thinking" description="React Document Testing">
      <div className="container">
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStockOnlyChange={setInStockOnly}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    </Container>
  );
}

export default function App() {
    return <FilterableProductTable products={PRODUCTS} />
}