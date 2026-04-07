export type ProjectStat = {
  label: string
  value: string
}

export type ProjectTestimonial = {
  text: string
  author: string
  city: string
}

export type Project = {
  id: number
  name: string
  location: string
  category: string
  images: string[]
  testimonial?: ProjectTestimonial
  description: string
  year?: string
}
