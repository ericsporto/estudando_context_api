import React, { useState, useContext } from "react";

import { CustomerContext } from "../contexts/customer";

export const CustomerForm = () => {

    const { submit } = useContext(CustomerContext)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        console.log("dados", {name, email})

        submit({name, email})
    }
    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">E-mail</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <button type="submit">Enviar</button>
        </form>
    )
}