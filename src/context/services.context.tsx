import { AxiosClient } from '@frameworks/axios.client';
import { ProductService } from '@services/product.service';
import React, { useContext } from 'react';

const productServiceFactory = () => {
  const client = new AxiosClient(process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000');
  return new ProductService(client);
};

interface ServicesContextInterface {
  ProductService: ProductService;
}

const ServicesContext = React.createContext<ServicesContextInterface | null>(null);

export const ServicesContextProvider = ({ children }) => {
  return (
    <ServicesContext.Provider value={{ ProductService: productServiceFactory() }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServicesContext = () => {
  const context = useContext(ServicesContext);
  if (!context) {
    throw new Error('No ServicesContext.Provider found when calling useServicesContext.');
  }

  return context;
};

export default ServicesContext;
