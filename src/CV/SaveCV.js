import FileSaver from "file-saver";
import jose from "./jose.pdf";
export const SaveCV = () => {
    FileSaver.saveAs(
        process.env.PUBLIC_URL + jose,"Jose Ignacio Lavecchia-Resume");
};