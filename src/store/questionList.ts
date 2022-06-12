import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Question, getQuestionList } from "../services/questionService";
import { AppThunk, AppState } from ".";

interface QuestionList {
  readyStatus: string;
  items: Question[];
  error: string | null;
}

export const initialState: QuestionList = {
  readyStatus: "invalid",
  items: [],
  error: null,
};

const questionList = createSlice({
  name: "questionList",
  initialState,
  reducers: {
    getRequesting: (state: QuestionList) => {
      state.readyStatus = "request";
    },
    getSuccess: (state, { payload }: PayloadAction<Question[]>) => {
      state.readyStatus = "success";
      state.items = payload;
    },
    getFailure: (state, { payload }: PayloadAction<string>) => {
      state.readyStatus = "failure";
      state.error = payload;
    },
    insert: (state, { payload }: PayloadAction<Question>) => {
      state.readyStatus = "success";
      state.items.push(payload);
    },
  },
});

export default questionList.reducer;
export const { getRequesting, getSuccess, getFailure, insert } =
  questionList.actions;

export const fetchQuestionList = (): AppThunk => async (dispatch) => {
  dispatch(getRequesting());

  const { error, data } = await getQuestionList();

  if (error) {
    dispatch(getFailure(error.message));
  } else {
    dispatch(getSuccess(data as Question[]));
  }
};
export const addNewQuestion =
  (data: Question): AppThunk =>
  async (dispatch) => {
    dispatch(getRequesting());
    dispatch(insert(data));
  };

const shouldFetchQuestionList = (state: AppState) =>
  state.questionList.readyStatus !== "success";

export const fetchQuestionListIfNeed = (): AppThunk => (dispatch, getState) => {
  if (shouldFetchQuestionList(getState())) return dispatch(fetchQuestionList());

  return null;
};
