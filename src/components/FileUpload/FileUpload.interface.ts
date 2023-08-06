export interface IFileUpload {
  acceptedFormats?: string[];
  uploadHandler: (files: FileList | null) => void;
  textItems?: {
    mainText: string;
    subText?: string;
  };
  currentFileUrl?: string;
}
