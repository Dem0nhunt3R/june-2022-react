const Car = ({car, setCarForUpdate, deleteCar}) => {
    const {id, model, price, year} = car;

    return (
        <div>
            <div>{id}. {model} {price}$ {year}year.</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={() => deleteCar(id)}>delete</button>
        </div>

    );
};

export default Car;