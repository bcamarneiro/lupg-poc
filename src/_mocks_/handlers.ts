import { http, HttpResponse, delay, passthrough } from 'msw';
import MOCKED_PRODUCTS from './DB';

export const handlers = [
  http.get('https://products.dummy.api/products', async ({ request }) => {
    await delay(1000);

    const search = new URL(request.url).searchParams.get('search');
    if (search) {
      return HttpResponse.json(
        MOCKED_PRODUCTS.filter((product) => {
          return (
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase()) ||
            product.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
          );
        }),
      );
    }
    // ...and respond to them using this JSON response.
    return HttpResponse.json(MOCKED_PRODUCTS);
  }),

  http.get('/src/assets/*', passthrough),
  http.get('https://s3-alpha-sig.figma.com/img/*', passthrough),
  http.get('https://imgs.search.brave.com/*', passthrough),
  http.get('https://fonts.gstatic.com/*', passthrough),
  http.get('/src/*', passthrough),
  http.get('/logo.svg', passthrough),
];
