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

            setValue('model', model, {shouldValidate: true});
            setValue('year', year, {shouldValidate: true});
            setValue('price', price, {shouldValidate: true});
        }
    }, [carForUpdate]);

    const formSubmit = async (car) => {
        if (carForUpdate) {
            const {data} = await carService.updateCar(carForUpdate.id, car);
            setCars(cars => {
                const findIndex = cars.findIndex(car => car.id === data.id);
                cars.splice(findIndex, 1, data);
                return [...cars];
            });
            setCarForUpdate(null);
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
                {errors.model && <span>{errors.model.message}</span>}
            </label>
            <label className={css.block}> Price
                <input type="text" placeholder={'price'}
                       {...register('price', {valueAsNumber: true})}
                />
                {errors.price && <span>{errors.price.message}</span>}
            </label>
            <label className={css.block}> Year
                <input type="text" placeholder={'year'}
                       {...register('year', {valueAsNumber: true})}/>
                {errors.year && <span>{errors.year.message}</span>}
            </label>
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
}

export default CarForm;