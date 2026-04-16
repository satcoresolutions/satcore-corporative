import type { DataLayerEvent } from "@/types/dataLayer";

export {};

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
  }
}
