export interface IFileUpload {
  acceptedFormats?: string[];
  uploadHandler: (file: File) => void;
  textItems?: {
    mainText: string;
    subText?: string;
  };
  currentFileUrl?: string;
}
