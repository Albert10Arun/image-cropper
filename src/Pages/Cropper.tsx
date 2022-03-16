import { FC, useRef, useState } from "react";
import Button from "../Atoms/Button";
import UploadButton from "../Molecules/UploadButton";
import EditOptions from "../Organisms/EditOptions";
import ImageCropper from "../Organisms/ImageCropper";

const defaultSrc =
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";

/**
 * the cropperInstance state has the instance of whole cropper js class
 * if you want to use all the options visit https://github.com/fengyuanchen/cropperjs
 *
 * @returns
 *
 */

const Cropper: FC = () => {
  const [imgUrl, setImgUrl] = useState(defaultSrc);
  const [croppedImg, setCroppedImg] = useState<any>();
  const [cropperInstance, setCropperInstance] = useState<any>();
  const cropperRef = useRef<HTMLImageElement>(null);

  /**
   * Provides the current cropped image by using ref
   */
  const onCrop = () => {
    console.log(cropperRef);
    const imageElement: any = cropperRef?.current;
    const cropper: any = imageElement?.cropper;
    cropper.getCroppedCanvas().toBlob(
      (blob: any) => {
        console.log(blob);
      },
      "image/jpeg",
      1
    );
    setCroppedImg(cropper.getCroppedCanvas().toDataURL());
  };

  return (
    <>
      {/*to upload image*/}
      <UploadButton getOutput={setImgUrl} />
      {/* Main Component - provides instance of cropperJs  */}
      <ImageCropper
        getCropperInstance={setCropperInstance}
        src={imgUrl}
        viewMode={2}
        initialAspectRatio={0}
        cropperRef={cropperRef}
        dragMode={"crop"}
        style={{ height: 500, width: "100%" }}
        preview={".img-preview"} //optional but must be passed with '.'+ className
        rotatable={true}
        responsive={true}
      />
      {/* OPTIONAL  */}
      <EditOptions changeOptions={cropperInstance} />
      <div className="box" style={{ width: "50%", float: "right" }}>
        <h1>Preview</h1>
        <div
          className="img-preview"
          style={{ width: "100%", float: "left", height: "300px" }}
        />
      </div>{" "}
      <div>
        <h1>
          get cropped image{" "}
          {/* 
          to get cropped image:
          pass a function call to cropperInstance.crop()
          */}
          <Button
            buttonText="crop"
            onClick={() => cropperInstance.crop(onCrop())}
          />
        </h1>

        <img src={croppedImg} alt="click on crop img" />
      </div>
    </>
  );
};

export default Cropper;
