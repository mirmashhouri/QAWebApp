import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Items from "..";

describe("<Items />", () => {
  const onDelete = () => () => undefined;
  const onEdit = () => () => undefined;
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <Items
          items={[
            {
              question: "What is your name?",
              answer: "My name is Abbas",
            },
          ]}
          onDelete={onDelete()}
          onEdit={onEdit()}
        />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
