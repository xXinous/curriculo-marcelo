# 🚀 Guia Completo para GitHub Pages

## Passos para Publicar seu Currículo no GitHub Pages

### 1. Criar Repositório no GitHub

1. **Acesse [github.com](https://github.com)**
2. **Clique em "New repository" (botão verde)**
3. **Configure o repositório:**
   - **Repository name**: `curriculo-marcelo` (ou outro nome)
   - **Description**: "Currículo interativo de Marcelo Pessoa"
   - **Visibility**: Public (recomendado)
   - **NÃO marque** "Add a README file" (já temos um)
   - **NÃO marque** "Add .gitignore" (já temos um)
4. **Clique em "Create repository"**

### 2. Conectar Repositório Local ao GitHub

Após criar o repositório, execute estes comandos no terminal:

```bash
# Adicionar o repositório remoto (substitua SEU_USUARIO pelo seu nome de usuário)
git remote add origin https://github.com/SEU_USUARIO/curriculo-marcelo.git

# Enviar o código para o GitHub
git branch -M main
git push -u origin main
```

### 3. Ativar GitHub Pages

1. **No seu repositório GitHub, vá em "Settings"**
2. **Role para baixo até "Pages" (no menu lateral esquerdo)**
3. **Em "Source", selecione "Deploy from a branch"**
4. **Em "Branch", selecione "gh-pages"**
5. **Clique em "Save"**

### 4. Configurar GitHub Actions (Automático)

O arquivo `.github/workflows/deploy.yml` já está configurado para:
- Fazer deploy automático quando você fizer push
- Gerar o site na branch `gh-pages`
- Atualizar automaticamente quando houver mudanças

### 5. Acessar seu Site

Após alguns minutos, seu site estará disponível em:
```
https://SEU_USUARIO.github.io/curriculo-marcelo
```

## 🔄 Atualizações Futuras

Para atualizar seu currículo:

```bash
# Fazer alterações nos arquivos
# Depois executar:
git add .
git commit -m "Atualização do currículo"
git push origin main
```

O GitHub Actions fará o deploy automaticamente!

## 📱 Funcionalidades do Site

✅ **Download em PDF** com links clicáveis  
✅ **Design responsivo** para todos os dispositivos  
✅ **Animações suaves** e transições elegantes  
✅ **Impressão otimizada** (Ctrl+P)  
✅ **SEO otimizado** para busca  

## 🛠️ Personalização

Para personalizar seu currículo:
1. Edite `config.js` para alterar cores e configurações
2. Modifique `index.html` para atualizar conteúdo
3. Ajuste `styles.css` para personalizar o visual

## 📞 Suporte

Se precisar de ajuda:
- Verifique se todos os arquivos foram enviados
- Confirme se o GitHub Pages está ativado
- Aguarde alguns minutos para o primeiro deploy

---

**🎉 Parabéns! Seu currículo estará online em poucos minutos!** 