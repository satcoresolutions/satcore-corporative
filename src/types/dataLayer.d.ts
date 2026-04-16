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
  }

  type DataLayerEvent =
    | HeroCTAEvent
    | CTAEvent
    | GenerateLeadEvent
    | SocialClickEvent
    | BaseEvent;

  interface Window {
    dataLayer: DataLayerEvent[];
  }
}

export { };
