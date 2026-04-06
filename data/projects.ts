import type { Project } from "@/types/project"

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 1,
    name: "Rivena Arquitetura",
    location: "Uberlândia",
    category: "Residencial",
    images: ["/servicos/gestao.png", "/servicos/planejamento.png", "/servicos/acompanhamento.png"],
    testimonial: {
      text: "São muito assertivos nos orçamentos e cronogramas, uma ferramenta que pode mudar a gestão de obra. Recomendamos muito.",
      author: "Rivena Arquitetura",
      city: "Uberlândia",
    },
    description:
      "Projeto residencial de alto padrão com foco em sustentabilidade e integração com a natureza. A RX gerenciou todas as etapas da obra com precisão, entregando o imóvel dentro do prazo e do orçamento previsto.",
    stats: [
      { label: "Prazo", value: "8 meses" },
      { label: "Área", value: "420m²" },
    ],
  },
  {
    id: 2,
    name: "Senhor Pastel",
    location: "Uberlândia",
    category: "Comercial",
    images: ["/servicos/gerenciamento.png", "/servicos/gestao.png"],
    testimonial: {
      text: "Atendimento com muita qualidade e eficiência. São bem prestativos e atenciosos para solucionar as demandas necessárias.",
      author: "Senhor Pastel",
      city: "Uberlândia",
    },
    description:
      "Reforma e expansão de unidade comercial com foco em funcionalidade e identidade visual da marca. Prazo cumprido e execução impecável, garantindo a operação sem interrupções durante a obra.",
    stats: [
      { label: "Prazo", value: "3 meses" },
      { label: "Área", value: "180m²" },
    ],
  },
  {
    id: 3,
    name: "Instituto VO2",
    location: "Uberlândia",
    category: "Institucional",
    images: ["/servicos/orcamento.png", "/servicos/gerenciamento.png", "/servicos/gestao.png"],
    testimonial: {
      text: "A RX tornou a construção da nossa clínica impecável. Do projeto à execução, a equipe gerenciou tudo com excelência e transparência, garantindo tranquilidade e concretizando nosso sonho com perfeição.",
      author: "Instituto VO2",
      city: "Uberlândia",
    },
    description:
      "Gerenciamento completo da construção de clínica médica de alto padrão. A equipe da RX conduziu todo o processo com transparência e excelência, do planejamento à entrega.",
    stats: [
      { label: "Prazo", value: "12 meses" },
      { label: "Área", value: "680m²" },
    ],
  },
  {
    id: 4,
    name: "Melo Construtora",
    location: "Uberlândia",
    category: "Corporativo",
    images: ["/servicos/planejamento.png", "/servicos/acompanhamento.png", "/servicos/orcamento.png"],
    testimonial: {
      text: "A RX foi uma parceira essencial, trazendo ferramentas poderosas que otimizaram o acompanhamento e a gestão da obra. Desde o cronograma até a gestão em Power BI, agregaram muito valor aos nossos processos.",
      author: "Melo Construtora",
      city: "Uberlândia",
    },
    description:
      "Parceria estratégica em gestão de obra com implementação de dashboards em Power BI para acompanhamento em tempo real de cronograma, custos e indicadores de desempenho.",
    stats: [
      { label: "Prazo", value: "18 meses" },
      { label: "Área", value: "2.100m²" },
    ],
  },
]

export const OTHER_PROJECTS: Project[] = [
  {
    id: 5,
    name: "Casa Nature",
    location: "Uberlândia",
    category: "Residencial",
    images: ["/servicos/gestao.png", "/servicos/acompanhamento.png"],
    description:
      "Projeto residencial de alto padrão com integração ao ambiente natural e uso de materiais sustentáveis.",
  },
  {
    id: 6,
    name: "Edifício RT",
    location: "Uberlândia",
    category: "Corporativo",
    images: ["/servicos/orcamento.png", "/servicos/gerenciamento.png"],
    description:
      "Edifício corporativo com 8 andares gerenciado com metodologia BIM. Zero retrabalho e entrega no prazo.",
    stats: [{ label: "Área", value: "2.400m²" }],
  },
  {
    id: 7,
    name: "Localiza Aeroporto",
    location: "Uberlândia",
    category: "Institucional",
    images: ["/servicos/planejamento.png", "/servicos/gestao.png"],
    description:
      "Posto de atendimento no Aeroporto de Uberlândia com restrições logísticas complexas, executado com total organização.",
  },
  {
    id: 8,
    name: "OBUC — Gestão pré-obra",
    location: "Uberlândia",
    category: "Gestão",
    images: ["/servicos/acompanhamento.png", "/servicos/planejamento.png"],
    description:
      "Consultoria e gestão pré-obra com planejamento detalhado de cronograma, orçamento e licenciamento.",
  },
  {
    id: 9,
    name: "Casa RM",
    location: "Uberlândia",
    category: "Residencial",
    images: ["/servicos/gerenciamento.png", "/servicos/gestao.png"],
    description:
      "Residência unifamiliar com gerenciamento completo de obra, do projeto executivo até a entrega das chaves.",
  },
  {
    id: 10,
    name: "Concessionária Omoda Jaecoo",
    location: "Uberlândia",
    category: "Comercial",
    images: ["/servicos/orcamento.png", "/servicos/acompanhamento.png"],
    description:
      "Construção de concessionária automotiva com projeto de alto padrão e execução dentro do cronograma exigido pela marca.",
  },
]
