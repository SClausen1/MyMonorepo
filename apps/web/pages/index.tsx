import { Button } from "ui";
import { Universe } from "sclausen1-wasm-game-of-life"
export default function Web() {
  const universe = Universe.new()
  return (
    <div>
      <h1>Web</h1>
      <Button />
      
    </div>
  );
}
