import React from "react";

const Contact = () => {
    return (
        <main className="max-w-xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <form className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full border rounded px-3 py-2"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full border rounded px-3 py-2"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full border rounded px-3 py-2"
                        placeholder="Your message..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
            </form>
        </main>
    );
};

export default Contact;