import axios from 'axios';

export interface UseFetchDataProps {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: any;
  params?: any;
}


const useFetchData = async(props: UseFetchDataProps)=> {
 
  const { url, method = 'GET', body = null, headers = {}, params = {} } = props;

     try {

      const response = await axios({
        method:method,
        url:url,
        headers:headers,
        params:params,
        data:body
      });

      return response.data;

     } catch (error) {
        console.log("error:",error);
     }

};

export default useFetchData;

