import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";

export default function GuestbookSection() {
    const guestbookEntries = useQuery(api.tasks.get);
    const addEntry = useMutation(api.tasks.create);

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        await addEntry({ name, message});

        setName('');
        setMessage('');
    }

    const formatDate = (timestamp: number) => new Date(timestamp).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <section className="content-container" id="guestbook">
            <h2>Guestbook</h2>
            <p>Leave a comment or just say hello!</p>
            <div className="guestbook--content">
                <form className="guestbook--content--form" onSubmit={submitHandler}>
                    <p><b>Name</b></p>
                    <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />

                    <p>Message</p>
                    <textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    <button type="submit">Submit</button>
                </form>

                <div className="guestbook--content--reviews">
                    {guestbookEntries && guestbookEntries.map((entry) => {
                        return (
                            <div className="guestbook--content--review">
                                <div className="guestbook--content-review--name">
                                    <div className="circle"></div>
                                    <p>{entry.name}</p>
                                </div>
                                <p className="guestbook--content--review--comment">{entry.message}</p>
                                <p className="guestbook--content--reivew--date">{formatDate(entry._creationTime)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
//   export default src