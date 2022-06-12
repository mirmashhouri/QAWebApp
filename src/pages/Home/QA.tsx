import { FC, useEffect, memo } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Helmet } from "react-helmet";

import { AppState, AppThunk } from "../../store";
import {
  fetchQuestionListIfNeed,
  addNewQuestion,
} from "../../store/questionList";
import { Question } from "../../services/questionService";
import { Items, Form } from "../../components";
import styles from "./styles.module.scss";

export type Props = RouteComponentProps;

const QA: FC<Props> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { readyStatus, items } = useSelector(
    ({ questionList }: AppState) => questionList,
    shallowEqual
  );

  // Fetch client-side data here
  useEffect(() => {
    dispatch(fetchQuestionListIfNeed());
  }, [dispatch]);

  const addNew = (data: Question) => {
    dispatch(addNewQuestion(data));
  };
  const renderList = () => {
    if (!readyStatus || readyStatus === "invalid" || readyStatus === "request")
      return <p>Loading...</p>;

    if (readyStatus === "failure") return <p>Oops, Failed to load list!</p>;

    return (
      <div>
        <Items items={items} />
        <Form onAdd={addNew} />
      </div>
    );
  };

  return (
    <div className={styles.Home}>
      <Helmet title="Q/A page" />
      {renderList()}
    </div>
  );
};

// Fetch server-side data here
export const loadData = (): AppThunk[] => [
  fetchQuestionListIfNeed(),
  // More pre-fetched actions...
];

export default memo(QA);
