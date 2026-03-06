export type Locale = 'en' | 'vi' | 'zh-CN' | 'zh-TW'

export interface Translations {
  header: {
    services: string
    ndis: string
    supportAtHome: string
    about: string
    contactUs: string
    referralForm: string
    accessibility: string
  }
  hero: {
    tag: string
    headingStart: string
    headingEmphasis: string
    subtitle: string
    ctaServices: string
    ctaContact: string
  }
  pictureFrame: {
    caption: string
    heroAlt: string
  }
  pathways: {
    tag: string
    heading: string
    description: string
    ndis: { title: string; description: string; link: string }
    sah: { title: string; description: string; link: string }
    private: { title: string; description: string; link: string }
  }
  disciplines: {
    tag: string
    heading: string
    ot: { title: string; description: string; items: string[]; link: string }
    osteo: { title: string; description: string; items: string[]; link: string }
  }
  ndisServices: {
    tag: string
    heading: string
    descriptionParts: [string, string, string, string, string]
    notice: string
    ot: string
    osteo: string
    services: Record<string, { title: string; description: string }>
  }
  sahServices: {
    tag: string
    heading: string
    description: string
    ot: string
    osteo: string
    services: Record<string, { title: string; description: string }>
  }
  subPageHero: {
    backHome: string
  }
  ndisPage: {
    heading: string
    description: string
  }
  sahPage: {
    heading: string
    description: string
  }
  otPage: {
    heading: string
    description: string
    ndisHeading: string
    sahHeading: string
  }
  osteoPage: {
    heading: string
    description: string
    ndisHeading: string
    sahHeading: string
  }
  about: {
    tag: string
    headingStart: string
    handwrittenAccent: string
    underlineWord: string
    paragraphs: string[]
    metroValue: string
    metroLabel: string
    deliveryValue: string
    deliveryLabel: string
    captions: string[]
    referralButton: string
  }
  contact: {
    tag: string
    heading: string
    description: string
    serviceArea: string
  }
  contactForm: {
    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    fundingLabel: string
    fundingPlaceholder: string
    fundingOptions: Record<string, string>
    serviceLabel: string
    servicePlaceholder: string
    otGroup: string
    osteoGroup: string
    serviceOptions: Record<string, string>
    messageLabel: string
    messagePlaceholder: string
    submit: string
    submitting: string
    thankYouTitle: string
    thankYouMessage: string
    errorGeneric: string
    errorConnection: string
  }
  footer: {
    brandDescription: string
    servicesHeading: string
    ndisServices: string
    supportAtHome: string
    allServices: string
    disciplinesHeading: string
    ot: string
    osteo: string
    contactHeading: string
    sendEnquiry: string
    serviceArea: string
    acknowledgement: string
    inclusivity: string
    abn: string
    copyright: string
  }
  languageToggle: {
    label: string
    english: string
    vietnamese: string
    mandarin: string
    cantonese: string
  }
}
