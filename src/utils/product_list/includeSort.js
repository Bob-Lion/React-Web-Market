export function includeSort(product, includeWorld) {
  let sortable_data = [];
  if (includeWorld === 'saleProduct') {
    const saleProduct = product.filter((item) => {
      return item.saleRatio != 0;
    });
    sortable_data = ['할인상품', saleProduct.length];
  } else if (includeWorld === 'stock') {
    const limitstock = product.filter((item) => {
      return item.stock <= 5;
    });
    sortable_data = ['한정수량', limitstock.length];
  } else if (includeWorld === 'bobLionOnly') {
    const bobLionOnly = product.filter((item) => {
      return item.bobLionOnly;
    });
    sortable_data = ['Bob-lion Only', bobLionOnly.length];
  }
  return sortable_data;
}
