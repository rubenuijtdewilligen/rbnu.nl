import { redirect } from '@sveltejs/kit';

export const GET = async () => {
  return redirect(301, 'https://forms.gle/EsnvkAEPmcoLXewNA');
};
