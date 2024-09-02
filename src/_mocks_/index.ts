const MOCKED_PRODUCTS = [
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee21',
    name: 'PS5 Controller',
    description: 'A sleek, ergonomic PlayStation controller with responsive buttons and adaptive triggers.',
    price: {
      amount: 70,
      currency: 'USD',
    },
    tags: ['tech', 'black'],
    images: [
      {
        url: 'https://s3-alpha-sig.figma.com/img/cf89/6c20/80a7c5973bdf92e8ced89ea2e286ac26?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lT0r~ktLKmXlrMjQlouKo8JHvai05HfnJVhMopZjnTGstdaTLl4Dod9RqIbu4o41W4RfXpLvpPufPRrsKwQksGvo~Uy2yKmuLCf1ubu0mrGzhYIx-GD23D3C0s0RErBuOAduZQJdNoxakOspaNtxMuWWsKzmofNCha-S4ar8neOZXh4TZiaKvvoDXYtl-SKkLG0yRkwvkhHAyoIzhgPeudEUiS0ZrukFZTgp7Yu6FNICsDW6FEQt1R6JN2rRcaO8ag~VZ~Va4PLxIhtQgL3QuzmWxRx4TQS5zD~4bs~zTYzOxLgOVsHqCjh9wT8VXdxKXrxy9Bsj3f8XRZnrxvYmQA__',
        alt: 'PS5 Controller',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee22',
    name: 'Gamecube',
    description: 'A compact and durable GameCube console with a unique, cube-shaped design.',
    price: {
      amount: 120,
      currency: 'USD',
    },
    tags: ['tech', 'grey'],
    images: [
      {
        url: 'https://s3-alpha-sig.figma.com/img/c2f7/4302/887c4094e1f7b997fda8ba32239c6703?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mcIFBqdnVLPRKPo6MY05ZtBPu5gamJqeeI3nel3H0FYFdZ8ij7nCw9VQLYIzTA8-mffg6JVbYxMYVYu~09bXAi784jr7SnKetCrzZhshlykx79EFEjcd3jUoz3y7M5-v-D9XMioZeqvILJa--Cx9ycD5W1h1RSScCWlzEuVG5ELCmeN-wRKBwV1gCTOpkCBHqWOK-5MxG0KwINhUMrrsGmji7NfshLh69qgaCdcj3ATHitrPK3MAuNsozqKW9hFxk~wq7ZEADglK4fqH4JFeEbcJz77rzQokgzqydg9uq7VzFtXcCYNeOAW~tD~5chRMvc7I9VHHHUBnMAAUv9H8ew__',
        alt: 'Gamecube',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee23',
    name: 'Steam Deck',
    description: 'A powerful, portable Steam Deck console with a vibrant touchscreen and ergonomic controls.',
    price: {
      amount: 350,
      currency: 'USD',
    },
    tags: ['tech', 'black'],
    images: [
      {
        url: 'https://s3-alpha-sig.figma.com/img/b3fa/620e/6205e82d634641c01f40b7ea480e81ef?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BQ9GU5bTowqkTAmGmxoYJNHxwlwuBAJ0UlG5uWoNAps2V2N0Rm3jgoojsqsU5HhNWry5qzpkXS65BbD1SSvhPirMGZMCnumtSEFRya~JCDs7MRzQcyNspSoSIS-zm3gft0SN5lrBm30OVMa3isR1JjnBwSRPjWUmk0T~ExfgHW~q0lJt5ORM1WxLo6qJA2TjntQ2Wx6qYROzwKr4gzMIQFmYjQXqD8jLBjW2OdFe1WPgntHfOxgFvIo7GSuO3aKCWzyYpBxFFLE5A6aUYbPeR9nXfYqT9ttR3KDjf1c2hLfU50sreEOArF12eMG-yxLR64W2r2rpkglFyY1hYupQnw__',
        alt: 'Steam Deck',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee24',
    name: 'Sega Handheld',
    description: 'A classic Sega handheld console with a vibrant screen and a library of iconic games.',
    price: {
      amount: 50,
      currency: 'USD',
    },
    tags: ['tech', 'black'],
    images: [
      {
        url: 'https://s3-alpha-sig.figma.com/img/03e9/943f/5f7a171fc8c275edc70c922aa8450f42?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H7jx5HLgzuYeMAPx0cz97lk6P8~RqPUEiWB45k1K5ATlX2xjXkaaTlqap8FkT~mFdVV20Z6RagrWE9Q5IqCNqoPbNSeJfvDhW3m7wlDvbEphj3GV3~DCTLZMWmvnXkKW73xZN5rJNOLMm7bbJuWO27riX1jaNtDN4BT4QtRXNisWUdWNuHedk~5eqZi8GHFsgDJBvAtOCKViayjDatOvwUXXwTBLWPq1ZPz3XcmokLtqFbfB6m3VRQlf-~fyAnuCZTZR8-bD1BlfxEGHmYQFJ8Lp6Emi9nJTuZiDLIefhA-oC7vNlbCwIbCygxi4aQkV9V2lCYyrxI0FhRn-VZgtkQ__',
        alt: 'Sega Handheld',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee25',
    name: 'Playdate',
    description: 'A charming, pocket-sized Playdate console with a unique crank controller.',
    price: {
      amount: 220,
      currency: 'USD',
    },
    tags: ['tech', 'yellow'],
    images: [
      {
        url: 'https://s3-alpha-sig.figma.com/img/bf53/2805/2412c56653be54158f4c1ef000342177?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z8oRamZJpoRlNbZW5bsrp8RaxPBCyz-0l602eBAswPnUiTTCAe7K9wRdPXReyo6bEXqDXyD4YgTlqx5EGDOzxfvlrep-VexvUjZcQvAzp~4t32VA~9qRgZ1--fqfibwwCMOBYZYJTlhwU0EdkKU8jBomtlwEYs2kQw8h0Mf4KXPrXp8SVjCf3HCJE3ad0UP5aV3~koopyumxL84sdjbS-hVA2I-DCbJ~KFkapR6gRMDObyhLODQ9aH3J8pD3PgOPu2SsCI46vnX67BYV5mad0nbK-tHUbfX5W~kwlM-G0GKwivrAJsVVZSVTSxdoTuX64kI-PRILRqW0AHBOHIz13w__',
        alt: 'Playdate',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee26',
    name: 'Nintendo Switch',
    description: 'Console with a vibrant display, detachable Joy-Con controllers.',
    price: {
      amount: 350,
      currency: 'USD',
    },
    tags: ['tech', 'black'],
    images: [
      {
        url: 'https://s3-alpha-sig.figma.com/img/d80a/28c9/d6d57b8f1e0fc6cbbe9fd8cbb10ef9f7?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DjQs6ZQtbj7d702~j7n101F7syQEEI-B6R1JxFkOWEqfw0j7BO3z8Pdhh-1uqiAo-16pFg96eOgYsCxYt6G7ExP-WxSSY9AbF4H2BrOPU3lo023wlwCW-YS~bv0LPCztsrB1uCBBnQhi2qWEa7QlUe9loNO5nS4Gw8~0bPpaqNPUPeKtjY-haMJs2Tlxk6KiwE9lvTCMtDtaGwsHTNdA3C3hbLdjZ7oMAqHX9RQ-Fmbr01a~Unk32M5Ada1C5VwqvAbKHr84wc0qVxZNESa8gmiDQF4Cftw9Z79T--3p9xSS~F04egyV4~RovqUsmyYLP34zQs8kQnmira~9xJZStQ__',
        alt: 'Nintendo Switch',
      },
    ],
  },
];

export default MOCKED_PRODUCTS;
