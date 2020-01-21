import Header from "./header";

const LayoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => {
  return (
    <div style={LayoutStyle}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
