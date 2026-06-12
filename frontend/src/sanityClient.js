import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "bi3g57kt",
  dataset: "production",
  useCdn: true, // Speeds up global retrieval times across your user base
  apiVersion: "2026-06-08",
});
