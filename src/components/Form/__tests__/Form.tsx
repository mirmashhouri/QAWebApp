import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Form from "..";

describe("<Form />", () => {
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
