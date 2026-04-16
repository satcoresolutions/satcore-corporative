// types/dataLayer.d.ts

declare global {
  interface BaseEvent {
    event: string;
  }

  interface HeroCTAEvent extends BaseEvent {
    event: "hero_cta_click";
    cta_type: string;
    cta_label: string;
    section: string;
    page_path: string;
  }

  interface CTAEvent extends BaseEvent {
    event: "cta_click";
    cta_type: string;
    cta_label: string;
    section: string;
    page_path: string;
  }

  interface GenerateLeadEvent extends BaseEvent {
    event: "generate_lead";
    form_name: string;
    page_path: string;
  }

  interface SocialClickEvent extends BaseEvent {
    event: "social_click";
    social_platform: string;
    page_path: string;
    link_url?: string;
  }

  interface FilterSelectEvent extends BaseEvent {
    event: "filter_select";
    filter_type: "macro" | "micro";
    filter_value: string;
    parent_macro?: string;
    page_path: string;
  }

  interface ServiceCardClickEvent extends BaseEvent {
    event: "service_card_click";
    service_name: string;
    service_id?: string | number;
    service_category?: string;
    position?: number;
    section: string;
    page_path: string;
  }

  interface ProjectClickEvent extends BaseEvent {
    event: "project_click";
    project_title: string;
    project_category: string;
    project_service?: string;
    project_id?: string | number;
    section: string;
    page_path: string;
  }

  type DataLayerEvent =
    | HeroCTAEvent
    | CTAEvent
    | GenerateLeadEvent
    | SocialClickEvent
    | FilterSelectEvent
    | ServiceCardClickEvent
    | ProjectClickEvent
    | BaseEvent; // Para eventos genéricos sin propiedades adicionales

  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

export { };
