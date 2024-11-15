/// <reference types="svelte" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_API_URL: string;
  readonly VITE_WS_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
