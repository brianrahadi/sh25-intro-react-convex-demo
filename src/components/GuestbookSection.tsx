import { useState } from "react";

export default function GuestbookSection() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Form submitted!');
    }
    return  (
        <section className="content-container" id="guestbook">
            <h2>Guestbook</h2>
            <p>Leave a comment or just say hello!</p>
            <div className="guestbook--content">
                <form className="guestbook--content--form" onSubmit={submitHandler}>
                    <p><b>Name</b></p>
                    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required/>

                    <p>Message</p>
                    <textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    )
}
//   export default src