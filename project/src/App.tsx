import Example from "src/components/Example";

const AppInnerComponent = (props) => {
  return (
    <div>
      <Example />
    </div>
  );
};

const App = (props) => {
  return <AppInnerComponent />;
};

export default App;
