// src/components/Contact.tsx
export default function Contact() {
    return (
        <section id="contact" className="bg-neutral dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-dark dark:text-gray-100 text-center mb-8">Get In Touch</h2>

                <form
                    action="https://formspree.io/f/mzzgzyal"
                    method="POST"
                    className="grid gap-6 bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-yellow-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-yellow-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-yellow-500 sm:text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-flex justify-center items-center px-6 py-2 bg-accent dark:bg-yellow-500 text-white font-medium rounded-md hover:bg-blue-700 dark:hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
