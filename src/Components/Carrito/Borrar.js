import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
import Button from '@mui/material/Button';
import { useCartContext } from "../../CartContext/CartContext"


const Borrar = () => {

    const { emptyCart} = useCartContext()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleBorrar = () => {
        emptyCart();
        setOpen(false);
    };


    return(
        <>
            <Button onClick={handleClickOpen}>Vaciar carrito</Button>
            <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"¿Quiere borrar todo el contenido del carrito?"}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleBorrar} variant="contained">Borrar</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


export default Borrar;