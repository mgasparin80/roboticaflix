// Adicione funcionalidades interativas aqui, se necessário
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('user-ip').textContent = `Seu IP: ${data.ip}`;
        })
        .catch(error => {
            console.error('Erro ao obter o IP:', error);
            document.getElementById('user-ip').textContent = 'Não foi possível obter o IP';
        });
});
