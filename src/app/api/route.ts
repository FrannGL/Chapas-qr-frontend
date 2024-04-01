import axios from "axios";
const API = `${process.env.NEXT_PUBLIC_API_BACKEND}/api`

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

export async function post(url: string, formData: any) {
  try {
      const response = await axios.post(`${API}/${url}`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      });
      return response.data;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
};

export const update = async (url: string,  formData: any, id: string) => {
  try {
    const response = await axios.put(`${API}/${url}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
    }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      error;
    }
  }
};

export async function remove (url: string, id: string) {
  try {
    const response = await axios.delete(`${API}/${url}/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      error;
    }
  }
};
