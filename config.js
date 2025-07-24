// Configurações do Currículo
// Modifique estas configurações para personalizar seu currículo

const CONFIG = {
    // Informações Pessoais
    personal: {
        name: "Marcelo Pessoa de Aguiar Lopes",
        title: "Game Designer & Desenvolvedor",
        email: "marcelopessoa.exe@gmail.com",
        phone: "(41) 98826-4641",
        location: "Portão, Curitiba / PR",
        portfolio: "https://marcelop.carrd.co/",
        photo: "assets/profile-photo.jpg" // Caminho para sua foto
    },

    // Configurações de Tema
    theme: {
        primaryColor: "#2563eb",    // Azul principal
        secondaryColor: "#1e40af",  // Azul escuro
        accentColor: "#3b82f6",     // Azul claro
        textColor: "#1f2937",       // Texto principal
        bgColor: "#f3f4f6",         // Fundo da página
        fontFamily: "'Inter', sans-serif"
    },

    // Configurações do PDF
    pdf: {
        filename: "Curriculo-Marcelo-Lopes.pdf",
        quality: 2, // Qualidade da imagem (1-4)
        format: "a4",
        orientation: "portrait"
    },

    // Configurações de Animações
    animations: {
        enabled: true,
        duration: 500, // Duração em milissegundos
        delay: 100     // Delay entre elementos
    },

    // Configurações de Notificações
    notifications: {
        enabled: true,
        duration: 5000, // Duração em milissegundos
        position: "top-right" // top-right, top-left, bottom-right, bottom-left
    },

    // Configurações de Responsividade
    responsive: {
        breakpoints: {
            mobile: 640,
            tablet: 768,
            desktop: 1024,
            large: 1280
        }
    },

    // Configurações de SEO
    seo: {
        title: "Currículo - Marcelo Pessoa de Aguiar Lopes",
        description: "Game Designer e Desenvolvedor com experiência em Unity, IA e design de jogos",
        keywords: "game designer, desenvolvedor, unity, IA, curitiba, portfolio",
        author: "Marcelo Pessoa de Aguiar Lopes"
    }
};

// Função para aplicar configurações
function applyConfig() {
    // Aplica configurações de tema
    const root = document.documentElement;
    root.style.setProperty('--primary-color', CONFIG.theme.primaryColor);
    root.style.setProperty('--secondary-color', CONFIG.theme.secondaryColor);
    root.style.setProperty('--accent-color', CONFIG.theme.accentColor);
    root.style.setProperty('--text-color', CONFIG.theme.textColor);
    root.style.setProperty('--bg-color', CONFIG.theme.bgColor);
    root.style.setProperty('--font-family', CONFIG.theme.fontFamily);

    // Aplica configurações de SEO
    document.title = CONFIG.seo.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = CONFIG.seo.description;
        document.head.appendChild(meta);
    } else {
        metaDescription.content = CONFIG.seo.description;
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = CONFIG.seo.keywords;
        document.head.appendChild(meta);
    } else {
        metaKeywords.content = CONFIG.seo.keywords;
    }

    const metaAuthor = document.querySelector('meta[name="author"]');
    if (!metaAuthor) {
        const meta = document.createElement('meta');
        meta.name = 'author';
        meta.content = CONFIG.seo.author;
        document.head.appendChild(meta);
    } else {
        metaAuthor.content = CONFIG.seo.author;
    }
}

// Aplica configurações quando o DOM estiver carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfig);
} else {
    applyConfig();
}

// Exporta configurações para uso em outros arquivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} 