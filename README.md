# 🎨 Roadmap do Projeto - Psicologia das Cores no Cinema

## 📋 Índice
1. [Visão Geral](#-visão-geral)
2. [Arquitetura do Projeto](#️-arquitetura-do-projeto)
3. [Arquivos de Configuração](#️-arquivos-de-configuração)
4. [Estrutura da Aplicação](#-estrutura-da-aplicação)
5. [Componentes](#-componentes)
6. [Dados](#-dados)
7. [Estilos e Design](#-estilos-e-design)
8. [Fluxo de Navegação](#-fluxo-de-navegação)
9. [Padrões de Design Utilizados](#-padrões-de-design-utilizados)
10. [Como Executar](#-como-executar)
11. [Como Adicionar Novas Cores](#-como-adicionar-novas-cores)
12. [Hierarquia de Estilos](#-hierarquia-de-estilos)
13. [Conceitos-chave do Next.js Usados](#-conceitos-chave-do-nextjs-usados)
14. [Recursos de Aprendizado](#-recursos-de-aprendizado)
15. [Licença e Créditos](#-licença-e-créditos)

---

## 🎯 Visão Geral

Este é um projeto **Next.js 15** com **TypeScript** que explora a **psicologia das cores no cinema**. A aplicação permite aos usuários navegar por diferentes cores e descobrir como elas são utilizadas em filmes icônicos para transmitir emoções e narrativas.

### Tecnologias Principais
- **Framework**: Next.js 15.5.5 (App Router)
- **Linguagem**: TypeScript 5
- **Estilização**: Tailwind CSS v4 com glassmorphism
- **Ícones**: Lucide React
- **Otimização de Imagens**: Next/Image

---

## 🏗️ Arquitetura do Projeto

```
projeto-web-design/
├── 📦 Configurações
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   ├── postcss.config.mjs
│   └── eslint.config.mjs
│
├── 🎨 Recursos Públicos
│   └── public/
│       ├── movies/
│       └── [svgs e imagens]
│
└── 💻 Código Fonte
    └── src/
        ├── app/
        │   ├── components/
        │   ├── data/
        │   ├── color/[name]/
        │   ├── layout.tsx
        │   ├── page.tsx
        │   └── globals.css
        └── lib/
            └── utils.ts
```

---

## ⚙️ Arquivos de Configuração

### 📄 `package.json`
**Função**: Define metadados do projeto, dependências e scripts de execução.

**Dependências principais:**
- `next@15.5.5`: Framework React para produção
- `react@19.1.0` e `react-dom@19.1.0`: Biblioteca React
- `tailwindcss@4`: Framework CSS utilitário
- `lucide-react`: Biblioteca de ícones
- `clsx` e `tailwind-merge`: Utilitários para manipulação de classes CSS

**Scripts disponíveis:**
```bash
npm run dev      # Inicia servidor de desenvolvimento (porta 3000)
npm run build    # Cria build otimizado para produção
npm start        # Inicia servidor de produção
npm run lint     # Executa verificação de código com ESLint
```

---

### 📄 `next.config.ts`
**Função**: Configuração principal do Next.js.

**Comportamento**: Atualmente usa configurações padrão do Next.js. Pode ser expandido para:
- Configurar domínios de imagens remotas
- Adicionar redirecionamentos
- Configurar variáveis de ambiente
- Otimizações específicas

---

### 📄 `tsconfig.json`
**Função**: Configuração do TypeScript para o projeto.

**Principais configurações:**
- `target: "ES2017"`: Compila para JavaScript ES2017
- `strict: true`: Ativa verificações rigorosas de tipos
- `paths: { "@/*": ["./src/*"] }`: Permite imports absolutos (ex: `@/app/components`)
- `jsx: "preserve"`: Mantém JSX para o Next.js processar
- `moduleResolution: "bundler"`: Usa resolução moderna de módulos

**Comportamento**: Garante type-safety e autocomplete no desenvolvimento.

---

### 📄 `postcss.config.mjs`
**Função**: Configura o PostCSS para processar CSS.

**Comportamento**: 
- Integra o plugin do Tailwind CSS v4
- Processa CSS durante o build
- Permite uso de sintaxe CSS moderna

---

### 📄 `eslint.config.mjs`
**Função**: Configuração do ESLint para análise estática de código.

**Comportamento**:
- Estende configurações recomendadas do Next.js
- Suporte completo a TypeScript
- Ignora pastas geradas automaticamente (`node_modules`, `.next`, etc)
- Mantém qualidade e consistência do código

---

## 🎨 Estrutura da Aplicação

### 📄 `src/app/layout.tsx`
**Função**: Layout raiz da aplicação (Root Layout).

**Comportamento**:
1. **Carrega fontes do Google**: 
   - `Geist` (sans-serif moderna)
   - `Geist Mono` (monospace)
2. **Define metadados**: Título da página "Psicologia das Cores no Cinema"
3. **Envolve toda a aplicação**: Todos os componentes renderizam dentro deste layout
4. **Configuração de idioma**: `lang="pt-BR"` para português brasileiro
5. **Classes CSS**: Aplica variáveis de fonte e antialiasing

**Quando é executado**: Em TODA página da aplicação (persiste durante navegação).

---

### 📄 `src/app/page.tsx` (Página Inicial)
**Função**: Página principal da aplicação - Landing page interativa.

**Comportamento**:

#### 1. **Estado e Navegação**
```typescript
'use client';  // Componente do lado do cliente (interativo)
const router = useRouter();  // Hook de navegação do Next.js
```

#### 2. **Dados de Cores**
```typescript
const colors: ColorData[] = [
  { name: 'Vermelho', gradient: 'linear-gradient(...)' },
  // ... 10 cores no total
];
```

#### 3. **Elementos Visuais**
- **Luzes de fundo**: 3 círculos desfocados animados (roxo, rosa, azul)
- **Header animado**: Ícones Sparkles e Palette com animação float
- **Título gradiente**: "Psicologia das Cores" com efeito de texto gradiente
- **Cards informativos**: 3 GlassCards explicando o propósito

#### 4. **Grade de Cores Interativa**
- Grid 5x5 responsivo de botões coloridos
- Cada botão tem gradiente único
- Efeito hover: escala 105% + sombra aumentada
- Click: Navega para `/color/{nome-da-cor}`

**Fluxo de interação**:
```
Usuário clica em cor → router.push() → Navega para página da cor
```

---

### 📄 `src/app/color/[name]/layout.tsx`
**Função**: Layout específico para páginas de cores individuais.

**Comportamento**:
1. **Background preto**: Diferente do gradiente da home
2. **Barra de navegação**: Link "← Voltar" para retornar à home
3. **Estilização**: Borda inferior cinza na navegação
4. **Renderiza children**: O conteúdo específico de cada cor

**Quando é usado**: Apenas nas rotas `/color/*` (ex: `/color/vermelho`).

---

### 📄 `src/app/color/[name]/page.tsx`
**Função**: Página dinâmica que exibe informações sobre uma cor específica.

**Comportamento**:

#### 1. **Rotas Dinâmicas**
```typescript
// URL: /color/vermelho
// params.name = "vermelho"
```

#### 2. **Busca de Dados**
```typescript
const colorData = colorsData.find(color => color.id === name);
```
- Procura cor no arquivo de dados (`colors.ts`)
- Se não encontrar, retorna `null` (página não renderiza)

#### 3. **Renderização Condicional**
```typescript
if (!colorData) return null;  // 404 implícito
```

#### 4. **Componentes Renderizados**
- **ColorHeader**: Título da cor + descrição psicológica
- **MovieGrid**: Lista de filmes que utilizam a cor

**Fluxo de dados**:
```
URL → params → busca em colorsData → props para componentes
```

---

## 🧩 Componentes

### 📄 `src/app/components/glass-card.tsx`
**Função**: Card com efeito glassmorphism (vidro fosco).

**Props**:
```typescript
{
  Icon: LucideIcon,      // Ícone a ser exibido
  title: string,         // Título do card
  description: string,   // Descrição
  className?: string     // Classes adicionais (opcional)
}
```

**Comportamento**:
1. **Efeito glass**: Usa classe `.glass-card` do CSS
2. **Ícone destacado**: Container com fundo branco semi-transparente
3. **Hover**: Aumenta transparência + translateY(-2px)
4. **Acessibilidade**: Ícone com `aria-hidden`

**Onde é usado**: Na página inicial (3 cards informativos).

---

### 📄 `src/app/components/ColorHeader.tsx`
**Função**: Cabeçalho de cada página de cor.

**Props**:
```typescript
{
  name: string,        // Nome da cor (ex: "Vermelho")
  hexColor: string,    // Código hex (ex: "#FF0000")
  description: string  // Descrição psicológica
}
```

**Comportamento**:
1. **Título colorido**: Nome da cor com estilo inline usando `hexColor`
2. **Descrição estilizada**: 
   - Primeira palavra (nome da cor) em negrito e colorida
   - Resto do texto em cinza claro
3. **Classes CSS**: Usa `.color-name` e `.movie-description` do `globals.css`

**Exemplo de renderização**:
```
VERMELHO  (em vermelho, grande, maiúsculas)
O vermelho é a cor da vida e da morte...
```

---

### 📄 `src/app/components/MovieCard.tsx`
**Função**: Exibe informações de um filme específico.

**Props**:
```typescript
{
  movie: Movie,         // Objeto com dados do filme
  accentColor: string   // Cor de destaque (hex)
}
```

**Comportamento**:

#### 1. **Título**
```typescript
<h2 className="movie-title">{movie.title}</h2>
```
- Exemplo: "2001: Uma Odisseia no Espaço (1968)"

#### 2. **Imagem**
```typescript
<Image
  src={movie.image}
  alt={movie.title}
  fill
  onError={(e) => { /* Fallback para placeholder */ }}
/>
```
- Aspect ratio 16:9 (video)
- Lazy loading automático (Next/Image)
- Fallback: Se erro, mostra `/placeholder-movie.svg`

#### 3. **Explicação**
```typescript
<span style={{ color: accentColor }}>O vermelho</span> 
nesta cena transcende...
```
- Primeira parte colorida e em negrito
- Resto em cinza claro

**Fluxo de erro**:
```
Imagem não carrega → onError → Substitui por placeholder
```

---

### 📄 `src/app/components/MovieGrid.tsx`
**Função**: Container que renderiza múltiplos MovieCards.

**Props**:
```typescript
{
  movies: Movie[],    // Array de filmes
  colorHex: string    // Cor para passar aos cards
}
```

**Comportamento**:
1. **Itera sobre filmes**: Usa `.map()` para criar cards
2. **Key única**: `movie.id` para otimização do React
3. **Propaga cor**: Passa `colorHex` para cada MovieCard
4. **Layout**: Máximo 4xl de largura, centralizado

**Estrutura**:
```jsx
<section>
  {movies.map(movie => (
    <MovieCard key={movie.id} movie={movie} accentColor={colorHex} />
  ))}
</section>
```

---

## 📊 Dados

### 📄 `src/app/data/colors.ts`
**Função**: Banco de dados estático do projeto (fonte única de verdade).

**Estrutura de Dados**:

#### 1. **Interface Movie**
```typescript
interface Movie {
  id: string;              // Identificador único
  title: string;           // Nome do filme + ano
  image: string;           // Caminho da imagem
  colorExplanation: string; // Análise detalhada da cor
}
```

#### 2. **Interface ColorData**
```typescript
interface ColorData {
  id: string;           // URL-friendly (ex: "vermelho")
  name: string;         // Nome display (ex: "Vermelho")
  hexColor: string;     // Código de cor (ex: "#FF0000")
  description: string;  // Descrição psicológica geral
  movies: Movie[];      // Array de filmes
}
```

#### 3. **Array exportado**
```typescript
export const colorsData: ColorData[] = [
  {
    id: 'vermelho',
    name: 'Vermelho',
    hexColor: '#FF0000',
    description: 'é a cor da vida e da morte...',
    movies: [
      {
        id: 'odisseia-no-espaco',
        title: "2001: Uma Odisseia no Espaço (1968)",
        image: '/movies/odisseia-no-espaco.png',
        colorExplanation: 'nesta cena de 2001...'
      }
    ]
  }
  // Mais cores podem ser adicionadas aqui
];
```

**Como expandir**: Para adicionar nova cor, basta adicionar objeto ao array seguindo a interface.

---

## 🎨 Estilos e Design

### 📄 `src/app/globals.css`
**Função**: Estilos globais e sistema de design da aplicação.

#### 1. **Import do Tailwind**
```css
@import "tailwindcss";
```

#### 2. **Background Global**
```css
body {
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  background-attachment: fixed;  /* Não scroll com conteúdo */
  color: #f8fafc;                /* Texto claro */
  min-height: 100vh;             /* Altura mínima tela cheia */
}
```
**Efeito**: Gradiente roxo/azul escuro que não move ao scrollar.

---

#### 3. **Glassmorphism**
```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);     /* Branco 5% opaco */
  backdrop-filter: blur(10px);                /* Desfoque do fundo */
  -webkit-backdrop-filter: blur(10px);        /* Safari */
  border: 1px solid rgba(255, 255, 255, 0.1);/* Borda sutil */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.08);     /* Mais opaco */
  border-color: rgba(255, 255, 255, 0.2);   /* Borda mais visível */
  transform: translateY(-2px);               /* Sobe 2px */
}
```
**Efeito**: Cards semi-transparentes com efeito de vidro fosco.

---

#### 4. **Texto Gradiente**
```css
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```
**Efeito**: Texto com gradiente roxo → rosa → vermelho.

---

#### 5. **Animações**

##### Fade In Up
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);  /* Começa 30px abaixo */
  }
  to {
    opacity: 1;
    transform: translateY(0);     /* Termina na posição */
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```
**Efeito**: Elementos aparecem suavemente de baixo para cima.

##### Float
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);  /* Sobe 10px no meio */
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```
**Efeito**: Movimento de flutuação contínuo (como respiração).

---

#### 6. **Scrollbar Customizada**
```css
::-webkit-scrollbar {
  width: 10px;  /* Largura */
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);  /* Trilho */
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);   /* Barra */
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);   /* Mais visível */
}
```
**Efeito**: Scrollbar minimalista que combina com o tema dark.

---

#### 7. **Tipografia Responsiva**
```css
.color-name {
  font-size: clamp(2.25rem, 5vw, 3rem);  /* Min 36px, Max 48px */
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.movie-title {
  font-size: clamp(1.5rem, 3vw, 1.875rem);
  font-weight: bold;
  text-transform: uppercase;
}

.movie-description {
  font-size: clamp(1rem, 2vw, 1.125rem);
  line-height: 1.75;
  color: #d1d5db;
  text-align: justify;
}
```
**Efeito**: Tamanhos de fonte que se adaptam ao viewport (responsivo fluido).

---

### 📄 `src/lib/utils.ts`
**Função**: Utilitário para mesclar classes CSS condicionalmente.

**Código**:
```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

**Comportamento**:
1. **clsx**: Constrói string de classes condicionalmente
2. **twMerge**: Remove conflitos de classes do Tailwind
3. **Uso comum**:
```typescript
cn(
  "base-class",
  condition && "conditional-class",
  className  // Props externas
)
```

**Exemplo prático**:
```typescript
cn("p-4 bg-red-500", "p-6")  
// Resultado: "bg-red-500 p-6" (p-6 sobrescreve p-4)
```

---

## 🔄 Fluxo de Navegação

### 1. **Carregamento Inicial**
```
Usuário acessa "/" 
  ↓
Next.js renderiza:
  → layout.tsx (root)
    → page.tsx (home)
      → 3x GlassCard
      → Grid de 10 cores
```

### 2. **Interação com Cor**
```
Usuário clica em "Vermelho"
  ↓
onClick handler:
  → router.push('/color/vermelho')
    ↓
Next.js navega para:
  → layout.tsx (root)
    → color/[name]/layout.tsx (sub-layout)
      → color/[name]/page.tsx
        ↓
        Busca colorData com id='vermelho'
          ↓
          Renderiza:
            → ColorHeader (nome + descrição)
            → MovieGrid
              → MovieCard (para cada filme)
```

### 3. **Voltar à Home**
```
Usuário clica "← Voltar"
  ↓
<Link href="/"> componente do Next.js
  ↓
Navegação client-side (rápida)
  ↓
Retorna à página inicial
```

### 4. **Carregamento de Imagens**
```
MovieCard renderiza
  ↓
Next/Image carrega imagem:
  → Tenta carregar /movies/odisseia-no-espaco.png
    ↓
    Sucesso? → Exibe imagem otimizada
    ↓
    Erro? → onError callback
      → Substitui por /placeholder-movie.svg
```

---

## 🎯 Padrões de Design Utilizados

### 1. **Atomic Design**
- **Átomos**: Elementos básicos (ícones, cores)
- **Moléculas**: GlassCard, MovieCard
- **Organismos**: MovieGrid
- **Templates**: Layouts
- **Pages**: page.tsx

### 2. **Component Composition**
```
page.tsx
  ├── ColorHeader
  └── MovieGrid
       └── MovieCard (múltiplos)
```

### 3. **Server & Client Components**
- **Server Components**: Layouts, páginas de cor (async)
- **Client Components**: page.tsx (interatividade), MovieCard (imagens)

### 4. **Props Drilling**
```
color/[name]/page.tsx
  ↓ colorData
ColorHeader
MovieGrid
  ↓ movies + colorHex
MovieCard
  ↓ movie + accentColor
Renderização final
```

---

## 🚀 Como Executar

### Desenvolvimento
```bash
npm install           # Instala dependências
npm run dev          # Inicia em http://localhost:3000
```

### Produção
```bash
npm run build        # Cria build otimizado
npm start            # Serve build de produção
```

### Linting
```bash
npm run lint         # Verifica erros de código
```

---

## 📝 Como Adicionar Novas Cores

### 1. Adicionar dados em `colors.ts`
```typescript
{
  id: 'azul',  // URL-friendly
  name: 'Azul',
  hexColor: '#0066FF',
  description: 'é a cor da tranquilidade...',
  movies: [
    {
      id: 'blade-runner',
      title: 'Blade Runner 2049 (2017)',
      image: '/movies/blade-runner.png',
      colorExplanation: 'O azul neon...'
    }
  ]
}
```

### 2. Adicionar à grade da home (opcional)
```typescript
// Em page.tsx
const colors: ColorData[] = [
  // ... cores existentes
  { name: 'Azul', gradient: 'linear-gradient(135deg, #0066FF 0%, #0044CC 100%)' }
];
```

### 3. Adicionar imagem do filme
- Colocar em: `public/movies/blade-runner.png`

---

## 🎨 Hierarquia de Estilos

1. **Tailwind CSS**: Classes utilitárias inline
2. **globals.css**: Classes customizadas globais
3. **Inline styles**: Para valores dinâmicos (cores hexadecimais)

**Exemplo**:
```jsx
<h1 
  className="color-name"        // CSS global
  style={{ color: hexColor }}   // Inline dinâmico
>
  {name}
</h1>
```

---

## 🔍 Conceitos-chave do Next.js Usados

### 1. **App Router**
- Estrutura baseada em pastas
- Layouts aninhados
- Server Components por padrão

### 2. **Dynamic Routes**
- `[name]`: Parâmetro dinâmico na URL
- Acesso via `params.name`

### 3. **Image Optimization**
- Componente `<Image>` otimiza automaticamente
- Lazy loading nativo
- WebP automático quando suportado

### 4. **Font Optimization**
- `next/font/google` importa fontes
- Zero layout shift
- Fonts auto-hospedadas

### 5. **Client vs Server**
- `'use client'`: Interatividade, hooks
- Sem diretiva: Server Component (padrão)

---

## 📚 Recursos de Aprendizado

### Next.js
- [Documentação Oficial](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)

### Tailwind CSS
- [Documentação](https://tailwindcss.com/docs)
- [Glassmorphism Generator](https://hype4.academy/tools/glassmorphism-generator)

### TypeScript
- [Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

## 📄 Licença e Créditos

Projeto educacional para demonstração de conceitos de web design, psicologia das cores e desenvolvimento front-end moderno.

**Tecnologias**: Next.js, React, TypeScript, Tailwind CSS
**Conceitos**: Glassmorphism, Responsive Design, Component Architecture

---

alexandre é tchola
