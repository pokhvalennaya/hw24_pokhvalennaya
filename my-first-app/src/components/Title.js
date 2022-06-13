import "./Title.css";

const Title = ({ name, type }) => {
  const className = type === "bold" ? "bold" : "normal" ? "normal" : "";

  return <h1 className={className}>It's {name}'s first react app</h1>;
};

export default Title;
