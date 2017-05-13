// Individual items in the tree as provided by the consumer
export interface Item {
  id?: string | number | object;
  name: string;
  children?: Item[];
  reactKey?: string;
};

export interface TreeSelectProps {
  classNames?: {
    filterInput?: string;
    tree?: string;
    treeBranch?: string;
    treeCheckbox?: string;
    treeItem?: string;
    treeItemLabel?: string;
    valueBox?: string;
    values?: string;
  }
  data: Item[];
  labelTop?: (level: number) => number;
  onChange: (value: Item[]) => void;
  styles?: {
    filterInput?: React.CSSProperties;
    valueBox?: React.CSSProperties;
    values?: React.CSSProperties;
  }
  value: Item[];
}

export { TreeSelect as default } from '.';