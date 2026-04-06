export const CONTACT = {
  phone: "(34) 99692-8243",
  phoneRaw: "+5534996928243",
  email: "contato@rxgerenciamento.com.br",
  address: "R. São Judas Tadeu, 320 - Carajás, Uberlândia - MG, 38408-562",
  whatsappUrl: "https://wa.me/5534996928243",
  instagram: "https://www.instagram.com/rxgerenciamento",
} as const

export function getWhatsAppUrl(message?: string) {
  if (!message) return CONTACT.whatsappUrl
  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, vim pelo site e gostaria de mais informações"
