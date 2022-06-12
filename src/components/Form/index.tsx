import { memo } from "react";
import { useForm } from "react-hook-form";
import { Question } from "../../services/questionService";
import styles from "./styles.module.scss";

// interface Props {
//   item: Question;
// }

const Form = ({ onAdd }: any): JSX.Element => {
  // const [isVisible, setIsVisible] = useState(false);
  // const QuestionOnClick = () => {
  //   setIsVisible(!isVisible);
  // };
  let lastId = 2;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    lastId += 1;
    data.id = lastId;
    onAdd(data as Question);
  };
  console.log(errors);

  return (
    <form className={styles.item} onSubmit={handleSubmit(onSubmit)}>
      <ul>
        <li>
          <input
            type="text"
            placeholder="question"
            {...register("question", { required: true, maxLength: 198 })}
          />
        </li>
        <li>
          <textarea
            {...register("answer", { required: true, maxLength: 2000 })}
          />
        </li>
        <li>
          <input type="submit" />
        </li>
      </ul>
    </form>
  );
};

export default memo(Form);
