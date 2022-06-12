import axios from "axios";

// import config from "../config";

export interface Question {
  id: number;
  question: string;
  answer: string;
}

interface QuestionList {
  data?: Question[];
  error?: Error;
}

// const initialQ:Question[]=[{
//     id: 1,
//     question: "What is your name?",
//     answer: "My name is Abbas"
// }];
export const getQuestionList = async (): Promise<QuestionList> => {
  try {
    const { data } = await axios.get("/db/data.json");
    return { data };
  } catch (error) {
    return { error };
  }
};
