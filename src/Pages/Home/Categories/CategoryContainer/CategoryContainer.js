/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../../Components/Loading/Loading';
import Categories from '../Categories/Categories';
import CategoryList from '../CategoryList/CategoryList';

const CategoryContainer = () => {
  //const [products, setProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { data: product = [], isLoading } = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
      const res = await fetch(`categoryProducts.json`);
      const data = await res.json();
      setProducts(data);
      return data;
    }
  });

  // useEffect(() => {
  //   fetch('categoryProducts.json')
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const allProducts = (product) => {
    setProducts(product);
  };

  const filterResult = (catItem) => {
    console.log(catItem);
    const result = product.filter((signleProduct) => {
      const data = signleProduct.category === catItem;
      return data;
    });
    console.log(result);
    setProducts(result);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex">
      <div>
        <CategoryList
          allProducts={allProducts}
          product={product}
          filterResult={filterResult}></CategoryList>
      </div>
      <div className="flex-1 ml-10 ">
        <Categories products={products}></Categories>
      </div>
    </div>
  );
};

export default CategoryContainer;
