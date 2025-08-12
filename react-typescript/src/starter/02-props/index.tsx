type ComponentProps = {
  name: string;
  id: number;
  children?: React.ReactNode;
};

function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Props</h2>
      <p>Name: {name}</p>
      <p>ID: {id}</p>
      {children}
    </div>
  );
}
export default Component;