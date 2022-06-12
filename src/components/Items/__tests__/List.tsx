import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import List from "..";

describe("<Items />", () => {
  it("renders", () => {
    const tree = render(
      <MemoryRouter>
        <List
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
