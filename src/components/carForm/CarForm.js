import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import css from './CarForm.module.css'
import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setCars, carForUpdate, setCarForUpdate}) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isValid},
        setValue
    } = useForm({resolver: joiResolver(carValidator), mode: "all"});

    useEffect(() => {
        if (carForUpdate) {
            const {model, year, price} = carForUpdate;
            setValue('model', model);
            setValue('year', year);
            setValue('price', price);
        }
    }, [carForUpdate]);

    const formSubmit = async (car) => {
        if (carForUpdate) {
            const {data} = await carService.updateCar(carForUpdate.id, car);
            setCars(cars => {
                const findIndex = cars.findIndex(car => car.id === data.id);
                cars.splice(findIndex, 1, data);
                setCarForUpdate(null);
                return [...cars];
            });
        } else {
            const {data} = await carService.createCar(car);
            setCars(cars => [...cars, data]);
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <label className={css.block}>Model
                <input type="text" placeholder={'model'} {...register('model')}/>
            </label>
            {errors.model && <span>{errors.model.message}</span>}
            <label className={css.block}> Price
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            </label>
            {errors.price && <span>{errors.price.message}</span>}
            <label className={css.block}> Year
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            </label>
            {errors.year && <span className={css.block}>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
}

export default CarForm;