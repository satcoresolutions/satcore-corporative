import type { DataLayerEvent } from "@/types/analytics";

export const pushEvent = (event: DataLayerEvent) => {
  if (typeof window === "undefined") return;

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  window.dataLayer.push(event);
};
