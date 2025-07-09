import { createApi } from '@reduxjs/toolkit/query/react'

import { RESTAURANTS_DATA } from '../data'

export type Dish = {
  id: number;
  foto: string;
  preco: number;
  nome: string;
  descricao: string;
  porcao: string;
};

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: Dish[];
};

type Product = {
  id: number;
  price: number;
};

export type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement?: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

export type PurchaseResponse = {
  orderId: string;
};

const customBaseQuery = async (args: { url: string; method?: string; body?: unknown }) => {
  // Simula um atraso de rede de 500ms
  await new Promise(resolve => setTimeout(resolve, 500));

  // Simula a lógica do backend para diferentes URLs
  if (args.url === 'restaurantes') {
    return { data: RESTAURANTS_DATA };
  }

  // Lógica para buscar um restaurante por ID
  if (args.url.startsWith('restaurantes/')) {
    const id = parseInt(args.url.split('/')[1], 10);
    const restaurant = RESTAURANTS_DATA.find((r) => r.id === id);
    if (restaurant) {
      return { data: restaurant };
    } else {
      return { error: { status: 404, data: 'Restaurante não encontrado' } };
    }
  }

  if (args.url === 'checkout' && args.method === 'POST') {
    // Simula uma resposta de sucesso para a compra
    console.log('Dados da compra recebidos (simulação):', args.body);
    const mockResponse: PurchaseResponse = {
      orderId: `mock-order-${Date.now()}`
    };
    return { data: mockResponse };
  }

  return { error: { status: 404, data: `Endpoint não encontrado: ${args.url}` } };
};

const api = createApi({
  
  // @ts-ignore - Adicionado para o TypeScript não reclamar da tipagem customizada
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => ({ url: 'restaurantes' }),
    }),
    // Endpoint para buscar um restaurante específico
    getRestaurant: builder.query<Restaurant, string>({
      query: (id) => ({ url: `restaurantes/${id}` })
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetRestaurantQuery, usePurchaseMutation } = api;
export default api;