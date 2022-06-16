import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Tooltip from "..";

describe("<Tooltip />", () => {
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <Tooltip content="test">
          <div>it is childeren</div>
        </Tooltip>
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
