import axios from "axios";
import config from "../config";

export interface Question {
  question: string;
  answer: string;
}

interface QuestionList {
  data?: Question[];
  error?: Error;
}
export interface QuestionForm {
  isEdit: boolean;
  data?: Question;
}

export const getQuestionList = async (): Promise<QuestionList> => {
  try {
    const { data } = await axios.get(config.JSON_URL);
    return { data };
  } catch (error) {
    return { error };
  }
};
