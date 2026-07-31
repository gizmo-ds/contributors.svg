import { redirect } from 'nitro/h3';
import * as pkg from '~/package.json';

export default () => redirect(pkg.homepage);
