function enviar(){

    var dadosJSON = {
        nome: "",
        email: "",
        telefone: "",
        idade: "",
        turma: "",
        esporte: "",
        novidades: "",
    }

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const idade = document.getElementById('idade').value;
    const turma = document.getElementById('turma').value;
    const esporte = document.getElementById('esporte').value;
    const novidades = document.querySelector('input[name="novidades"]:checked').value;

    dadosJSON.nome = nome;
    dadosJSON.email = email;
    dadosJSON.telefone = telefone;
    dadosJSON.idade = idade;
    dadosJSON.turma = turma;
    dadosJSON.esporte = esporte;
    dadosJSON.novidades = novidades;

    var json = JSON.stringify(dadosJSON, null, " ");
    var inforetida = document.getElementById('informacoesRetidas');
    inforetida.innerHTML = json;