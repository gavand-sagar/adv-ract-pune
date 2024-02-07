import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { MyFormModel } from './form.model';

type Props = {}

export default function FormDemo({ }: Props) {
    const { handleSubmit, register, formState } = useForm<MyFormModel>();

    const mySubmit = (data: MyFormModel) => {
        console.log(data)
    }

    console.log(formState.errors)

    return (
        <div>
            <input type='text' {...register("firstName", { required: { value: true, message: "First name is Required." }, maxLength: { value: 5, message: "Maxlength is 5." } })} />
            <br />
            <input type='date'  {...register("joiningDate")} />
            <br />
            <input type='number'  {...register("numberOfSomething")} />
            <br />
            <input type='range'  {...register("rating")} />
            <br />
            <select  {...register("city")}>
                <option>Mumbai</option>
                <option>Pune</option>
            </select>
            <br />
            <button onClick={handleSubmit(mySubmit)}>SUBMIT</button>
        </div>
    )
}