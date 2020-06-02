const pessoa = {
    saudacao: 'Bom dia!',
    Falar() {
        console.log(this.saudacao)
    }
}
pessoa.Falar() // nesse contexto o this funciona, porém pode gerar conflito se 
              //entre paradigmas 
const falar = pessoa.falar // conflito entre paradigmas : Funcional e oo

const falarDePessoa = pessoa.Falar.bind(pessoa) //o método responsável por amarrar um derteminado um determinado objeto
                                                // ser o dono da execução
falarDePessoa()

