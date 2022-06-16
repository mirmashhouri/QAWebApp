import { memo } from "react";
import Item from "../Item";
import Tooltip from "../Tooltip";
import { Question } from "../../services/questionService";
import styles from "./styles.module.scss";

interface Props {
  items: Question[];
  onDelete: (data: Question) => void;
  onEdit: (data: Question) => void;
}

const Items = ({ items, onDelete, onEdit }: Props) => (
  <div className={styles.items}>
    <Tooltip content="Here are all of questions">
      <h4>Question List</h4>
    </Tooltip>
    <ul>
      {items.length === 0 ? (
        <div>there is no question</div>
      ) : (
        items.map((item, index) => {
          const id = `q${index}`;
          return (
            <Item key={id} item={item} onDelete={onDelete} onEdit={onEdit} />
          );
        })
      )}
    </ul>
  </div>
);

export default memo(Items);
