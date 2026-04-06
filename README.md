# RX Gerenciamento — Site Institucional

Site institucional da **RX Gerenciamento**, empresa especializada em orçamento, planejamento e gerenciamento de obras em todo o Brasil, com metodologia tradicional, BIM 4D e 5D.

## Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer-motion.com)
- [Lucide React](https://lucide.dev)

## Estrutura do Projeto

```
├── app/                  # Rotas e layout global (Next.js App Router)
├── components/           # Componentes React
│   └── ui/               # Componentes de UI genéricos
├── constants/            # Constantes reutilizáveis (contato, animações)
├── data/                 # Dados estáticos (projetos, serviços, navegação)
├── types/                # Tipos TypeScript compartilhados
├── lib/                  # Utilitários (cn, etc.)
└── public/               # Assets estáticos (imagens, fontes, SVGs)
```

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deploy

O projeto é hospedado na [Vercel](https://vercel.com). O deploy é feito automaticamente a cada push na branch `main`.
