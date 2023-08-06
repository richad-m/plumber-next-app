import { useRef, useState } from "react";
import { FileTypes } from "../../constants/fileUpload";
import { IFileUpload } from "./FileUpload.interface";
import { FileUploadImportContainer } from "./FileUpload.style";
import { AiOutlinePlus } from "react-icons/ai";
import Image from "next/image";

const ACCEPTED_FILE_FORMATS = Object.values(FileTypes);

export function FileUpload({
  acceptedFormats = ACCEPTED_FILE_FORMATS,
  uploadHandler,
  textItems,
}: IFileUpload) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileUrl, setFileUrl] = useState<string>();

  const openFilesExplorer = (): void => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (): void => {
    const { files = [] } = fileInputRef?.current || {};
    uploadHandler(files as FileList);

    if (files) {
      setFileUrl(URL.createObjectURL(files[0]));
    }
  };

  return fileUrl ? (
    <div>
      <FileUploadImportContainer>
        <Image
          src={fileUrl}
          alt="Uploaded photo"
          width="100"
          height="100"
          style={{ objectFit: "cover" }}
        />
      </FileUploadImportContainer>
    </div>
  ) : (
    <button onClick={openFilesExplorer}>
      {/* Hidden input file to open files explorer */}
      <input
        type="file"
        accept={acceptedFormats.join(", ")}
        ref={fileInputRef}
        multiple={false}
        onChange={onChangeHandler}
        style={{ display: "none" }}
      />
      <FileUploadImportContainer>
        <AiOutlinePlus size={"30px"} color="blue" />
      </FileUploadImportContainer>
    </button>
  );
}
