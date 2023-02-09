import { BCControlProps } from "../../types";
import { observer } from "mobx-react-lite";

const View = ({ viewModel, buttons }: BCControlProps) => {
  return (
    <div className="item">
      {buttons?.leftSide?.map(({ label, callback }, i: any) => {
        return (
          <button className="btn" key={i} onClick={() => callback()}>
            {label}
          </button>
        );
      })}
      <input
        className="labelInput"
        value={viewModel.label}
        onChange={(e) => viewModel.changeLabel(e.target.value)}
      />
      {buttons?.rightSide.map(({ label, callback }, i: any) => {
        return (
          <button className="btn" key={i} onClick={() => callback()}>
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default observer(View);
