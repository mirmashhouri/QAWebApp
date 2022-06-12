import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Items from "..";

describe("<Items />", () => {
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <Items
          items={[
            {
              id: 1,
              question: "What is your name?",
              answer: "My name is Abbas",
            },
          ]}
        />
      </MemoryRouter>
    ).container.firstChild;

    expect(tree).toMatchSnapshot();
  });
});
