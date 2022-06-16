import { FC, useEffect, memo, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";
import { AppState, AppThunk } from "../../store";
import {
  fetchQuestionListIfNeed,
  addNewQuestion,
  deleteAllQuestions,
  sortQuestions,
  deleteQuestion,
  editQuestion,
} from "../../store/questionList";
import { Question, QuestionForm } from "../../services/questionService";
import { Items, Form, Tooltip } from "../../components";
import styles from "./styles.module.scss";

export type Props = RouteComponentProps;

const Home: FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { readyStatus, items } = useSelector(
    ({ questionList }: AppState) => questionList,
    shallowEqual
  );

  const initialForm: QuestionForm = {
    isEdit: false,
    data: undefined,
  };
  const [editIndex, setEditIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const FormLoad = (data?: Question) => {
    setIsVisible(false);
    setEditIndex(editIndex + 1);
    setFormData(data ? { isEdit: true, data } : initialForm);
    setIsVisible(true);
  };
  // Fetch client-side data here
  useEffect(() => {
    dispatch(fetchQuestionListIfNeed());
  }, [dispatch]);

  const AddOrEdit = (data: Question, hasDelay: boolean) => {
    const delay = hasDelay ? 5000 : 0;
    if (formData.isEdit && formData.data)
      dispatch(editQuestion(formData.data, data, delay));
    else {
      dispatch(addNewQuestion(data, delay));
    }
    setIsVisible(false);
  };
  const DeleteAllOnClick = () => {
    dispatch(deleteAllQuestions());
  };
  const SortOnClick = () => {
    dispatch(sortQuestions());
  };
  const OnDelete = (data: Question) => {
    dispatch(deleteQuestion(data));
  };
  const OnEdit = (data: Question) => {
    FormLoad(data);
  };
  const renderList = () => {
    if (!readyStatus || readyStatus === "invalid" || readyStatus === "request")
      return <p>Loading...</p>;

    if (readyStatus === "failure") return <p>Loading</p>;

    return (
      <div className="container-md">
        <Items items={items} onDelete={OnDelete} onEdit={OnEdit} />
        {isVisible ? (
          <Form key={editIndex} onAddOrEdit={AddOrEdit} item={formData} />
        ) : null}
        <Tooltip content="Open the question form to insert new">
          <button
            className="btn btn-light m-1"
            type="button"
            onClick={() => FormLoad(undefined)}
          >
            Add New
          </button>
        </Tooltip>
        <Tooltip content="Sort alphabeta all questions">
          <button
            className="btn btn-light m-1"
            type="button"
            onClick={SortOnClick}
          >
            Sort
          </button>
        </Tooltip>
        <Tooltip content="Dell all questions">
          <button
            className="btn btn-danger m-1"
            type="button"
            onClick={DeleteAllOnClick}
          >
            Delete All
          </button>
        </Tooltip>
      </div>
    );
  };

  return (
    <div className={styles.home}>
      <Helmet title="Home page" />
      {renderList()}
    </div>
  );
};

// Fetch server-side data here
export const loadData = (): AppThunk[] => [
  fetchQuestionListIfNeed(),
  // More pre-fetched actions...
];

export default memo(Home);
