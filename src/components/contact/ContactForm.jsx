export default function ContactForm() {
  return (
    <form className="space-y-4 max-w-md mx-auto py-10">
      <input type="text" placeholder="Your Name" className="w-full border p-2 rounded" />
      <input type="email" placeholder="Your Email" className="w-full border p-2 rounded" />
      <textarea placeholder="Message" className="w-full border p-2 rounded h-32" />
      <button className="bg-black text-white px-6 py-2 rounded">Send</button>
    </form>
  );
}
