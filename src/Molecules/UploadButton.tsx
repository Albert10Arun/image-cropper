import { FC } from "react";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";

type propTypes = {
  getOutput?: (value: any) => void;
};

const UploadButton: FC<propTypes> = ({ getOutput }) => {
  //this is to upload and make file readable
  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      getOutput?.(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  return <Input type="file" onChange={onChange} />;
};

export default UploadButton;
