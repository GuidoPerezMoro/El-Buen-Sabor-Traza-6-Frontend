import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../components/ui/common/NavBar/NavBar';
import useCartLogic from '../utils/cartLogic';
import ProductosPage from '../components/screens/Products/ProductsPage';

import IProducto from '../types/IProducto';
import IPromocion from '../types/IPromocion';
import { RootState } from '../redux/store/store';
import PromocionesPage from '../components/Promocion/Promocion';

const Rutas: React.FC = () => {
  const productos = useSelector((state: RootState) => state.productos.data);
  const { cart, addToCart, removeFromCart, clearCart } = useCartLogic();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div>
      <Navbar/>

      <Routes>
        <Route
          path="/productos"
          element={
            <ProductosPage
              addToCart={(productId: number, products: IProducto[]) => addToCart(productId, products)}
            />
          }
        />
        <Route
          path="/promociones"
          element={
            <PromocionesPage
              addToCart={(promocionId: number, promociones: IPromocion[]) => addToCart(promocionId, promociones)}
            />
          }
        />
        <Route path="/" element={<ProductosPage  addToCart={(productId: number, products: IProducto[]) => addToCart(productId, products)}/>} />
      </Routes>
    </div>
  );
};

export default Rutas;
