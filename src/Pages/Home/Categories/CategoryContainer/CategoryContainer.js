/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import CategoryList from '../CategoryList/CategoryList';

const CategoryContainer = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  useEffect(() => {
    fetch('categoryProducts.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const filterResult = (catItem) => {
    const result = products.filter((product) => {
      return product.category === catItem;
    });
    setProducts(result);
  };
  return (
    <div className="flex">
      <div>
        <CategoryList filterResult={filterResult}></CategoryList>
      </div>
      <div className="flex-1 ml-10 ">
        <Categories products={products}></Categories>
      </div>
    </div>
  );
};

export default CategoryContainer;
