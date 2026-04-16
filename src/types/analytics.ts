export interface BaseEvent {
  event: string;
}

export interface HeroCTAEvent extends BaseEvent {
  event: "hero_cta_click";
  cta_type: string;
  cta_label: string;
  section: string;
  page_path: string;
}

export type DataLayerEvent = HeroCTAEvent | BaseEvent;
