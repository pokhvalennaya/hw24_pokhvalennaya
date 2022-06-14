const Title = ({ name, type = "normal" }) => {
  const fontWeight = type === "bold" ? "bold" : "normal";

  return <h1 style={{ fontWeight }}>It's {name}'s first react app</h1>;
};

export default Title;
