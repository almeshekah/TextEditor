import '../App.css';

const TextBar = (props) => {
  return (
    <input className = "text-bar"
      onChange={(event) => event.target.value}
    />
  );
};

export default TextBar;