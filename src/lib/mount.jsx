import { createRoot } from 'react-dom/client';

/** Renders a page component into #root. */
export function mount(Page) {
  createRoot(document.getElementById('root')).render(<Page />);
}
