import { memo } from "react";
import { Link } from "react-router-dom";

import { Question } from "../../services/questionService";
import styles from "./styles.module.scss";

interface Props {
  items: Question[];
}

const Items = ({ items }: Props) => (
  <div className={styles.items}>
    <h4>Question List</h4>
    <ul>
      {items.map(({ id, question, answer }) => (
        <li key={id}>
          <Link to={`/UserInfo/${id}`}>{question}</Link>
          <div>{answer}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default memo(Items);
