const {orderService, orderDescService, removeDuplicates} = require('../../src/services/orderService');

describe('Testando a ordenação da lista',() => {
    let order = new orderService();
    let orderDesc = new orderDescService();
    let removeDupl = new removeDuplicates();
    const array = ["B","C","C","A"];
    const arrayOrdered = ["A","B","C","C"]; 
    const arrayOrderedDesc = ["C","C","B","A"];
    const arrayWithoutDuplicates = ["B","C","A"];
    const result = order.order([...array]);
    const resultDesc = orderDesc.orderDesc([...result]);
    const resultRemove = removeDupl.removeDuplicates([...array]);

    it('Classe orderService deve ser instanciada corretamente', () => {
        expect(order).not.toBe(undefined);
    });

    it('Classe orderDescService deve ser instanciada corretamente', () => {
        expect(orderDesc).not.toBe(undefined);
    });

    it('Classe removeDuplicates deve ser instanciada corretamente', () => {
        expect(orderDesc).not.toBe(undefined);
    });

    it('Deve retornar ["A","B","C","C"] se passado ["B","C","C","A"]',() => {
        expect(result).toEqual(arrayOrdered);
    });

    it('Deve retornar ["C","C","B","A"] se passado ["B","C","C","A"]',() => {
        expect(resultDesc).toEqual(arrayOrderedDesc); // testa ordenação decrescente
    });

    it('Deve retornar ["B","C","A"] se passado ["B","C","C","A"]',() => {
        expect(resultRemove).toEqual(arrayWithoutDuplicates);
    });
});