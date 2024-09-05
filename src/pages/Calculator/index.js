import { useEffect, useState } from "react";

export default function Calculator() {
    const [result, setResult] = useState(0);
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [option, setOption] = useState("+");
    
    useEffect(() => {
        switch(option) {
            case "+":
                setResult(Number(num1) + Number(num2))
              break;
            case "-":
                setResult(num1 - num2)
              break;
            case "*":
                setResult(num1 * num2)
                break;
            case "/":
                setResult(num1 / num2)
              break;
            default:
              console.log("deu ruim!!!")
        }
    }, [num1, num2, option])

    return (
        <>
        <div className="bg-green-600 flex justify-center items-center flex-col h-screen w-screen gap-10">
            <div className="text-6xl">{result}</div>
            <div>
                <select onChange={(e) => setOption(e.target.value)} value={option}>
                    <option value="+">Soma</option>
                    <option value="-">Subtração</option>
                    <option value="*">Multiplicação</option>
                    <option value="/">Divisão</option>
                </select>
            </div>
            <div className="flex flex-col gap-10">
                <div className="flex gap-5">
                    <div className="flex flex-col">
                        <label>Número 1</label>
                        <input type="number" onChange={(e) => setNum1(e.target.value)}></input>
                    </div>
                    <div className="flex flex-col">
                        <label>Número 2</label>
                        <input type="number" onChange={(e) => setNum2(e.target.value)}></input>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}