import axios from "axios";

import mockStore from "../../utils/mockStore";
import questionList, {
  initialState,
  getRequesting,
  getSuccess,
  getFailure,
  fetchQuestionList,
} from "../questionList";

jest.mock("axios");

const mockData = [
  {
    question: "What is your name?",
    answer: "My name is Abbas",
  },
];
const mockError = "Oops! Something went wrong.";

describe("questionList reducer", () => {
  it("should handle initial state", () => {
    // @ts-expect-error
    expect(questionList(undefined, {})).toEqual(initialState);
  });

  it("should handle requesting correctly", () => {
    expect(questionList(undefined, { type: getRequesting.type })).toEqual({
      readyStatus: "request",
      items: [],
      error: null,
    });
  });

  it("should handle success correctly", () => {
    expect(
      questionList(undefined, { type: getSuccess.type, payload: mockData })
    ).toEqual({ ...initialState, readyStatus: "success", items: mockData });
  });

  it("should handle failure correctly", () => {
    expect(
      questionList(undefined, { type: getFailure.type, payload: mockError })
    ).toEqual({ ...initialState, readyStatus: "failure", error: mockError });
  });
});

describe("questionList action", () => {
  it("fetches question list successful", async () => {
    const { dispatch, getActions } = mockStore();
    const expectedActions = [
      { type: getRequesting.type },
      { type: getSuccess.type, payload: mockData },
    ];

    // @ts-expect-error
    axios.get.mockResolvedValue({ data: mockData });

    await dispatch(fetchQuestionList());
    expect(getActions()).toEqual(expectedActions);
  });

  it("fetches question list failed", async () => {
    const { dispatch, getActions } = mockStore();
    const expectedActions = [
      { type: getRequesting.type },
      { type: getFailure.type, payload: mockError },
    ];

    // @ts-expect-error
    axios.get.mockRejectedValue({ message: mockError });

    await dispatch(fetchQuestionList());
    expect(getActions()).toEqual(expectedActions);
  });
});
