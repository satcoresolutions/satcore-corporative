export type BlogPost = {
  // 🧾 BÁSICO
  title: string;
  description: string;
  slug: string;
  content: string;

  // 🎯 VISUAL / UX
  image?: string;
  cover?: string;

  // 🗂 ORGANIZACIÓN
  category?: string;
  tags?: string[];

  // 📅 SEO / ORDEN
  date?: string;
  updatedAt?: string;

  // ✍️ AUTOR
  author?: {
    name: string;
    avatar?: string;
    role?: string;
  };

  // ⏱ UX
  readingTime?: number;

  // 🔥 NEGOCIO (aquí sí conectas con tu modelo)
  featured?: boolean;
  relatedServices?: string[]; // 👈 conecta con servicesRegistry

  // 📈 SEO
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
};
