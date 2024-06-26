import React from 'react';
import { Button, Typography, ListItem, List, Drawer, ListItemText } from '@mui/material';
import CartProduct from '../../../../types/CartProduct';
import IProducto from '../../../../types/IProducto';
import { TipoEnvio } from '../../../../types/enums/TipoEnvio';
import { FormaPago } from '../../../../types/enums/FormaPago';
import { Estado } from '../../../../types/enums/Estado';


interface CartComponentProps {
  cart: CartProduct[];
  open: boolean;
  onClose: () => void;
  onAddToCart: (productId: number, products: IProducto[]) => void;
  onRemoveFromCart: (productId: number) => void;
  onClearCart: () => void;
}

const CartComponent: React.FC<CartComponentProps> = ({ cart, open, onClose, onAddToCart, onRemoveFromCart, onClearCart }) => {

  const total = cart.reduce((sum, product) => {
    const price = product.precioVenta ? product.precioVenta : product.precioPromocional;
    return sum + price * product.quantity;
  }, 0).toFixed(2);


  const handlePagoClick = async () => {
    if (total == "0" && cart.length > 0) {

      // Crear los detalles del pedido a partir del carrito
      const detallesPedido = cart.map((item) => ({
 
        cantidad: item.quantity,
        subtotal: item.precioVenta,
        idArticulo: item.id,
      }));

      // Crear el objeto pedido
      const pedido = {
        id: 0, // Asignamos un id temporal (puede ser opcional)
        tipoEnvio: TipoEnvio.DELIVERY,
        formaPago: FormaPago.MERCADO_PAGO,
        estado: Estado.PREPARACION,
        fechaPedido: new Date(),
        detallesPedidos: detallesPedido,
        total: Number(total),
      };
    } else {
      alert("Agregue al menos un producto al carrito");
    }
  }


  return (
    <>
    <Drawer anchor="right" open={open} onClose={onClose}>
        <List sx={{ width: 300 }}>
          <ListItem>
            <Typography variant="h6">Carrito de Compras</Typography>
          </ListItem>
          {cart.map((product) => (
            <ListItem key={product.id}>
              <ListItemText
                primary={product.denominacion}
                secondary={`$${product.precioVenta ? product.precioVenta : product.precioPromocional} x ${product.quantity}`}
              />
              <Button
                onClick={() => onAddToCart(product.id, cart)}
                size="small"
              >
                +
              </Button>
              <Button
                onClick={() => onRemoveFromCart(product.id)}
                size="small"
              >
                -
              </Button>
            </ListItem>
          ))}
          <ListItem>
            <Typography variant="body1">Total: ${total}</Typography>
          </ListItem>
          <ListItem>
            <Button
              variant="contained"
              sx={{backgroundColor:'#E66200', '&:hover': { backgroundColor: '#BB6201' }}}
              fullWidth
            >
              Realizar Pedido
            </Button>
          </ListItem>

          <ListItem>
            <Button
              variant="outlined"
              sx={{color:'#E66200', backgroundColor:'white', '&:hover': { color:'white', backgroundColor: 'grey' }}}
              fullWidth
              onClick={onClearCart}
            >
              Vaciar Carrito
            </Button>
          </ListItem>
        </List>
      </Drawer>
     </>
  );
};

export default CartComponent;