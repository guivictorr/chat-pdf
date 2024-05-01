import axios from "axios";

export const chatPdf = axios.create({
  baseURL: "https://api.chatpdf.com/v1",
});
