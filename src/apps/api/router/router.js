const express = require('express');
const router = express.Router();
const {orderService, orderDescService, removeDuplicates} = require('../../../services/orderService')

const service = new orderService();
const serviceOrderDesc = new orderDescService();
const serviceRemoveDupl = new removeDuplicates(); 

router.use(express.json());

router.get('/ordenar',(req,res) => {
    const array = req.body;
    const { desc, asc, removeDuplicates } = req.query;
    const arrayOrderedAsc = service.order([...array]);
    const arrayOrderedDesc = serviceOrderDesc.orderDesc([...arrayOrderedAsc]);
    const arrayWithoutDuplicates = serviceRemoveDupl.removeDuplicates([...array])

    if (asc || asc === "" ) {
        return res.json(`Lista crescente: ${arrayOrderedAsc}`);
    };
    
    if (desc || desc === "" ) {
        return res.json(`Lista decrescente: ${arrayOrderedDesc}`);
    };
    
    if (removeDuplicates || removeDuplicates === "" ) {
         return res.json(`Lista com duplicadas removidas: ${arrayWithoutDuplicates}`)
    };
    
    res.json(arrayOrderedAsc)
});

router.use('*',(res) => {
    res.send('Rota não encontrada')
})

module.exports = router