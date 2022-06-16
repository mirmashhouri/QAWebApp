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

interface Edit {
  oldData: Question;
  newData: Question;
}
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
    deleteOne: (state, { payload }: PayloadAction<Question>) => {
      state.readyStatus = "success";
      state.items = state.items.filter((q) => q.question !== payload.question);
    },
    deleteAll: (state: QuestionList) => {
      state.readyStatus = "success";
      state.items = [];
    },
    edit: (state, { payload }: PayloadAction<Edit>) => {
      state.readyStatus = "success";
      const index = state.items.findIndex(
        (q) => q.question === payload.oldData.question
      );
      state.items[index] = payload.newData;
    },
    sort: (state: QuestionList) => {
      state.readyStatus = "success";
      state.items.sort((a, b) =>
        a.question.toLowerCase().localeCompare(b.question.toLowerCase())
      );
    },
  },
});

export default questionList.reducer;
export const {
  getRequesting,
  getSuccess,
  getFailure,
  insert,
  deleteAll,
  sort,
  deleteOne,
  edit,
} = questionList.actions;

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
  (data: Question, delay: number): AppThunk =>
  async (dispatch) => {
    setTimeout(() => {
      dispatch(getRequesting());
      dispatch(insert(data));
    }, delay);
  };
export const deleteAllQuestions = (): AppThunk => async (dispatch) => {
  dispatch(getRequesting());
  dispatch(deleteAll());
};
export const deleteQuestion =
  (data: Question): AppThunk =>
  async (dispatch) => {
    dispatch(getRequesting());
    dispatch(deleteOne(data));
  };
export const editQuestion =
  (oldData: Question, newData: Question, delay: number): AppThunk =>
  async (dispatch) => {
    setTimeout(() => {
      dispatch(getRequesting());
      const editData: Edit = {
        oldData,
        newData,
      };
      dispatch(edit(editData));
    }, delay);
  };
export const sortQuestions = (): AppThunk => async (dispatch) => {
  dispatch(getRequesting());
  dispatch(sort());
};

const shouldFetchQuestionList = (state: AppState) =>
  state.questionList.readyStatus !== "success";

export const fetchQuestionListIfNeed = (): AppThunk => (dispatch, getState) => {
  if (shouldFetchQuestionList(getState())) return dispatch(fetchQuestionList());

  return null;
};
