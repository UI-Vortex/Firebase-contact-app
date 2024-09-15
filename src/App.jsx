import { useState } from "react"
import "./app.css"
import img from "./logos_firebase.png"

export default function App() {
    const [value, setValue] = useState("")
    const [dValue, setDvalue] = useState("")
    const [todo, setTodo] = useState([])
    const [show, setShow] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");

    const submit = () => {
        if (value !== '' && dValue !== '') {
            setTodo([...todo, { name: value, email: dValue }]);
            setValue('')
            setDvalue('')
        }
    }

    const deleteContact = (index) => {
        const newTodo = todo.filter((_, i) => i !== index);
        setTodo(newTodo);
    }

    const filteredContacts = todo.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="firebase">
                <img src={img} alt="" />
                <h1>Firebase Contact App</h1>
            </div>
            <div className="firebase-texts">
                <div className="input-go">
                    <i class=" fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search Contact" value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)} />
                </div>
                <i onClick={() => setShow(!show)} class="fireIcon fa-solid fa-plus">{show ? "" : ""}</i>
                {show && <div className="fire">
                    <h2 className="name">Name</h2>
                    <input onChange={e => setValue(e.target.value)} value={value} type="text" className="name-input" />
                    <h2 className="email">Email</h2>
                    <input onChange={e => setDvalue(e.target.value)} value={dValue} type="text" className="email-input" />
                    <button onClick={submit} className="button">Add contact</button>
                </div>}
            </div>
            {filteredContacts.map((contact, index) => (
                <div key={index} className="contacts">
                    <i className="user fa-solid fa-circle-user"></i>
                    <div className="contact-mail">
                        <h3 className="contact-name">{contact.name}</h3>
                        <p className="email-contact">{contact.email}</p>
                    </div>
                    <div className="trasher">
                        <i className="pen fa-solid fa-pen-fancy"></i>
                        <i className="trash fa-solid fa-trash" onClick={() => deleteContact(index)}></i>
                    </div>
                </div>
            ))}
        </div>
    )
}