# 🏢 Fixa Comunicação Visual - Website Institucional

[![Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel)](https://fixacv.vercel.app)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> Website institucional moderno e responsivo para a **Fixa Comunicação Visual**, empresa especializada em fachadas comerciais, residenciais, letras caixa luminosa e totens publicitários em Bauru-SP.

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como freelancer para a **Fixa Comunicação Visual**, uma empresa com mais de 16 anos de experiência no mercado de comunicação visual. O objetivo foi criar uma presença digital moderna que refletisse a qualidade e profissionalismo dos serviços oferecidos.

### 🚀 Características Principais

- ✨ **Design Moderno e Responsivo** - Adaptável a todos os dispositivos
- 🎠 **Carrossel Interativo** - Galeria de projetos com efeito scale usando Embla Carousel
- 🔍 **SEO Otimizado** - Meta tags, Schema.org e sitemap
- ⚡ **Performance Elevada** - Lazy loading, otimização de imagens e code splitting
- 📱 **Mobile First** - Experiência perfeita em dispositivos móveis
- ♿ **Acessibilidade** - Seguindo padrões WCAG

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário

### Componentes e UI

- **Radix UI** - Componentes primitivos acessíveis
- **Lucide React** - Ícones SVG otimizados
- **Embla Carousel** - Carrossel performático com efeitos
- **Embla Carousel Class Names** - Plugin para efeitos avançados

### Animações e Interações

- **React Fast Marquee** - Animação de logos de clientes
- **Intersection Observer API** - Animações on-scroll
- **CSS Transitions** - Transições suaves
- **Hover Effects** - Interações visuais refinadas

### Deploy e Performance

- **Vercel** - Deploy automático e CDN global
- **Schema.org** - Dados estruturados para SEO
- **Web Vitals** - Métricas de performance otimizadas

## 📱 Funcionalidades

### 🏠 Homepage

- **Hero Section** com slideshow automático de 4 slides
- **Seção "Quem Somos"** com animações on-scroll usando Intersection Observer
- **Carrossel de Projetos** com 8 imagens e efeito scale interativo
- **Galeria de Clientes** com marquee animado de logos
- **Formulário de Contato** com validação e design moderno

### 🎨 Portfólio Interativo

- **Carrossel de Fachadas** com navegação por setas
- **Efeito Scale** - imagem central maior que as laterais
- **Filtros por Tipo** de serviço (Comercial, Residencial, Letra Caixa, Totens)
- **Hover Effects** e zoom nas imagens
- **Descrições Detalhadas** dos projetos realizados

### 📞 Contato e Localização

- **Informações Completas** de contato
- **Links para Redes Sociais** (Facebook, Instagram, WhatsApp)
- **Dados Estruturados** para Google Business
- **Schema.org LocalBusiness** para SEO local

## 📂 Estrutura do Projeto

```
fixacv/
├── public/
│   ├── favicon.ico
│   └── site.webmanifest
├── src/
│   ├── Components/
│   │   ├── FachadaCarousel/     # Carrossel de projetos com Embla
│   │   ├── Feedback/            # Componente de depoimentos
│   │   ├── Header/              # Cabeçalho com navegação
│   │   ├── sections/            # Seções da página (Serviços, etc.)
│   │   ├── ui/                  # Componentes de UI reutilizáveis
│   │   ├── bean.tsx             # Componente de badge
│   │   ├── facebook_icon.tsx    # Ícone customizado Facebook
│   │   ├── instagram_icon.tsx   # Ícone customizado Instagram
│   │   └── whatsapp_icon.tsx    # Ícone customizado WhatsApp
│   ├── assets/
│   │   ├── images/              # Imagens principais do site
│   │   ├── slider/              # 8 imagens do carrossel (slide1-8.jpg)
│   │   ├── fachadas/            # Imagens de fachadas específicas
│   │   └── logos/               # Logos dos clientes (12 empresas)
│   ├── styles/
│   │   └── globals.css          # Estilos globais e Embla CSS
│   ├── App.tsx                  # Componente principal
│   └── main.tsx                 # Entry point
├── index.html                   # HTML base com SEO
├── tailwind.config.js           # Configuração do Tailwind
├── vite.config.ts               # Configuração do Vite
└── package.json                 # Dependências do projeto
```

## 🎨 Design System

### Cores Principais

```css
--secondary-yellow: #f4b942 /* Amarelo principal da marca */
  --mostard-orange: #e5a532 /* Laranja para hover states */
  --gray-background: #fafafa /* Fundo principal */ --preto: #1a1a1a
  /* Texto principal */;
```

### Tipografia

- **Fonte Principal**: Ubuntu (Google Fonts)
- **Pesos Utilizados**: 300, 400, 500, 600, 700, 800
- **Hierarquia**: h1 (48px), h2 (40px), h3 (24px), body (16px)

## 📈 Performance e SEO

### Otimizações Implementadas

- ⚡ **Lazy Loading** em todas as imagens
- 🗜️ **Compressão de Assets** via Vite
- 📱 **Responsive Images** com srcset
- 🔍 **Meta Tags Otimizadas** para redes sociais
- 🏷️ **Schema.org LocalBusiness** markup
- 📊 **Intersection Observer** para animações eficientes

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### SEO Features

- **Open Graph** tags para redes sociais
- **Twitter Cards** para compartilhamento
- **JSON-LD** structured data
- **Canonical URLs** configuradas
- **Sitemap** automático via Vite

## 🧩 Componentes Principais

### FachadaCarousel

Carrossel principal com 8 imagens de projetos:

- Efeito scale no slide central
- Navegação por setas (ChevronLeft/Right)
- Responsive design
- Hover effects com zoom

### Header

Cabeçalho fixo com:

- Logo da empresa
- Menu de navegação
- Slideshow automático (4 slides, 5s cada)
- Call-to-action destacado

### Servicos

Seção de portfólio com:

- Filtros por tipo de fachada
- Grid responsivo de projetos
- Integração com o carrossel
- Informações detalhadas

### Feedback

Sistema de depoimentos:

- Cards com avaliações
- Estrelas de rating
- Design consistente
- Animações suaves

## 🤝 Sobre o Desenvolvimento

Este projeto foi desenvolvido como trabalho freelancer, focando em:

### Objetivos Técnicos

- **Experiência do Usuário** - Interface intuitiva e moderna
- **Performance** - Carregamento rápido e otimizado
- **SEO** - Visibilidade nos mecanismos de busca
- **Responsividade** - Funciona perfeitamente em todos os dispositivos
- **Manutenibilidade** - Código limpo e bem estruturado

### Entregáveis

- ✅ Website responsivo completo
- ✅ Deploy automatizado na Vercel
- ✅ SEO otimizado para Google
- ✅ Performance de carregamento < 3s
- ✅ Compatibilidade cross-browser
- ✅ Documentação técnica completa

## 📄 Licença

Este projeto foi desenvolvido sob contrato freelancer para a **Fixa Comunicação Visual**. Todos os direitos sobre o design, conteúdo e marca pertencem à empresa cliente.

### Uso do Código

- ✅ Código pode ser usado como referência técnica
- ✅ Componentes podem ser adaptados para outros projetos
- ❌ Não reutilizar assets, imagens ou conteúdo da marca
- ❌ Não usar para concorrentes diretos

---

<div align="center">

### 🌟 Resultado Final

**Website moderno, performático e totalmente responsivo**

[![Acesse o Site](https://img.shields.io/badge/🌐_Ver_Site_Online-F4B942?style=for-the-badge&logoColor=white)](https://fixacv.vercel.app)

</div>

---

<p align="center">
  Desenvolvido com ❤️ e ☕ por <strong>Lucas</strong><br>
  <em>Freelancer especializado em React & TypeScript</em>
</p>

<p align="center">
  <a href="https://fixacv.vercel.app">🌐 Ver Site Online</a> •
  <a href="mailto:contato@fixacv.com.br">📧 Contato</a> •
  <a href="https://www.instagram.com/fixacomunicacaovisual/">📱 Instagram</a>
</p>
