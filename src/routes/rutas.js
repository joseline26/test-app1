const { Router } = require('express');
const router = Router();

const productos = require('./data.json');
console.log(productos);

router.get('/', (req,res) =>{
   res.json(productos);
});

router.get('/:id', (req,res) =>{
   const {id}= req.params;
   productos.forEach(producto => {
      if(producto.id == id){
         res.json(producto);
      }
   });
   console.log(id);
});

module.exports = router;