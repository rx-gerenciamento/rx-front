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
  },
  {
    id: 2,
    name: "Senhor Pastel",
    location: "Uberlândia",
    category: "Comercial",
    images: ["/projects/senhorPastel/senhorPastel4.jpeg", "/projects/senhorPastel/senhorPastel.jpeg", "/projects/senhorPastel/senhorPastel2.jpeg", "/projects/senhorPastel/senhorPastel3.jpeg", "/projects/senhorPastel/senhorPastel5.jpeg"],
    testimonial: {
      text: "Atendimento com muita qualidade e eficiência. São bem prestativos e atenciosos para solucionar as demandas necessárias.",
      author: "Senhor Pastel",
      city: "Uberlândia",
    },
    description:
      "Reforma e expansão de unidade comercial com foco em funcionalidade e identidade visual da marca. Prazo cumprido e execução impecável, garantindo a operação sem interrupções durante a obra.",
  },
  {
    id: 3,
    name: "Instituto VO2",
    location: "Uberlândia",
    category: "Institucional",
    images: ["/projects/institutoV02/instituto2.jpeg", "/projects/institutoV02/instituto.jpeg", "/projects/institutoV02/instituto1.jpeg", "/projects/institutoV02/instituto4.jpeg", "/projects/institutoV02/instituto3.jpeg"],
    testimonial: {
      text: "A RX tornou a construção da nossa clínica impecável. Do projeto à execução, a equipe gerenciou tudo com excelência e transparência, garantindo tranquilidade e concretizando nosso sonho com perfeição.",
      author: "Instituto VO2",
      city: "Uberlândia",
    },
    description:
      "Gerenciamento completo da construção de clínica médica de alto padrão. A equipe da RX conduziu todo o processo com transparência e excelência, do planejamento à entrega.",
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
  },
]

export const OTHER_PROJECTS: Project[] = [
  {
    id: 5,
    name: "Casa Nature",
    location: "Uberlândia",
    category: "Residencial",
    images: ["/projects/casaNature/casaNature4.jpeg", "/projects/casaNature/casaNature.jpeg", "/projects/casaNature/casaNature2.jpeg", "/projects/casaNature/casaNature3.jpeg", "/projects/casaNature/casaNature5.jpeg"],
    description:
      "Projeto residencial de alto padrão com integração ao ambiente natural e uso de materiais sustentáveis.",
  },
  {
    id: 6,
    name: "Edifício RT",
    location: "Uberlândia",
    category: "Corporativo",
    images: ["/projects/rt/rt.jpeg", "/projects/rt/rt2.jpeg", "/projects/rt/rt3.jpeg", "/projects/rt/rt4.jpeg", "/projects/rt/rt5.jpeg"],
    description:
      "Edifício corporativo com 8 andares gerenciado com metodologia BIM. Zero retrabalho e entrega no prazo.",
  },
  {
    id: 7,
    name: "Localiza Aeroporto",
    location: "Uberlândia",
    category: "Institucional",
    images: ["/projects/localiza/localiza4.jpeg", "/projects/localiza/localiza.jpeg", "/projects/localiza/localiza1.jpeg", "/projects/localiza/localiza2.jpeg", "/projects/localiza/localiza3.jpeg"],
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
    images: ["/projects/jaecoo/jaecoo.jpeg", "/projects/jaecoo/jaecoo1.jpeg", "/projects/jaecoo/jaecoo2.jpeg", "/projects/jaecoo/jaecoo3.jpeg", "/projects/jaecoo/jaecoo4.jpeg"],
    description:
      "Construção de concessionária automotiva com projeto de alto padrão e execução dentro do cronograma exigido pela marca.",
  },
]
