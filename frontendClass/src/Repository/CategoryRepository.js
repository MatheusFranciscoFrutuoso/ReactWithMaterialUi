class CategoryRepository{
    listC;
    #listEnroledsC;

    constructor(){
        this.listC = [];
        this.#listEnroledsC = [];        
    }

    enroleds(func){
        let enro = [...this.#listEnroledsC, func];
        this.#listEnroledsC = enro;
    }
    removeEnroled(func){
        let enroI = this.#listEnroledsC.findIndex(func)
        this.#listEnroledsC.splice(enroI, 1)
    }
    sender(){
        this.#listEnroledsC.forEach(enro =>{
            enro(this.listC);
        });
    }
    create(model){
        let prod = [...this.listC, model];
        this.listC = prod;
        this.sender();
    }
    list(){
        return this.listC;
    }
}
export default CategoryRepository;