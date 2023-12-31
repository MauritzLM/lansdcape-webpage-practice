// contact us section with form

function ContactUs() {
    return (
        <>
            <section className="contact-section">
                <div className="contact-section-container">
                    <div className="contact-section-info">
                        <h3>Contact Us</h3>
                        <p>Leave us a message and we will get back to you within the hour.</p>
                    </div>

                    <div>
                        <form>
                            <label htmlFor="name">Name</label>
                            <input name="name" type="text" ></input>

                            <label htmlFor="email">email</label>
                            <input name="email" type="email"></input>

                            <label htmlFor="message">Your message</label>
                            <textarea name="message" id="" cols="30" rows="5"></textarea>

                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs;