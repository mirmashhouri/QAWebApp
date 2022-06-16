import { memo, useState } from "react";

import { Question } from "../../services/questionService";
import styles from "./styles.module.scss";

interface Props {
  item: Question;
  onDelete: (data: Question) => void;
  onEdit: (data: Question) => void;
}

const Item = ({ item, onDelete, onEdit }: Props): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const QuestionOnClick = () => {
    setIsVisible(!isVisible);
  };
  const QuestionOnDelete = () => {
    onDelete(item);
  };
  const QuestionOnEdit = () => {
    onEdit(item);
  };
  return (
    <div className={styles.item}>
      <ul>
        <li>
          <div className="row">
            <div className="col-7 col-md-9">
              <button
                className="w-100 text-left"
                type="button"
                onClick={QuestionOnClick}
              >
                {item.question}
              </button>
              <div
                className={`${styles.answer} ${isVisible ? styles.open : ""}`}
              >
                {item.answer}
              </div>
            </div>
            <div className={`col-5 col-md-3 ${styles.action}`}>
              <button type="button" onClick={QuestionOnEdit}>
                Edit
              </button>
              <span> | </span>
              <button type="button" onClick={QuestionOnDelete}>
                Delete
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default memo(Item);
