/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../../Components/Loading/Loading';
import Categories from '../Categories/Categories';
import CategoryList from '../CategoryList/CategoryList';

const CategoryContainer = () => {
  const [products, setProducts] = useState([]);
  const {
    data: product = [],
    isLoading,
    refetch
  } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/products`);
      const data = await res.json();
      setProducts(data);
      return data;
    }
  });

  const allProducts = (product) => {
    setProducts(product);
  };

  const filterResult = (catItem) => {
    // console.log(catItem);
    const result = product.filter((signleProduct) => {
      const data = signleProduct.category === catItem;
      return data;
    });
    // console.log(result);

    setProducts(result);
    refetch;
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="lg:flex">
      <div>
        <CategoryList
          allProducts={allProducts}
          product={product}
          filterResult={filterResult}></CategoryList>
      </div>
      <div className="flex-1 lg:ml-10 ">
        <Categories products={products}></Categories>
      </div>
    </div>
  );
};

export default CategoryContainer;
