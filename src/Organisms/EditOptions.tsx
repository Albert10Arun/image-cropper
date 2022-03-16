import { FC } from "react";
import Button from "../Atoms/Button";

type propTypes = {
  changeOptions: any;
};
const EditOptions: FC<propTypes> = ({ changeOptions }) => {
  console.log(changeOptions);
  return (
    <div>
      <h1>options</h1>
      <h1>zoom in</h1>
      <Button buttonText="zoom +" onClick={() => changeOptions.zoom(0.1)} />
      <h1>zoom out</h1>
      <Button buttonText="zoom -" onClick={() => changeOptions.zoom(-0.1)} />
      <Button
        buttonText="move image"
        onClick={() => changeOptions.setDragMode("move")}
      />
      <h2>Smallest</h2>
      <Button
        buttonText="lock image"
        onClick={() => changeOptions.setDragMode("crop")}
      />
    </div>
  );
};

export default EditOptions;
