import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { ACControlProps } from "../../types";

const View = ({ viewModel, maxHints }: ACControlProps) => {
  let hints = toJS(viewModel.hints);
  return (
    <div className="item_col">
      <input
        className="labelInput"
        value={viewModel.label}
        onChange={(e) => viewModel.changeLabelwithAC(e.target.value)}
        type="text"
        placeholder="Введите страну"
      />
      <>
        {hints
          ?.filter((_, i) => i < maxHints)
          .map(({ flag, name, fullName }, i) => {
            return (
              <div
                className="l_item"
                key={i}
                onClick={() => viewModel.changeLabel(name)}
              >
                <img className="img" src={flag} alt="flag" />
                <p>{name}</p>
                <p>{fullName}</p>
              </div>
            );
          })}
      </>
    </div>
  );
};

export default observer(View);
