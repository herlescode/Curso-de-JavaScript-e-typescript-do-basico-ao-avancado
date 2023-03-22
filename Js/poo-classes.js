class Human {
    hungry = true
    nome
    age
    sex


    //dentro de uma classe o metodo não é necessário vir com function()
    constructor(props){
        this.nome = props.nome
        this.age = props.age
        this.sex = props.sex
    }

    eat (){
        this.hungry = false
        
    }
}
//considerados nova instancia new
const chamaClasse1 = new Human({
    nome: 'Herles',
    age: 41,
    sex: 'male'
})


console.log(chamaClasse1);