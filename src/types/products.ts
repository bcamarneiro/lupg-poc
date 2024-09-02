type Price = {
  amount: number;
  currency: string;
};

type Image = {
  url: string;
  alt: string;
};

export type Product = {
  uuid: string;
  name: string;
  description: string;
  price: Price;
  tags: string[];
  images: Image[];
};
