/**
 * ============================================================
 * DADOS DA CLÍNICA — Monizze Estética Campo Largo
 * Demo personalizado a partir de clinproto (molde intacto)
 * ============================================================
 */

export const clinic = {
  name: 'Monizze Estética',
  tagline: 'Beleza única e natural em Campo Largo',
  shortDescription:
    'Harmonização facial e corporal com olhar multidisciplinar — nude, natural e acolhedor no Centro de Campo Largo.',

  hero: {
    eyebrow: 'Campo Largo · Centro',
    titleLead: 'Beleza que',
    titleAccent: 'respeita o seu rosto',
    titleTail: '',
    lead: 'Harmonização facial e corporal com naturalidade. Equipe multidisciplinar, ambiente suave e agendamento direto pelo WhatsApp.',
    imageAlt: 'Espaço de estética acolhedor com tons nude',
  },

  manifesto: {
    lead: 'Nós acreditamos que',
    statement: 'harmonizar é realçar — nunca apagar quem você é.',
    body: 'Protocolos sob medida, conversa franca sobre expectativas e acompanhamento próximo. Do primeiro contato no Instagram ao retorno pós-procedimento.',
  },

  whatsapp: '5541998041253',
  whatsappDefaultMessage:
    'Olá! Gostaria de agendar uma avaliação na Monizze Estética.',

  phone: '(41) 99804-1253',
  email: 'adm@monizze.com.br',

  address: {
    street: 'R. Marechal Deodoro, 222 — sala 1',
    neighborhood: 'Centro',
    city: 'Campo Largo',
    state: 'PR',
    zip: '83601-020',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Rua+Marechal+Deodoro+222+Campo+Largo+PR&output=embed',
  },

  hours: [
    { days: 'Segunda a Sexta', time: '09:00 – 19:00' },
    { days: 'Sábado', time: 'Sob agendamento' },
    { days: 'Domingo', time: 'Fechado' },
  ],

  insurance: ['Particular', 'Pacotes de tratamento'],

  stats: [
    { value: 2700, suffix: '+', label: 'Seguidores no Instagram' },
    { value: 1100, suffix: '+', label: 'Publicações de cuidado' },
    { value: 5, suffix: '', label: 'Especialidades em estética' },
    { value: 1, suffix: '', label: 'Canal WhatsApp' },
  ],

  highlights: [
    {
      id: 'natural',
      title: 'Resultado natural',
      description: 'Harmonização que respeita proporções e expressão.',
      icon: 'sparkle',
    },
    {
      id: 'multi',
      title: 'Time multidisciplinar',
      description: 'Olhar integrado facial e corporal no mesmo endereço.',
      icon: 'users',
    },
    {
      id: 'whats',
      title: 'Agende no WhatsApp',
      description: 'Avaliação e dúvidas com resposta humana e rápida.',
      icon: 'heart',
    },
    {
      id: 'local',
      title: 'Centro de Campo Largo',
      description: 'Fácil acesso na Marechal Deodoro, sala 1.',
      icon: 'clock',
    },
  ],

  social: {
    instagram: 'https://www.instagram.com/monizzeestetica/',
    facebook: null,
    youtube: null,
  },

  legal: {
    cnes: '—',
    cnpj: '42.370.356/0001-67',
    razaoSocial: 'Monizze Estética',
  },
}
