/* 🧠 SERVICIOS */
export const PROJECT_SERVICES = [
    "landing",
    "corporativa",
    "ecommerce",
    "webapp",
    "portal",
    "custom",
] as const;

export type ProjectService = typeof PROJECT_SERVICES[number];

/* 🏷️ PILARES (OPCIONAL SI LO USAS) */
export const PROJECT_CATEGORIES = [
    "software",
    "ciberseguridad",
    "ia",
    "branding",
    "educacion",
] as const;

export type ProjectCategory = typeof PROJECT_CATEGORIES[number];

/* 🧱 PROJECT */
export type Project = {
    id: number;
    title: string;
    description: string;

    category: ProjectCategory;
    service?: ProjectService;

    image: string;
    href: string;
    featured?: boolean;
};


export type MacroFilter =
    | "Todos"
    | "software"
    | "ciberseguridad"
    | "ia"
    | "branding"
    | "educacion";

export type MicroFilter =
    | "Todos"
    | "landing"
    | "corporativa"
    | "ecommerce"
    | "webapp"
    | "portal"
    | "custom";