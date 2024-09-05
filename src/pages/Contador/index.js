import { useState } from "react";
import { useEffect } from "react";

export default function Contador() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
      const id = setTimeout(() => {
        setCount(count+1)
      }, 5000);

      document.title = 'Brat: '+ count;
  
      return () => clearTimeout(id);
    }, [count]);

    useEffect(() => {
        setShow(count > 0)

        const id = setTimeout(() => {
            setShow(false)
        }, 1000)
        
        return () => clearTimeout(id)
    }, [count]);
  
    return (
      <div className="flex justify-center items-center flex-col bg-lime-600 h-screen w-screen">
        {show && <h1>O Brat agora é :</h1>}

        <div>
            {count}
        </div>
      </div>
    );
}