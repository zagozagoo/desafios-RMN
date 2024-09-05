import styles from './styles.module.scss';
import { Box, Div } from './styled';
import { useState } from 'react';
import trash from '../../img/trash.svg'

export default function ToDoList() {
    const [list, setList] = useState([]);
    const [value, setValue] = useState('');

    const handleAddItem = () => {
        if (value.trim()) {
            setList([...list, value]);
            setValue('');
        }
    };

    const exclui = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    return (
        <>
            <div className={styles.content}> 
                <div className={styles.search}>
                    <input
                        className={styles.entrada}
                        type='text'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button onClick={handleAddItem}>Inserir</button>
                </div>
                <Div>
                    {list.map((item, index) => (
                        <Box key={index}>
                            {item}
                            <button onClick={() => exclui(index)}>
                                <img src={trash} alt="logo"/>
                            </button>
                        </Box>
                    ))}
                </Div>
            </div>
        </>
    );
}