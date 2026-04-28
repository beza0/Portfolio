export type Locale = 'tr' | 'en'

export const locales: Locale[] = ['tr', 'en']

/** Stable section anchors (language-independent URLs). */
export const sectionIds = {
  about: 'about',
  experience: 'experience',
  projects: 'projects',
  skills: 'skills',
  contact: 'contact',
} as const

const translations = {
  tr: {
    navAbout: 'Hakkımda',
    navExperience: 'Deneyim',
    navProjects: 'Projeler',
    navSkills: 'Yetenekler',
    navContact: 'İletişim',
    langSwitchTr: 'TR',
    langSwitchEn: 'EN',
    langAria: 'Site dilini seç',
    navOpenMenu: 'Menüyü aç',
    navCloseMenu: 'Menüyü kapat',

    heroBadge: 'UI/UX Designer · FE Developer',
    heroGreet: 'Merhaba,',
    heroIm: 'ben',
    heroLead:
      'Kendimi UI/UX Designer ve Frontend Developer olarak tanıtıyorum. Figma ile kullanıcı odaklı arayüz ve prototipler üretiyor; React ve TypeScript ile tasarımları ürüne dönüştürüyorum.',
    heroCtaContact: 'İletişime geç',
    heroFloat1: 'Figma · Design System',
    heroFloat2: 'React · TypeScript',

    aboutLabel: 'Özet',
    aboutTitle: 'Tasarım ve kod arasında köprü kuruyorum',
    aboutBody:
      'TÜBİTAK BİLGEM bünyesinde UI/UX tasarımcı ve frontend geliştirici olarak çalışıyorum. Figma ile kullanıcı odaklı arayüzler ve etkileşimli prototipler tasarlarken, bu tasarımları frontend tarafında hayata geçiriyorum. Tasarım ve geliştirme süreçlerini birlikte yürüterek hem görsel hem teknik açıdan bütüncül çözümler üretiyorum. Yeni teknolojileri keşfetmeye, kendimi sürekli geliştirmeye ve farklı alanlarda yetkinlik kazanmaya önem veriyorum.',

    expLabel: 'Deneyim',
    expTitle: 'Profesyonel yolculuk',
    exp1Period: '2025 – Günümüz',
    exp1Role: 'Yazılım Geliştirme Bursiyeri',
    exp1Detail:
      'Projelerde UI/UX tasarım süreçlerini yönetiyorum. Figma ile uçtan uca arayüz tasarımı, prototipleme ve kullanıcı akışı oluşturuyorum. Responsive ve kullanıcı odaklı tasarımlar geliştiriyorum; tasarımların yazılıma aktarılmasında frontend ekibiyle yakın çalışıyorum.',
    exp2Period: '07/2025 – 08/2025',
    exp2Role: 'Yazılım Geliştirme Stajyeri',
    exp2Detail:
      'UI/UX tasarım süreçlerini deneyimledim: Figma ile wireframe ve arayüz tasarımları. Mobil tarafta Flutter, web tarafında React ile geliştirme süreçlerine destek verdim.',

    projLabel: 'Projeler',
    projTitle: 'Seçilmiş işler',
    projTimeLinkName: 'TimeLink',
    projDisaName: 'DİSA Topluluğu Web Sitesi',
    projTimeLinkTag: 'Full stack · Web',
    projTimeLinkBody:
      'Zaman bankası tabanlı beceri takası platformu: kullanıcılar zaman kredisi ile öğretip öğreniyor. Vite + React + TypeScript arayüz; Spring Boot REST API, JWT, PostgreSQL; Docker Compose ile dağıtım.',
    projDisaTag: 'Kurumsal web',
    projDisaBody:
      'Kurumsal kimliğe uygun, Türkçe/İngilizce ve responsive site. Sayfa yapıları ve arayüz bileşenleri; domain ve hosting ile uçtan uca yayına alma.',
    projGithubCta: 'GitHub profili',

    skillsLabel: 'Yetenek & eğitim',
    skillsTitle: 'Araçlar ve akademik geçmiş',
    skillsTechTitle: 'Teknik yetkinlik',
    skillsLangTitle: 'Diller',
    skillsLangEn: 'İngilizce',
    skillsEduTitle: 'Eğitim',
    eduUni: 'İstanbul Medeniyet Üniversitesi',
    eduUniDept: 'Bilgisayar Mühendisliği · ',
    eduUniSpan: '2022 – 2026 · İstanbul · GNO: 3.4',
    eduHigh: 'Sınav Koleji Fen Lisesi',
    eduHighSpan: '2018 – 2022 · Kocaeli',
    eduYks: 'YKS:',
    eduAles: 'ALES:',

    contactLabel: 'İletişim',
    contactTitle: 'Birlikte çalışalım',
    contactBlurb:
      'Projeler, iş birlikleri veya tasarım danışmanlığı için mesaj atabilirsiniz.',
    contactLocation: 'Maltepe / İstanbul',

    footer: 'UI/UX Designer',

    orgTubitak: 'TÜBİTAK',
    locationKocaeli: 'Kocaeli',
  },
  en: {
    navAbout: 'About',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navSkills: 'Skills',
    navContact: 'Contact',
    langSwitchTr: 'TR',
    langSwitchEn: 'EN',
    langAria: 'Choose site language',
    navOpenMenu: 'Open menu',
    navCloseMenu: 'Close menu',

    heroBadge: 'UI/UX Designer · FE Developer',
    heroGreet: 'Hello,',
    heroIm: "I'm",
    heroLead:
      'I introduce myself as a UI/UX designer and frontend developer. I craft user-centered interfaces and prototypes in Figma, and turn designs into products with React and TypeScript.',
    heroCtaContact: 'Get in touch',
    heroFloat1: 'Figma · Design System',
    heroFloat2: 'React · TypeScript',

    aboutLabel: 'Summary',
    aboutTitle: 'I bridge design and code',
    aboutBody:
      'I work as a UI/UX designer and frontend developer at TÜBİTAK BİLGEM. I design user-centered interfaces and interactive prototypes in Figma, then implement them on the frontend. By running design and development together, I deliver cohesive solutions—visually and technically. I focus on exploring new technologies, continuous learning, and growing skills across different areas.',

    expLabel: 'Experience',
    expTitle: 'Professional journey',
    exp1Period: '2025 – Present',
    exp1Role: 'Software Development Scholar',
    exp1Detail:
      'I lead UI/UX design workflows on projects. End-to-end interface design, prototyping, and user flows in Figma. I build responsive, user-centered designs and work closely with the frontend team to ship them.',
    exp2Period: '07/2025 – 08/2025',
    exp2Role: 'Software Development Intern',
    exp2Detail:
      'I gained hands-on UI/UX experience: wireframes and UI in Figma. I supported mobile work with Flutter and web work with React.',

    projLabel: 'Projects',
    projTitle: 'Selected work',
    projTimeLinkName: 'TimeLink',
    projDisaName: 'DİSA Community website',
    projTimeLinkTag: 'Full stack · Web',
    projTimeLinkBody:
      'Time-bank skill exchange: users teach and learn with time credits. Vite + React + TypeScript UI; Spring Boot REST API, JWT, PostgreSQL; deployed with Docker Compose.',
    projDisaTag: 'Corporate web',
    projDisaBody:
      'Brand-aligned, bilingual (TR/EN), responsive site—page structure and UI components; end-to-end launch with domain and hosting.',
    projGithubCta: 'GitHub profile',

    skillsLabel: 'Skills & education',
    skillsTitle: 'Tools and academic background',
    skillsTechTitle: 'Technical skills',
    skillsLangTitle: 'Languages',
    skillsLangEn: 'English',
    skillsEduTitle: 'Education',
    eduUni: 'Istanbul Medeniyet University',
    eduUniDept: 'Computer Engineering',
    eduUniSpan: '2022 – 2026 · Istanbul · GPA: 3.4',
    eduHigh: 'Sinav College Science High School',
    eduHighSpan: '2018 – 2022 · Kocaeli',
    eduYks: 'YKS:',
    eduAles: 'ALES:',

    contactLabel: 'Contact',
    contactTitle: "Let's work together",
    contactBlurb:
      'Reach out for projects, collaborations, or design consulting.',
    contactLocation: 'Maltepe / Istanbul',

    footer: 'UI/UX Designer',

    orgTubitak: 'TÜBİTAK',
    locationKocaeli: 'Kocaeli',
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}
