import { imagePaths } from "../../Pages/Categories/data";

export const getCategoryListAPI = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/products/categories`);
    const productList = await response.json();

    const result = productList.map((item) => {
      return { title: item, image: imagePaths[item] };
    });

    return result;
  } catch (error) {
    return error;
  }
};

export const getProductListAPI = async ({ searchData, categoryName }) => {
  let url = "https://dummyjson.com/products";
  if (searchData) {
    url += `/search?q=${data}`;
  } else if (categoryName) {
    url += `/category/${categoryName}`;
  }

  const response = await fetch(url);
  const productList = await response.json();

  return productList.products;
};

export const getCategoryWithProductsAPI = async (productCount = 4) => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const categoryNames = await response.json();

  const categoriesWithProducts = await Promise.all(
    categoryNames.map(async (categoryName) => {
      const productsResponse = await fetch(
        `https://dummyjson.com/products/category/${categoryName}?limit=${productCount}`
      );
      const products = await productsResponse.json();
      return { name: categoryName, products };
    })
  );

  return categoriesWithProducts;
};

export const getSingleProductAPI = async (id = 4) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const result = await response.json();
  return result;
};

export const getMeAPI = async (token) => {
  const response = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const user = await response.json();
  return user;
};

export const loginUserAPI = async () => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
      expiresInMins: 36000, 
    }),
  });

  const user = await response.json();
  return user.token;
};
