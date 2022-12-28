let urlApi = 'http://127.0.0.1:8000/api/';
export const environment = {
  production: false,
  url:'http://127.0.0.1:8000/',
  urlAllProducts : urlApi+'products',
  urlListOrde : urlApi+'list-cart',
  urlAddToCart : urlApi+'add-to-cart/',
  urlGetAllCart : urlApi+'list-cart',
  urlIdProduct : urlApi+'product_detail',
  urlRemoveToCart : urlApi+'remove-to-cart/',
  urlUpdateQuantity : urlApi+'update-cart/',
  urlSearch : urlApi,
  urlAddToCartByLike : urlApi+'add-to-cart-by-like/',
  urlDeleteCartByLike : urlApi+'remove-to-cart-by-like/',
  urlGetAllCartByLike : urlApi+'list-cart-by-like',
  urlTrendingPro : urlApi+'trendingProduct',
  urlAllCategories : urlApi+'category_list',
};
