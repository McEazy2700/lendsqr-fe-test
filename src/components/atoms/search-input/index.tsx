import styles from "./styles.module.scss";
import FluentSearch24Filled from "~icons/fluent/search-24-filled.jsx";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const SearchInput: React.FC<Props> = ({ className, ...props }) => {
  return (
    <div className={`${className} ${styles.container}`}>
      <input {...props} />
      <button>
        <FluentSearch24Filled />
      </button>
    </div>
  );
};

export default SearchInput;
