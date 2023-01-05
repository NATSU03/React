import { useState } from "react"

function Form() {
    let [name, setName] = useState("")
    let [nameent, setNameEnt] = useState(null)

    let [lastname, setLastName] = useState("")
    let [lastnameEnt, setLastNameEnt] = useState(null)

    let [gender, setGender] = useState("")
    let [genderEnt, setGenderEnt] = useState(null)


    let [contry, setContry] = useState("")
    let [contryEnt, setContryEnt] = useState(null)


    let handleSubmit = (event) => {
        event.preventDefault()
        alert(`${name} form submited successsfully`)
        setNameEnt(name)
        setName("")

        setLastNameEnt(lastname)
        setLastName("")

        setGenderEnt(gender)
        setGender("")

        setContryEnt(contry)
        setContry("")
        console.log([name, lastname, gender, contry])
    }

    return (
        <>
            <h1>Form Assingment</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br />
                <input
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required /><br />
                <input
                    placeholder="Gender Name"
                    onChange={(e) => setGender(e.target.value)}
                    required /><br />
                <input
                    placeholder="Country Name"
                    onChange={(e) => setContry(e.target.value)}
                    required /><br />
                <input type="submit" />
            </form>

            <p>First Name: {nameent}</p>
            <p>Last Name: {lastnameEnt}</p>
            <p>Gender: {genderEnt}</p>
            <p>Country: {contryEnt}</p>

        </>
    )
}

export default Form