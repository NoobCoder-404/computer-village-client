/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../../Components/Loading/Loading';
import Categories from '../Categories/Categories';
import CategoryList from '../CategoryList/CategoryList';

const CategoryContainer = () => {
  //const [products, setProducts] = useState([]);
  const {
    data: products = [],
    refetch,
    isLoading
  } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(`categoryProducts.json`);
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loading />;
  }

  // useEffect(() => {
  //   fetch('categoryProducts.json')
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const filterResult = (catItem) => {
    console.log(catItem);
    const result = products.filter((product) => {
      return product.category === catItem;
    });
    console.log(result);
    refetch;
    // setProducts(result);
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
