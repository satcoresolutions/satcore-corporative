import type { DataLayerEvent } from "@/types/analytics";

export {};

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}
