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
  },
]

export const OTHER_PROJECTS: Project[] = [
  {
    id: 5,
    name: "Casa Nature",
    location: "Uberlândia",
    category: "Residencial",
    images: ["/projects/casaNature/casaNature4.jpeg", "/projects/casaNature/casaNature.jpeg", "/projects/casaNature/casaNature2.jpeg", "/projects/casaNature/casaNature3.jpeg", "/projects/casaNature/casaNature5.jpeg"],
  },
  {
    id: 6,
    name: "Edifício RT",
    location: "Uberlândia",
    category: "Corporativo",
    images: ["/projects/rt/rt.jpeg", "/projects/rt/rt2.jpeg", "/projects/rt/rt3.jpeg", "/projects/rt/rt4.jpeg", "/projects/rt/rt5.jpeg"],
  },
  {
    id: 7,
    name: "Localiza Aeroporto",
    location: "Uberlândia",
    category: "Institucional",
    images: ["/projects/localiza/localiza4.jpeg", "/projects/localiza/localiza.jpeg", "/projects/localiza/localiza1.jpeg", "/projects/localiza/localiza2.jpeg", "/projects/localiza/localiza3.jpeg"],
  },
  {
    id: 8,
    name: "OBUC — Gestão pré-obra",
    location: "Uberlândia",
    category: "Gestão",
    images: ["/servicos/acompanhamento.png", "/servicos/planejamento.png"],
  },
  {
    id: 9,
    name: "Casa RM",
    location: "Uberlândia",
    category: "Residencial",
    images: ["/servicos/gerenciamento.png", "/servicos/gestao.png"],
  },
  {
    id: 10,
    name: "Concessionária Omoda Jaecoo",
    location: "Uberlândia",
    category: "Comercial",
    images: ["/projects/jaecoo/jaecoo.jpeg", "/projects/jaecoo/jaecoo1.jpeg", "/projects/jaecoo/jaecoo2.jpeg", "/projects/jaecoo/jaecoo3.jpeg", "/projects/jaecoo/jaecoo4.jpeg"],
  },
]
