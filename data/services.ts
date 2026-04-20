export type Service = {
  id: string
  name: string
  desc: string
  image: string
  details: string
  bullets: string[]
}

export const SERVICES: Service[] = [
  {
    id: "orcamento",
    name: "Orçamento de Obras",
    desc: "Detalhamento preciso dos custos e quantitativos.",
    image: "/servicos/orcamento.png",
    details:
      "Detalhamento preciso dos custos e quantitativos da sua obra, proporcionando total transparência e segurança financeira, com orçamento sintético, analítico e curva ABC.",
    bullets: [
      "Transparência nos custos antes do início da obra",
      "Instrumento para o cliente acompanhar a construtora",
      "Orçamento no padrão que a sua empresa trabalha",
    ],
  },
  {
    id: "planejamento",
    name: "Planejamento de Obras",
    desc: "Cronograma físico em tempo real.",
    image: "/servicos/planejamento.png",
    details:
      "Desenvolvimento de um cronograma físico-financeiro que garante a execução do projeto no prazo e dentro do orçamento, com técnica de Lean Construction e Gráfico de Gantt.",
    bullets: [
      "Cronograma realista e auditável",
      "Alinhamento entre custo e prazo",
      "Base para acompanhamento na execução",
    ],
  },
  {
    id: "gerenciamento",
    name: "Gerenciamento de Obras",
    desc: "Supervisão constante e padrões de qualidade.",
    image: "/servicos/gerenciamento.png",
    details:
      "Supervisão constante para assegurar que cada etapa siga os padrões de qualidade exigidos, evitando atrasos e imprevistos.",
    bullets: [
      "Obra sem surpresas: custo e prazo sob controle",
      "Assertividade tendendo a 100% com envolvimento da equipe",
      "Gestão remota ou presencial (Uberlândia)",
    ],
  },
  {
    id: "acompanhamento",
    name: "Acompanhamento de Obras",
    desc: "Relatórios periódicos, cronogramas e metas com integração ao ERP.",
    image: "/servicos/acompanhamento.png",
    details:
      "Acompanhamento técnico com relatórios periódicos, cronogramas e metas, garantindo transparência e controle de prazos, integração com o ERP da empresa, custos e qualidade em cada etapa.",
    bullets: [
      "Transparência e controle de prazos",
      "Integração com ERP da empresa",
      "Custos e qualidade em cada etapa",
    ],
  },
  {
    id: "gestao",
    name: "Gestão em BIM",
    desc: "Modelagem, custos e prazos com rastreabilidade e simulação.",
    image: "/servicos/gestao.png",
    details:
      "Integração de modelagem, custos e prazos com rastreabilidade de quantitativos, gestão visual e simulação de cenários para otimizar resultados.",
    bullets: [
      "Rastreabilidade de quantitativos",
      "Gestão visual e simulação de cenários",
      "Otimização de resultados",
    ],
  },
]

export const SERVICES_CARD_WIDTH = 288 // w-72
export const SERVICES_GAP = 32        // gap-8
export const SERVICES_PADDING = 48    // px-6 * 2
