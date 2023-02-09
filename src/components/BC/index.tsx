import View from "./View";
import ViewModel from "./ViewModel";

export const BC = () => {
  const viewModel = new ViewModel();
  const buttons = {
    leftSide: [
      {
        label: "alert number",
        callback: viewModel.alertNumber,
      },
    ],
    rightSide: [
      {
        label: "alert",
        callback: viewModel.makeAlert,
      },
    ],
  };

  const buttons1 = {
    leftSide: [],
    rightSide: [
      {
        label: "delete",
        callback: viewModel.delete,
      },
      {
        label: "reset",
        callback: viewModel.reset,
      },
    ],
  };

  return (
    <>
      <View viewModel={viewModel} buttons={buttons1} />
      <View viewModel={viewModel} buttons={buttons} />
    </>
  );
};
