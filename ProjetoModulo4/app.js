const cadastro = []


function cadastrar() {
    const nome = document.getElementById ("nomeCompleto").value
    const email = document.getElementById ("email").value
    const tel = document.getElementById ("telefone").value 
    const cep = document.getElementById ("cep").value
    const rua = document.getElementById ("rua").value
    const numCasa = document.getElementById ("numeroCasa").value
    const complemento = document.getElementById ("complemento").value
    const bairro = document.getElementById ("bairro").value
    const cidade = document.getElementById ("cidade").value
    const estado = document.getElementById ("estado").value
    alert (`Usuário ${nome} foi Cadastrado`)

 
    const cadastrados = {
        nome: nome,
        email: email,
        telefone:  tel,
        cep: cep,
        rua: rua,
        numCasa: numCasa,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado
    }

    cadastro.push (cadastrados)
    render();
}


function render() {
    for (let i = 0; 1 < cadastro.length; i++){
        console.log(cadastro[i])
    }
}