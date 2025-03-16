import { redirect } from '@sveltejs/kit';

// TODO: Make this page count refer sites
export const load = () => {
  redirect(307, '/');
};
