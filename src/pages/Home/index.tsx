import loadable from "@loadable/component";

import { Loading, ErrorBoundary } from "../../components";
import { Props, loadData } from "./QA";

const QA = loadable(() => import("./QA"), {
  fallback: <Loading />,
});

export default (props: Props): JSX.Element => (
  <ErrorBoundary>
    <QA {...props} />
  </ErrorBoundary>
);
export { loadData };
