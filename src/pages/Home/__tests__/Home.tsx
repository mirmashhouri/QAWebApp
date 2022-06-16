import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { fetchQuestionListIfNeed } from "../../../store/questionList";
import mockStore from "../../../utils/mockStore";
import Home from "../Home";

describe("<Home />", () => {
  const renderHelper = (reducer = { readyStatus: "invalid" }) => {
    const { dispatch, ProviderWithStore } = mockStore({
      questionList: reducer,
    });
    const { container } = render(
      <ProviderWithStore>
        <MemoryRouter>
          {/*
            @ts-expect-error */}
          <Home />
        </MemoryRouter>
      </ProviderWithStore>
    );

    return { dispatch, firstChild: container.firstChild };
  };

  it("should fetch data when page loaded", () => {
    const { dispatch } = renderHelper();

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch.mock.calls[0][0].toString()).toBe(
      fetchQuestionListIfNeed().toString()
    );
  });

  it("renders the loading status if data invalid", () => {
    expect(renderHelper().firstChild).toMatchSnapshot();
  });

  it("renders the loading status if requesting data", () => {
    const reducer = { readyStatus: "request" };

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });

  it("renders an error if loading failed", () => {
    const reducer = { readyStatus: "failure" };

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });

  it("renders the <Items /> if loading was successful", () => {
    const reducer = {
      readyStatus: "success",
      items: [
        {
          question: "What is your name?",
          answer: "My name is Abbas",
        },
      ],
    };

    expect(renderHelper(reducer).firstChild).toMatchSnapshot();
  });
});
