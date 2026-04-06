export type Service = {
  id: string
  name: string
  desc: string
  image: string
}

export const SERVICES: Service[] = [
  {
    id: "orcamento",
    name: "Orçamento de obras",
    desc: "Detalhamento preciso dos custos e quantitativos.",
    image: "/servicos/orcamento.png",
  },
  {
    id: "planejamento",
    name: "Planejamento de obras",
    desc: "Cronograma físico-financeiro no prazo e orçamento.",
    image: "/servicos/planejamento.png",
  },
  {
    id: "gerenciamento",
    name: "Gerenciamento de obras",
    desc: "Supervisão constante e padrões de qualidade.",
    image: "/servicos/gerenciamento.png",
  },
  {
    id: "acompanhamento",
    name: "Acompanhamento de Obras",
    desc: "Relatórios periódicos, cronogramas e metas com integração ao ERP.",
    image: "/servicos/acompanhamento.png",
  },
  {
    id: "gestao",
    name: "Gestão em BIM",
    desc: "Modelagem, custos e prazos com rastreabilidade e simulação.",
    image: "/servicos/gestao.png",
  },
]

export const SERVICES_CARD_WIDTH = 288 // w-72
export const SERVICES_GAP = 32        // gap-8
export const SERVICES_PADDING = 48    // px-6 * 2
