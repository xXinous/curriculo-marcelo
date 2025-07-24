# Currículo Interativo - Marcelo Pessoa de Aguiar Lopes

Um currículo profissional interativo desenvolvido em HTML, CSS e JavaScript com funcionalidade de download em PDF.

## 🚀 Funcionalidades

- **Design Responsivo**: Adapta-se perfeitamente a diferentes tamanhos de tela
- **Download em PDF**: Gera um PDF profissional com links clicáveis
- **Animações Suaves**: Transições e efeitos visuais elegantes
- **Links Interativos**: Todos os links funcionam tanto na web quanto no PDF
- **Impressão Otimizada**: Layout otimizado para impressão
- **Acessibilidade**: Suporte para usuários com necessidades especiais

## 📁 Estrutura do Projeto

```
cv/
├── index.html          # Página principal do currículo
├── styles.css          # Estilos personalizados
├── script.js           # Funcionalidades JavaScript
├── assets/             # Pasta para imagens e outros recursos
│   └── profile-photo.jpg  # Sua foto de perfil (opcional)
└── README.md           # Este arquivo
```

## 🛠️ Como Usar

### 1. Configuração Inicial

1. Clone ou baixe este projeto
2. Substitua a foto de perfil:
   - Adicione sua foto em `assets/profile-photo.jpg`
   - Ou mantenha o placeholder atual

### 2. Personalização

#### Informações Pessoais
Edite o arquivo `index.html` e atualize:
- Nome e título profissional
- Informações de contato
- Formação acadêmica
- Experiência profissional
- Habilidades e tecnologias

#### Estilos Visuais
Modifique o arquivo `styles.css` para:
- Alterar cores do tema
- Ajustar fontes
- Personalizar animações
- Modificar layout

#### Funcionalidades
Edite o arquivo `script.js` para:
- Adicionar novas funcionalidades
- Modificar comportamento do PDF
- Personalizar notificações

### 3. Hospedagem

#### Opções Gratuitas:
- **GitHub Pages**: Faça upload para um repositório GitHub
- **Netlify**: Arraste a pasta para o Netlify
- **Vercel**: Conecte seu repositório GitHub
- **Firebase Hosting**: Use o Firebase Console

#### Opções Pagas:
- **Vercel Pro**: Para domínios personalizados
- **Netlify Pro**: Para recursos avançados
- **AWS S3**: Para hospedagem escalável

## 🎨 Personalização Avançada

### Cores do Tema
Para alterar as cores principais, modifique estas variáveis no CSS:

```css
:root {
    --primary-color: #2563eb;    /* Azul principal */
    --secondary-color: #1e40af;  /* Azul escuro */
    --accent-color: #3b82f6;     /* Azul claro */
    --text-color: #1f2937;       /* Texto principal */
    --bg-color: #f3f4f6;         /* Fundo da página */
}
```

### Adicionar Novas Seções
Para adicionar uma nova seção ao currículo:

1. Adicione o HTML na estrutura apropriada
2. Use as classes CSS existentes para manter consistência
3. Teste a responsividade em diferentes dispositivos

### Modificar Funcionalidades JavaScript
O arquivo `script.js` inclui:
- Geração de PDF com html2canvas e jsPDF
- Sistema de notificações
- Animações de carregamento
- Funcionalidade de copiar email

## 📱 Responsividade

O currículo é totalmente responsivo e funciona em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🖨️ Impressão

O layout é otimizado para impressão:
- Use `Ctrl+P` (ou `Cmd+P` no Mac) para imprimir
- O botão de download é automaticamente ocultado
- Cores e layout são ajustados para melhor legibilidade

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos e animações
- **JavaScript ES6+**: Funcionalidades interativas
- **Tailwind CSS**: Framework CSS utilitário
- **Font Awesome**: Ícones
- **html2canvas**: Captura de tela para PDF
- **jsPDF**: Geração de PDF
- **Google Fonts**: Tipografia (Inter)

## 📄 Licença

Este projeto é de uso livre. Sinta-se à vontade para modificar e usar conforme suas necessidades.

## 🤝 Contribuições

Sugestões e melhorias são sempre bem-vindas! Entre em contato através do email no currículo.

---

**Desenvolvido com ❤️ por Marcelo Pessoa de Aguiar Lopes** 