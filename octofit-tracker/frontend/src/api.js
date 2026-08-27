const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
const browserHostname = typeof window === 'undefined' ? '' : window.location.hostname;
const forwardedApiHostname = browserHostname.replace(/-5173(?=\.app\.github\.dev$)/, '-8000');

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : forwardedApiHostname !== browserHostname
    ? `https://${forwardedApiHostname}/api`
  : 'http://localhost:8000/api';

export function normalizeCollection(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.data)) return payload.data;
  if (Array.isArray(payload?.items)) return payload.items;
  if (Array.isArray(payload?.results)) return payload.results;
  return [];
}

export async function getCollection(component) {
  const response = await fetch(`${apiBaseUrl}/${component}/`);
  if (!response.ok) {
    throw new Error(`Unable to load ${component} (${response.status})`);
  }
  return normalizeCollection(await response.json());
}
