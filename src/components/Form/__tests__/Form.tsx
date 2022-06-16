import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Form from "..";

describe("<Form />", () => {
  const onSubmit = () => () => undefined;

  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <Form
          onAddOrEdit={onSubmit()}
          item={{
            isEdit: false,
            data: undefined,
          }}
        />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
