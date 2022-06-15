const Title = ({ name, type = "normal" }) => {
  return <h1 style={{ fontWeight: type }}>It's {name}'s first react app</h1>;
};

export default Title;
