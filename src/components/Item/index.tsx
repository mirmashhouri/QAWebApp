import { memo, useState } from "react";
import { Link } from "react-router-dom";

import { Question } from "../../services/questionService";
import styles from "./styles.module.scss";

interface Props {
  item: Question;
}

const Item = ({ item }: Props): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const QuestionOnClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={styles.item}>
      <ul>
        <li key={item.id}>
          <button type="button" onClick={QuestionOnClick}>
            {item.question}
          </button>
          <Link to={`/UserInfo/${item.id}`}> edit </Link>
          <span> | </span>
          <Link to={`/UserInfo/${item.id}`}> delete </Link>
          <div className={`${styles.answer} ${isVisible ? styles.open : ""}`}>
            {item.answer}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default memo(Item);
