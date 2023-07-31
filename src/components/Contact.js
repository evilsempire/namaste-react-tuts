
const Contact = () => {
    return <div>
        <h1 className="p-4 m-4 font-bold text-2xl text-center">Contact</h1>
        <form className="text-center">
            <input 
                className="border p-1 m-1 border-gray-600"
                placeholder="Name"
                />
            <input 
                className="border p-1 m-1 border-gray-600"
                placeholder="Message"
            />
            <button className="border p-1 m-1 border-gray-600 bg-gray-200 rounded-sm">
                Submit
            </button>
        </form>
    </div>
}

export default Contact;