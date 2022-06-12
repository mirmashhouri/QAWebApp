import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Item from "..";

describe("<Item />", () => {
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <Item
          item={{
            id: 1,
            question: "What is your name?",
            answer: "My name is Abbas",
          }}
        />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
