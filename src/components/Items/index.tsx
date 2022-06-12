import { memo } from "react";
import Item from "../Item";
import { Question } from "../../services/questionService";
import styles from "./styles.module.scss";

interface Props {
  items: Question[];
}

const Items = ({ items }: Props) => (
  <div className={styles.items}>
    <h4>Question List</h4>
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  </div>
);

export default memo(Items);
