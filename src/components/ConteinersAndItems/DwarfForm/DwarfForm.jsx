import React from 'react'
import { useForm } from 'react-hook-form';
import { getDiscount } from '../../../requests/singleProducts_req';
import s from '../DwarfForm/DwarfForm.module.css'

export default function DwarfForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    });



    const phoneNumberRegister = register('phoneNumber', {
        required: "*This field is required",
        pattern: {
            value: /^(?:\+49|0)[1-9][0-9]*(?:[\s-]?\d+)*$/,
            message: '*Please, enter valid phoneNumber address'
        }
    });

    const submit = new_product_obj => {
        getDiscount(new_product_obj);
        alert("Congratulations! You have got your disount 5%");


    }



    return (
        <form onSubmit={handleSubmit(submit)} className={s.dwarf_form}>
            <input
                type="text"
                placeholder='+491' name='phoneNumber'
                {...phoneNumberRegister}
            />

            {errors.phoneNumber && <p className={s.error_msg}>{errors.phoneNumber?.message}</p>}

            <button>Get a discount</button>
        </form>
    )
}
