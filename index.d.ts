import { Translate } from './lib';

declare module 'langbridge' {
  export function translate(data: Translate): Promise<string>;
}
