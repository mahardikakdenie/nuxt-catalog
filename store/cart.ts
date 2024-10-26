interface CartData {
	id?: number;
	rating?: number;
	price?: string;
	name?: string;
	type?: string;
	slug?: string;
	variations?: {
		attributes: string[];
		prices: string[];
		multiple_variations: {
			enabled: boolean;
		};
	};
	stock?: {
		enabled: boolean;
		quantity: boolean;
	};
	pictures?: string[];
}

export const useCartItem = () =>
  useState<CartData[] | any>('cart', () => [
    {
      id: 1,
      price: '20000',
      quantity: 10,
      name: 'Gamis Anak Lucu',
      slug: 'gamis-anak-lucu',
      pictures: [
        'https://www.lelongindonesia.com/public/uploads/all/aWormxAADtZMXkBysvRgHer4aHzG5MgoZg9c4GwT.jpg',
        // additional image URLs
      ],
      stock: {
        enabled: true,
        quantity: 100,
      },
    },
  ]);
