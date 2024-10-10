// Código de Js para que as caixas de texto façam a alteração de altura dinamicamente de acordo com seu conteudo
const textareas = document.querySelectorAll('textarea');

function ajustarAltura(textarea) {
    // Redefine a altura para 0 para calcular a nova altura corretamente
    textarea.style.height = '0';
    // Atribui a nova altura com base no scrollHeight
    textarea.style.height = textarea.scrollHeight + 'px';
    
    textarea.innerHTML.trim()
}

// Ajusta a altura ao carregar a página
setTimeout(function() {
    textareas.forEach(textarea => ajustarAltura(textarea));
}, 3000)

// Ajusta a altura sempre que o conteúdo mudar
textareas.forEach(textarea => {
    textarea.addEventListener('input', () => ajustarAltura(textarea));
});