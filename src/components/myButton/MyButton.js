const MyButton = ({cb, children}) => {

    return (
        <button onClick={cb}>{children} details</button>
    );
};

export {MyButton};