const btnConsultas = document.querySelector('#btn__consultas');
const agendamentos = document.querySelector('#agendamentos');
const btnFechar = document.querySelector('#btn__fechar');
const btnCadastrar = document.querySelector('#btn__cadastrar');
let nome = document.querySelector('#nome');
let telefone = document.querySelector('#telefone');
let endereco = document.querySelector('#endereco');
let data = document.querySelector('#data');
let dentista = document.querySelector('#dentista');
let observacao = document.querySelector('#observacao');
const resultado = document.querySelector('#resultado');
const btnLogin = document.querySelector('#btn__login');
const concluido = document.querySelector('.concluido');
const inputUsuario = document.querySelector('#input__usuario');
const inputSenha = document.querySelector('#input__senha');


const bancoDeDados = JSON.parse(localStorage.getItem('dados'));

let dados = localStorage.getItem('dados') !== null ? bancoDeDados : [];

const atualizaDados = () => {
    localStorage.setItem('dados',JSON.stringify(dados));
}

const geradorId = () => {
    return Math.floor(Math.random()*1000);
}
btnCadastrar.addEventListener('click',() => {
    const paciente = {
        id: geradorId(),
        nome:nome.value,
        telefone:telefone.value,
        endereco:endereco.value,
        data:data.value,
        dentista:dentista.value,
        observacao:observacao.value
    }
    
    dados.push(paciente);
    atualizaDados();
    iniciar();
    nome.value = ''
    telefone.value = ''
    endereco.value = ''
    data.value = ''
    dentista.value = ''
    observacao.value = ''
})

const atualizaConsulta = (ID) => {
    dados = dados.filter(dado => dado.id == ID);
}

const deletarConsulta = (ID) => {
    dados  = dados.filter(dado => dado.id !== ID);
    atualizaDados()
    iniciar()
}

const adicionandoNoHTML = (paciente) => {
    const dado = `
    <div id='div__paciente'>
    <span class='dado'> ID = ${paciente.id}</span><br>
    <span class='dado'>Nome = ${paciente.nome}</span><br>
    <span class='dado'>Telefone = ${paciente.telefone}</span><br>
    <span class='dado'>Endereço = ${paciente.endereco}</span><br>
    <span class='dado'>Data = ${paciente.data}</span><br>
    <span class='dado'>Dentista = ${paciente.dentista}</span><br>
    <span class='dado'>Observação = ${paciente.observacao}</span>
    <div id='btn__editar' onClick='atualizaConsulta(${paciente.id})'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m21.561 5.318l-2.879-2.879A1.495 1.495 0 0 0 17.621 2c-.385 0-.768.146-1.061.439L13 6H4a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-9l3.561-3.561c.293-.293.439-.677.439-1.061s-.146-.767-.439-1.06zM11.5 14.672L9.328 12.5l6.293-6.293l2.172 2.172l-6.293 6.293zm-2.561-1.339l1.756 1.728L9 15l-.061-1.667zM16 19H5V8h6l-3.18 3.18c-.293.293-.478.812-.629 1.289c-.16.5-.191 1.056-.191 1.47V17h3.061c.414 0 1.108-.1 1.571-.29c.464-.19.896-.347 1.188-.64L16 13v6zm2.5-11.328L16.328 5.5l1.293-1.293l2.171 2.172L18.5 7.672z"/></svg>
    <span class='p__btn'>Editar</span>
    </div>
    <div id='btn__deletar' onClick='deletarConsulta(${paciente.id})'>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"/><path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40m-64 64v224m-72-224l8 224m136-224l-8 224"/></svg>
    <span class='p__btn'>Deletar</span>
    </div>
    <hr id='separador'>
    </div>
    `;
    resultado.innerHTML += dado;
}

const iniciar = () => {
    resultado.innerHTML = '';
    dados.forEach(adicionandoNoHTML)
}
iniciar();

btnConsultas.addEventListener('click',() => {
    agendamentos.style.display = 'block';
})

btnFechar.addEventListener('click',() => {
    agendamentos.style.display = 'none';
})

const verificaLogin = () =>{
    if(inputUsuario.lenght < 4){
        console.log('teste.... senha menor que 4 digitos')
    }
}



