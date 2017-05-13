/**
 * This file is a central hub for shared pieces of code across
 * the entire project.
 *
 * For code that is available to the consumers of the library, see public.ts.
 */


// Individual items in the tree as we are working on it
export type Item = {
  children: Item[]
  label: string
  original: {}
  reactKey: string
  selected: boolean
};
export type Items = Item[];

export { Item as PublicItem, TreeSelectProps } from './public';
export { default as TreeSelect } from './TreeSelect';