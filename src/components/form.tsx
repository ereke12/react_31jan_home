import React, { ChangeEvent, FormEvent, useState } from "react";

export const Form: React.FC = () =>{
    const [values, setValues] = useState<{firstName: string, lastName: string}>({firstName: '', lastName: ''});

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(values)
    }
    const handleCleare = () => {
        setValues({
            firstName: '',
            lastName: ''
        })
    }
    const handleValue = (fieldName: string) => {
        return (e: ChangeEvent<HTMLInputElement>) => {setValues((s) => ({
            ...s,
            [fieldName]: e.target.value
        }))}
    }
    return <>
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label htmlFor="">First Name</label>
                <input name="firstName" value={values.firstName} onChange={handleValue('firstName')}/>
            </div>
            <div>
                <label htmlFor="">Last Name</label>
                <input name="lastName" value={values.lastName} onChange={handleValue('lastName')}/>
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCleare}>Clear</button>
        </form>
    </>
}