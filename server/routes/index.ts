import { redirect } from 'nitro/h3';
import { homepage } from '~/package.json';

export default () => redirect(homepage);
