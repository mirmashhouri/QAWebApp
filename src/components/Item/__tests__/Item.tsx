import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Item from "..";

describe("<Item />", () => {
  const onDelete = () => () => undefined;
  const onEdit = () => () => undefined;
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <Item
          item={{
            question: "What is your name?",
            answer: "My name is Abbas",
          }}
          onDelete={onDelete()}
          onEdit={onEdit()}
        />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
