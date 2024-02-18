import { Displayer } from "./Displayer";

export function TwinHeader(props) {
  return (
    <div>
      <Displayer title={Math.random()}></Displayer>
      <Displayer title={Math.random()}></Displayer>
    </div>
  );
}
