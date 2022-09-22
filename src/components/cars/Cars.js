import {useEffect, useState} from "react";

import Car from "../car/Car";
import {carService} from "../../services";
import CarForm from "../carForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getCars().then(({data}) => setCars([...data]))
    }, []);

    const deleteCar = async (id) => {
        const {status} = await carService.deleteCar(id);
        if (status === 204) {
            const index = cars.findIndex(car => car.id === id);
            cars.splice(index, 1);
            setCars([...cars]);
        }
    }

    return (
        <div>
            <CarForm setCars={setCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} deleteCar={deleteCar}/>)}
        </div>
    );
};

export default Cars;