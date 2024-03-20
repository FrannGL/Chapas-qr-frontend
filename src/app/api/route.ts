import axios from "axios";
const API = `${process.env.NEXT_PUBLIC_API_BASE}/api`

export async function get (url: string) {
  try {
    const response = await axios.get(`${API}/${url}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      error;
    }
  }
};

/* POST and PUT */
export const sendData = async (url: string, method: string, data: any, nameProperty?: string) => {
  const bodyData = nameProperty ? { [nameProperty]: data } : data;
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };

  const response = await fetch(`${API}/${url}`, config);
  const responseData = await response.json();
  return responseData;
};

export const post = async (url: string, data: any) => {
  try {
    const response = await axios.post(`${API}/${url}`, data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      error;
    }
  }
};

export const postFile = async (url: string, fileData: FormData) => {
  try {
    const response = await fetch(`${API}/${url}`, {
      method: "POST",
      body: fileData,
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};

export const update = async (url: string, id: string, data?: any) => {
  try {
    const response = await axios.put(`${API}/${url}/${id}`, data);
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      error;
    }
  }
};

export const remove = async (url: string, id: string) => {
  try {
    const response = await axios.delete(`${API}/${url}/${id}`);
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      error;
    }
  }
};