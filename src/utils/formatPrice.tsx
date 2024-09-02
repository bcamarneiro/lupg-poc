const formatPrice = (price: number, currency: string) => {
  // hardcoding locale to match figma. otherwise use `navigator.language`
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
};

export default formatPrice;
