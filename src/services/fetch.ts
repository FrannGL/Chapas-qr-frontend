import axios from "axios";
const API = `${process.env.NEXT_PUBLIC_API_BACKEND}/api`

export async function GET(url: string): Promise <any> {
   try {
    const res = await fetch(`${API}/${url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }
    });
    const data = await res.json();
    return data 
   } catch (e) {
      console.log(e)
   }
};

export async function POST(url: string, formData: any): Promise <any>{
  try {
      const res = await axios.post(`${API}/${url}`, formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      });
      return res.data;
  } catch (error) {
      console.error('Error:', error);
      throw error;
  }
};

export async function PUT(url: string,  formData: any, id: string): Promise <any> {
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

export async function DELETE(url: string, id: string): Promise <any> {
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
