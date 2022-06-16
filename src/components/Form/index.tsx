import { memo } from "react";
import { useForm } from "react-hook-form";
import Tooltip from "../Tooltip";
import { Question, QuestionForm } from "../../services/questionService";
import styles from "./styles.module.scss";

interface Props {
  onAddOrEdit: (data: Question, hasDelay: boolean) => void;
  item: QuestionForm;
}
const Form = ({ onAddOrEdit, item }: Props): JSX.Element => {
  // const [isVisible, setIsVisible] = useState(false);
  // const QuestionOnClick = () => {
  //   setIsVisible(!isVisible);
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      question: item.data ? item.data.question : "",
      answer: item.data ? item.data.answer : "",
      hasDelay: false,
    },
  });
  const onSubmit = (data: any) => {
    const question: Question = {
      question: data.question,
      answer: data.answer,
    };
    onAddOrEdit(question, data.hasDelay);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Tooltip content="question form">
        <h4>{item.data ? "Edit Your Question!" : "Create New Question"}</h4>
      </Tooltip>
      <div className="mb-3">
        <label className="form-label w-100" htmlFor="question">
          <span>Question</span>
          <input
            className="form-control"
            id="question"
            type="text"
            {...register("question", { required: true, maxLength: 198 })}
          />
        </label>
        <div className={styles.error}>
          {errors.question && errors.question.type === "required" && (
            <span>Question is required</span>
          )}
          {errors.question && errors.question.type === "maxLength" && (
            <span>Max length exceeded</span>
          )}
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label w-100" htmlFor="answer">
          <span>Answer</span>
          <textarea
            className="form-control"
            id="answer"
            {...register("answer", { required: true, maxLength: 2000 })}
          />
        </label>
        <div className={styles.error}>
          {errors.answer && errors.answer.type === "required" && (
            <span>Answer is required</span>
          )}
          {errors.answer && errors.answer.type === "maxLength" && (
            <span>Max length exceeded</span>
          )}
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label w-100" htmlFor="hasDelay">
          <span>5s delay</span>
          <input
            className="form-check-input"
            id="hasDelay"
            type="checkbox"
            {...register("hasDelay", {})}
          />
        </label>
      </div>
      <input className="btn btn-primary" type="submit" />
    </form>
  );
};

export default memo(Form);
