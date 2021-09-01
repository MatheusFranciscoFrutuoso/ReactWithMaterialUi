class ProductRepository{
    listP;
    #listEnroledsP;

    constructor(){
        this.listP = [];
        this.#listEnroledsP = [];        
    }

    enroleds(func){
        let enro = [...this.#listEnroledsP, func];
        this.#listEnroledsP = enro;
    }
    removeEnroled(func){
        let enroI = this.#listEnroledsP.findIndex(func)
        this.#listEnroledsP.splice(enroI, 1)
    }
    sender(){
        this.#listEnroledsP.forEach(enro =>{
            enro(this.listP);
        });
    }
    create(model){
        let prod = [...this.listP, model];
        this.listP = prod;
        this.sender();
    }
    list(){
        return this.listP;
    }
}
export default ProductRepository;