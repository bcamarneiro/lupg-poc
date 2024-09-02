// Not really a DB, but this is a mock of a DB.

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
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee27',
    name: 'Xbox Series X',
    description: 'Powerful next-gen console with 4K gaming capabilities and fast load times.',
    price: {
      amount: 499,
      currency: 'USD',
    },
    tags: ['tech', 'black'],
    images: [
      {
        url: 'https://imgs.search.brave.com/8JhaylIvqqueHv9TF4WdMWTTBUiHcGGHFhK32UPUWWU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTEta2tOUDZPY0wu/anBn',
        alt: 'Xbox Series X',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee28',
    name: 'Retro Gameboy',
    description: 'Classic handheld gaming device with a monochrome display and iconic design.',
    price: {
      amount: 80,
      currency: 'USD',
    },
    tags: ['tech', 'grey'],
    images: [
      {
        url: 'https://imgs.search.brave.com/ZpGldVB7eKdAbp8i8IwvaGrRCTFbW1aOdY22bnf_rMs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ0MDYxNDY4L3Iv/aWwvNjdmZDc0LzUx/NzMwMDg5NjIvaWxf/NjAweDYwMC41MTcz/MDA4OTYyX2htNjYu/anBn',
        alt: 'Retro Gameboy',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee29',
    name: 'Atari 2600',
    description: 'Vintage gaming console that popularized home video games in the late 1970s.',
    price: {
      amount: 150,
      currency: 'USD',
    },
    tags: ['tech', 'brown'],
    images: [
      {
        url: 'https://imgs.search.brave.com/N5VBONx8KH7F8QwWGwqr3gi1VrpTwvGhfsq6JbmVvRI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdGFy/aS5jb20vY2RuL3No/b3AvZmlsZXMvUHJv/ZHVjdEltYWdlLUFW/Mi5qcGc_dj0xNjky/NzExNjczJndpZHRo/PTE0NDU',
        alt: 'Atari 2600',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee30',
    name: 'Nintendo 64',
    description: 'Iconic 64-bit gaming console known for its revolutionary 3D graphics and classic games.',
    price: {
      amount: 180,
      currency: 'USD',
    },
    tags: ['tech', 'grey'],
    images: [
      {
        url: 'https://imgs.search.brave.com/U_n9ZTOT2WUEauFXjxfK5sPxyr1rQIBjb_VAqtx62Ek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDE0cWNlSzhkOEwu/anBn',
        alt: 'Nintendo 64',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee31',
    name: 'PlayStation Vita',
    description: 'Powerful handheld gaming device with a vibrant OLED screen and dual analog sticks.',
    price: {
      amount: 200,
      currency: 'USD',
    },
    tags: ['tech', 'black'],
    images: [
      {
        url: 'https://imgs.search.brave.com/uFJMK6_GBqeOWDQ-JfuuUIsq5hMIaIEVGZy_BeMmJLU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nYW1lc3RvcC5j/b20vaS9nYW1lc3Rv/cC8xMDEwNzU2NS9T/b255LVBsYXlTdGF0/aW9uLVZpdGEtQ29u/c29sZS13aXRoLVdp/LUZpPyRwZHAk',
        alt: 'PlayStation Vita',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee32',
    name: 'Sega Dreamcast',
    description: 'Innovative console with online gaming capabilities and a built-in modem.',
    price: {
      amount: 160,
      currency: 'USD',
    },
    tags: ['tech', 'white'],
    images: [
      {
        url: 'https://imgs.search.brave.com/EOIsIedIskrCN3xlWXxh1If0vQ2lz6asaXMiO6Co5TE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nYW1lc3RvcC5j/b20vaS9nYW1lc3Rv/cC8xMDEyMjkzMi9T/RUdBLURyZWFtY2Fz/dD8kcGRwJA',
        alt: 'Sega Dreamcast',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee33',
    name: 'Nintendo Wii',
    description: 'Family-friendly console with motion controls and a wide range of casual games.',
    price: {
      amount: 100,
      currency: 'USD',
    },
    tags: ['tech', 'white'],
    images: [
      {
        url: 'https://imgs.search.brave.com/ynUISBVzpsE3uf8WPbBeaC48Ub5cCGFWYLXZeE6ENS0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFkVHN5V2lnS0wu/anBn',
        alt: 'Nintendo Wii',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee34',
    name: 'PlayStation Portable (PSP)',
    description: "Sony's first handheld gaming device with multimedia capabilities and a wide screen.",
    price: {
      amount: 130,
      currency: 'USD',
    },
    tags: ['tech', 'black'],
    images: [
      {
        url: 'https://imgs.search.brave.com/jdwaBedIC-2iQg-mIz3T-or5fyDkqKBty8Ccjh1Jqos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQ2L1BzcC0xMDAw/LmpwZw',
        alt: 'PlayStation Portable',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee35',
    name: 'Super Nintendo (SNES)',
    description: '16-bit console known for its extensive library of classic games and colorful graphics.',
    price: {
      amount: 140,
      currency: 'USD',
    },
    tags: ['tech', 'grey'],
    images: [
      {
        url: 'https://imgs.search.brave.com/FmZOKXB3LzXwZVtVJd2xsymUM5fdfK5f-zhBG-ZVdQg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9j/L2NmL1NORVMtTW9k/ZWwtMi1TZXQuanBn',
        alt: 'Super Nintendo',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee36',
    name: 'Neo Geo Pocket Color',
    description: 'Compact handheld console with a color screen and a unique clicky joystick.',
    price: {
      amount: 190,
      currency: 'USD',
    },
    tags: ['tech', 'blue'],
    images: [
      {
        url: 'https://imgs.search.brave.com/Tnv1KXtVvEQYktg-o6r0jU33mXjNWoRf8fu2WdYlnWk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE0MzQwNjYxL2Mv/OTk5Lzk5OS8wLzEv/aWwvMDgzMmQzLzI2/MjMxNDkwMzEvaWxf/NjAweDYwMC4yNjIz/MTQ5MDMxXzh3eGcu/anBn',
        alt: 'Neo Geo Pocket Color',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee37',
    name: 'Sega Genesis',
    description: '16-bit console known for its fast-paced games and iconic Sonic the Hedgehog series.',
    price: {
      amount: 120,
      currency: 'USD',
    },
    tags: ['tech', 'black'],
    images: [
      {
        url: 'https://imgs.search.brave.com/Aq1XMl1xJsC_uIdV5Ccob0gT8VHc67agzYNLjekV2mM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFhL1NlZ2EtR2Vu/ZXNpcy1Nb2QyLUJh/cmUuanBn',
        alt: 'Sega Genesis',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee38',
    name: 'Nintendo 3DS',
    description: 'Portable gaming system with a unique 3D display and dual screens.',
    price: {
      amount: 150,
      currency: 'USD',
    },
    tags: ['tech', 'blue'],
    images: [
      {
        url: 'https://imgs.search.brave.com/YzbCdUzKPcxXXq1SDSBUKydYq8v1EMzE4iPAvnVMgEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9odHRw/Mi5tbHN0YXRpYy5j/b20vRF9OUV9OUF82/NzE2NDctTUxVNzUz/MjE3NjI4MzdfMDMy/MDI0LUYud2VicA',
        alt: 'Nintendo 3DS',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee39',
    name: 'PlayStation 2',
    description: 'Best-selling video game console of all time with a vast library of games.',
    price: {
      amount: 100,
      currency: 'USD',
    },
    tags: ['tech', 'black'],
    images: [
      {
        url: 'https://imgs.search.brave.com/VHv3Yd2oC3K0W_eLdtk-QHQISUXyebvRM0_KVhTzdzk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxcEVURTZ2NHZM/LmpwZw',
        alt: 'PlayStation 2',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee40',
    name: 'Xbox 360',
    description: 'Popular gaming console known for its online multiplayer capabilities and Kinect sensor.',
    price: {
      amount: 130,
      currency: 'USD',
    },
    tags: ['tech', 'white'],
    images: [
      {
        url: 'https://imgs.search.brave.com/lXO3zu62aNPo0nGYhrqV3ElS48i68_QPGiVg4NN_shI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy80/LzQwL1hib3gtMzYw/LVByby13Q29udHJv/bGxlci5qcGc',
        alt: 'Xbox 360',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee41',
    name: 'Game Boy Advance',
    description: 'Handheld gaming device with a colorful screen and backward compatibility with Game Boy games.',
    price: {
      amount: 70,
      currency: 'USD',
    },
    tags: ['tech', 'purple'],
    images: [
      {
        url: 'https://imgs.search.brave.com/OiG1dSedIy8LATKK4OzxmxjutZ6bL6y4nfdlhoTGUaA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdkL05pbnRlbmRv/LUdhbWUtQm95LUFk/dmFuY2UtUHVycGxl/LUZMLmpwZw',
        alt: 'Game Boy Advance',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee42',
    name: 'Nintendo GameCube',
    description: 'Compact console with a unique controller design and a strong lineup of first-party games.',
    price: {
      amount: 110,
      currency: 'USD',
    },
    tags: ['tech', 'purple'],
    images: [
      {
        url: 'https://imgs.search.brave.com/Nxq3Qgo0DGVMRp5_OEJjt5M-3jPuSdfafrPSfKnnJUQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZXRy/by5jby51ay93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNC8wOC9T/RUlfMjE2MTA2MzY4/LTg1YjEuanBnP3F1/YWxpdHk9OTAmc3Ry/aXA9YWxsJnpvb209/MSZyZXNpemU9NjQ0/LDQyOA',
        alt: 'Nintendo GameCube',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee43',
    name: 'Sega Saturn',
    description: '32-bit console known for its 2D capabilities and niche Japanese games.',
    price: {
      amount: 200,
      currency: 'USD',
    },
    tags: ['tech', 'grey'],
    images: [
      {
        url: 'https://imgs.search.brave.com/jaUrfQGffbLtJeUa1_2RfekOsqIdJm5Ng8s8BGg0R8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/LzkyL1NhdHVybl9z/ZWdhLmpwZw',
        alt: 'Sega Saturn',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee44',
    name: 'Atari Lynx',
    description: 'The first handheld console with a color LCD screen, known for its advanced graphics.',
    price: {
      amount: 180,
      currency: 'USD',
    },
    tags: ['tech', 'grey'],
    images: [
      {
        url: 'https://imgs.search.brave.com/Vz6ArY1e93RlNzTovBzRuf3JzWbFnI8tj9whsAxHBP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/LzdjL0F0YXJpLUx5/bngtSGFuZGhlbGQt/QW5nbGVkLmpwZw',
        alt: 'Atari Lynx',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee45',
    name: 'TurboGrafx-16',
    description: '16-bit console that was popular in Japan and known for its CD-ROM add-on.',
    price: {
      amount: 250,
      currency: 'USD',
    },
    tags: ['tech', 'black'],
    images: [
      {
        url: 'https://imgs.search.brave.com/6XXIdsPHS-WqEE9pVmzQHPgjLBmEjwndgoEFd471gHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODF2b2tTZ25KNUwu/anBn',
        alt: 'TurboGrafx-16',
      },
    ],
  },
  {
    uuid: '6c77c3ed-8f3a-408e-b63c-94bcb52eee46',
    name: 'Virtual Boy',
    description: "Nintendo's ambitious but short-lived attempt at a 3D gaming console.",
    price: {
      amount: 300,
      currency: 'USD',
    },
    tags: ['tech', 'red'],
    images: [
      {
        url: 'https://imgs.search.brave.com/dyJTF9M0_YjNJt9tulQXWd-dPPXX69j6LwJIZfC1yZ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ndWlk/ZS1pbWFnZXMuY2Ru/LmlmaXhpdC5jb20v/aWdpLzNhZGdFT2JN/T2pXQWtMZ1QubWVk/aXVt',
        alt: 'Virtual Boy',
      },
    ],
  },
];

export default MOCKED_PRODUCTS;
