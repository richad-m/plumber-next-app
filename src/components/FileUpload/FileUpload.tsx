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
}: IFileUpload) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileUrl, setFileUrl] = useState<string>();

  const openFilesExplorer = (): void => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (): void => {
    const { files } = fileInputRef?.current || {};
    if (!files) {
      return;
    }
    const file = Array.from(files)[0];

    uploadHandler(file);

    if (file) {
      setFileUrl(URL.createObjectURL(file));
    }
  };

  return fileUrl ? (
    <FileUploadImportContainer>
      <Image
        src={fileUrl}
        alt="photo"
        width="75"
        height="75"
        style={{ objectFit: "cover" }}
      />
    </FileUploadImportContainer>
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
        <AiOutlinePlus size={"30px"} color="currentColor" />
      </FileUploadImportContainer>
    </button>
  );
}
