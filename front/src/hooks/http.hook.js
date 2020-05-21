import {useState,useCallback} from 'react'

export const useHttp =()=>{
    const [loading,setLoading]=useState(false)
    const [error,setError]=useState(null)
    const [table,setTable]=useState([])
    const request = useCallback(async (url,method='GET',body=null, headers={})=>{
        setLoading(true)
        try {
            if(body)
            {
                body=JSON.stringify(body)
                headers['Content-Type']='application/json'
            }
            let f =0;
            const response= await fetch(url,{method,body,headers})
                .then(response => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.log(22)
                });
            // console.log("method", response.json())
             const data = response.json()
            if(!response.ok)
            {
                throw new Error(data.message || 'Error')
            }
            setLoading(false)
            setTable()
            return response
        }catch (e) {
            setLoading(false)
            setError(e.message)
            throw e

        }
    },[])
    const clearError = useCallback(()=>setError(null),[])
    return{loading,request,error,clearError,table}
}