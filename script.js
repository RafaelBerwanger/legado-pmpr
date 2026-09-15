function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    if(tabName === 'curriculo') {
        document.getElementById('tab-curriculo').classList.add('active');
        menuItems[0].classList.add('active');
    } else if(tabName === 'transmissao') {
        document.getElementById('tab-transmissao').classList.add('active');
        menuItems[1].classList.add('active');
    } else if(tabName === 'banco-afinidades') {
        document.getElementById('tab-banco-afinidades').classList.add('active');
        menuItems[2].classList.add('active');
    }
}

function toggleTransmissaoMode(modo) {
    const consultaDiv = document.getElementById('modo-consulta-transmissao');
    const cadastroDiv = document.getElementById('modo-cadastro-transmissao');
    const btnConsulta = document.getElementById('btn-sub-consulta');
    const btnCadastro = document.getElementById('btn-sub-cadastro');

    if (modo === 'consulta') {
        consultaDiv.style.display = 'block';
        cadastroDiv.style.display = 'none';
        btnConsulta.classList.add('active');
        btnCadastro.classList.remove('active');
    } else {
        consultaDiv.style.display = 'none';
        cadastroDiv.style.display = 'block';
        btnConsulta.classList.remove('active');
        btnCadastro.classList.add('active');
    }
}

function salvarNovaTransmissao(event) {
    event.preventDefault();

    const unidade = document.getElementById('cad-unidade').value;
    const setor = document.getElementById('cad-setor').value;
    const substituido = document.getElementById('cad-substituido').value;
    const assumente = document.getElementById('cad-assumente').value;
    const dataStr = document.getElementById('cad-data').value;
    const bg = document.getElementById('cad-bg').value;

    const partesData = dataStr.split('-');
    const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

    const tbody = document.getElementById('corpo-tabela-historico');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${dataFormatada}</td>
        <td>${substituido}</td>
        <td>${assumente}</td>
        <td>${unidade} / ${setor}</td>
        <td>Relatório completo dos 10 itens de transição preenchido e assinado.</td>
        <td>${bg} - <a href="#">Ata PDF</a></td>
    `;

    tbody.insertBefore(newRow, tbody.firstChild);

    alert('Transmissão de Função registrada com sucesso com os 10 itens de transição!');
    
    document.getElementById('form-transmissao').reset();
    toggleTransmissaoMode('consulta');
    document.getElementById('resultado-transmissao').style.display = 'block';
}

function buscarCurriculo() {
    document.getElementById('resultado-curriculo').style.display = 'block';
}

function limparCampos() {
    document.getElementById('resultado-curriculo').style.display = 'none';
    const inputs = document.querySelectorAll('#tab-curriculo .form-control');
    inputs.forEach(input => input.value = '');
}