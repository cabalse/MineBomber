import GameBoard from "components/GameBoard";
import Menu from "components/Menu";
import TitleBar from "components/Titlebar";

export default function Home() {
  return (
    <>
      <TitleBar />
      <Menu />
      <GameBoard />
    </>
  );
}
