import View from "./View";
import ViewModel from "./ViewModel";

export const AC = (props: any) => {
  const viewModel = new ViewModel();
  return <View viewModel={viewModel} {...props} />;
};
