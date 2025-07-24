// Função para baixar o currículo como PDF com links clicáveis
document.getElementById('download-btn').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const curriculumContent = document.getElementById('curriculum-content');
    const downloadButton = document.getElementById('download-btn');

    // Esconde o botão temporariamente para não aparecer na captura
    downloadButton.style.display = 'none';
    
    // Mostra um indicador de carregamento
    const originalText = downloadButton.innerHTML;
    downloadButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Gerando PDF...';
    downloadButton.style.display = 'block';
    
    html2canvas(curriculumContent, {
        scale: 2, // Aumenta a escala para melhor qualidade de imagem
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        allowTaint: true,
        foreignObjectRendering: true
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: 'a4'
        });

        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        // Usa as dimensões do canvas renderizado para o cálculo da proporção
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const ratio = canvasWidth / canvasHeight;

        let finalWidth = pdfWidth;
        let finalHeight = finalWidth / ratio;

        // Ajusta as dimensões se a altura for maior que a da página
        if (finalHeight > pdfHeight) {
            finalHeight = pdfHeight;
            finalWidth = finalHeight * ratio;
        }

        pdf.addImage(imgData, 'PNG', 0, 0, finalWidth, finalHeight);

        // Adiciona os links clicáveis ao PDF
        const links = curriculumContent.querySelectorAll('a');
        const contentRect = curriculumContent.getBoundingClientRect();
        
        // Calcula o fator de escala entre os pixels do HTML e os pontos do PDF
        const scaleFactor = finalWidth / contentRect.width;

        links.forEach(link => {
            const linkRect = link.getBoundingClientRect();
            const href = link.getAttribute('href');

            if (href) {
                // Calcula a posição relativa ao conteúdo do currículo
                const x = linkRect.left - contentRect.left;
                const y = linkRect.top - contentRect.top;
                const w = linkRect.width;
                const h = linkRect.height;

                // Dimensiona e posiciona o link no PDF
                const pdfX = x * scaleFactor;
                const pdfY = y * scaleFactor;
                const pdfW = w * scaleFactor;
                const pdfH = h * scaleFactor;
                
                // Adiciona a área de link invisível
                pdf.link(pdfX, pdfY, pdfW, pdfH, { url: href });
            }
        });

        // Salva o PDF
        pdf.save('Curriculo-Marcelo-Lopes.pdf');

        // Restaura o botão ao estado original
        downloadButton.innerHTML = originalText;
        downloadButton.style.display = 'block';
        
        // Mostra uma mensagem de sucesso
        showNotification('PDF gerado com sucesso!', 'success');
        
    }).catch(err => {
        console.error("Erro ao gerar o PDF:", err);
        
        // Restaura o botão ao estado original
        downloadButton.innerHTML = originalText;
        downloadButton.style.display = 'block';
        
        // Mostra uma mensagem de erro
        showNotification('Erro ao gerar o PDF. Tente novamente.', 'error');
    });
});

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    // Remove notificações existentes
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Cria a notificação
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' : 
        type === 'error' ? 'bg-red-500 text-white' : 
        'bg-blue-500 text-white'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} mr-2"></i>
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Remove automaticamente após 5 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Adiciona funcionalidade de impressão com Ctrl+P
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
        window.print();
    }
});

// Melhora a experiência de carregamento
document.addEventListener('DOMContentLoaded', function() {
    // Adiciona classe de carregamento
    document.body.classList.add('loaded');
    
    // Anima os elementos quando a página carrega
    const elements = document.querySelectorAll('.icon-skill, section');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Adiciona funcionalidade de copiar email
document.addEventListener('click', function(event) {
    if (event.target.textContent.includes('marcelopessoa.exe@gmail.com')) {
        navigator.clipboard.writeText('marcelopessoa.exe@gmail.com').then(() => {
            showNotification('Email copiado para a área de transferência!', 'success');
        }).catch(() => {
            showNotification('Erro ao copiar email.', 'error');
        });
    }
}); 