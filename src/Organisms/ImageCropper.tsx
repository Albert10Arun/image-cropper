import React, { useEffect, useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./Demo.css";

type CropOptions = {
  cropperRef: React.MutableRefObject<HTMLImageElement | null>;
  getCropperInstance: React.Dispatch<React.SetStateAction<any>>;
};

interface ReactCropperProps
  extends CropOptions,
    Cropper.Options<HTMLImageElement>,
    Omit<React.HTMLProps<HTMLImageElement>, "data" | "ref" | "crossOrigin"> {
  crossOrigin?: "" | "anonymous" | "use-credentials" | undefined;
  on?: (
    eventName: string,
    callback: () => void | Promise<void>
  ) => void | Promise<void>;
  onInitialized?: (instance: Cropper) => void | Promise<void>;
}

export const ImageCropper: React.FC<ReactCropperProps> = (props) => {
  const { getCropperInstance,cropperRef } = props;
  useEffect(() => {
    console.log(props);
  }, [props]);

  return (
    <>
      <Cropper
        {...props}
        onInitialized={(crop) => {
          console.log(crop.crop);
          getCropperInstance(crop);
        }}
        ref={cropperRef}
      />
    </>
  );
};

export default ImageCropper;
