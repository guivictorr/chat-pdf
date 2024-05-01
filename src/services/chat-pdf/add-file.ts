import { chatPdf } from ".";

interface AddFileResponse {
  sourceId: string;
}

export async function addFile(file: File): Promise<AddFileResponse | null> {
  const formData = new FormData();
  formData.append("file", file);
  const apiKey = localStorage.getItem("CHAT_PDF:API_KEY")?.replace(/"/gi, "");

  const options = {
    headers: {
      "x-api-key": apiKey,
      "Content-Type": "multipart/form-data",
    },
  };
  try {
    const result = await chatPdf.post<AddFileResponse>(
      "/sources/add-file",
      formData,
      options,
    );
    return result.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
