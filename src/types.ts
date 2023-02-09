export type Config = {
  leftSide: { label: string; callback: Function }[];
  rightSide: { label: string; callback: (label?: string) => void }[];
}

export type BCControlProps = {
  viewModel: {
    label: string;
    changeLabel: Function;
  }
  buttons: Config;
};

export type ACControlProps = {
  viewModel: {
    label: string;
    hints: Hint[]
    changeLabelwithAC: Function;
    changeLabel: Function;
  }
  maxHints: number
};

export type InputType = {
  value: any;
  hints: Hint[]
  onChange: Function;
  maxHints: number;
}

export type Hint = {
  flag: string;
  fullName: string;
  name: string
}