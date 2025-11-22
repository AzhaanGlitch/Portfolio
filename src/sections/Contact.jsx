import { useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground"
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Astra from "../assets/Astra.png";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;  
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_ID;

export default function Contact(){
const [formData, setFormData] = useState({
  name: "",
  email: "",
  service: "",
  budget: "",
  idea: ""
});

const [errors, setErrors] = useState({});
const [status, setStatus] = useState("");

const handleChange = (e) => {
  const {name, value} = e.target;
  if(name === "budget" && value && !/^\d+$/.test(value)) return;
  setFormData((p) => ({...p, [name] : value}));
  if(errors[name]) setErrors((p) => ({...p, [name] : ""}));
}

const validateForm = () => {
  const required = ["name", "email", "service", "idea"];
  const newErrors = {};
  required.forEach((f) => !formData[f].trim() && (newErrors[f] = "Fill this field"))
  if(formData.service !== "other" && !formData.budget.trim())
    newErrors.budget = "Fill this field";
  setErrors(newErrors);
  return !Object.keys(newErrors).length;
}

const handleSubmit = async (e) => {
  e.preventDefault();
  if(!validateForm()) return;
  setStatus("sending");

  try{
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        ...formData,
        from_name: formData.name,
        reply_to: formData.email,
      }, 
      PUBLIC_KEY
    );
    setStatus("success");
    setFormData({
      name: "",
      email: "",
      service: "",
      budget: "",
      idea: ""
    });
  } catch(err){
    console.error("EmailJS Error: ", err);
    setStatus("error");
  }
}

  return(
    <section id="contact" className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col
    md:flex-row items-center gap-10
    ">
      <ParticlesBackground/>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        <motion.div className="w-full md:w-1/2 flex justify-center"
          initial = {{opacity: 0, x: -50}}
          whileInView = {{opacity: 1, x: 0}}
          transition = {{duration: 0.6}}
        >
          <motion.img src={Astra} alt="Illustration of Contact Subject"
          className="w-72 md:w-140 rounded-2xl shadow-lg object-cover"
          animate = {{y: [0, -10, 0]}}
          transition = {{duration: 2, repeat: Infinity, ease: "easeInOut"}}
          />
        </motion.div>

        <motion.div className="w-full md:w-1/2"
            initial = {{opacity: 0, x: 50}}
            whileInView = {{opacity: 1, x: 0}}
            transition = {{duration: 0.6}}
        >
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-zinc-950 p-8 rounded-xl shadow-2xl">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={`p-3 rounded bg-zinc-1000 border ${errors.name ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={`p-3 rounded bg-zinc-1000 border ${errors.email ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`p-3 rounded bg-zinc-1000 text-white border ${errors.service ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
              style={{color: formData.service === "" ? '#9ca3af' : 'white'}}
            >
              <option value="" style={{color: '#9ca3af'}}>Select Service</option>
              <option value="ai-developer" style={{color: 'white'}}>AI Developer</option>
              <option value="ml-engineer" style={{color: 'white'}}>ML Engineer</option>
              <option value="web-developer" style={{color: 'white'}}>Web Developer</option>
              <option value="frontend-developer" style={{color: 'white'}}>Frontend Developer</option>
              <option value="backend-developer" style={{color: 'white'}}>Backend Developer</option>
              <option value="database-developer" style={{color: 'white'}}>Database Developer</option>
              <option value="ui-ux-design" style={{color: 'white'}}>UI/UX Design</option>
              <option value="other" style={{color: 'white'}}>Other</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}

            {formData.service !== "other" && (
              <>
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget (e.g., 5000)"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`p-3 rounded bg-zinc-1000 border ${errors.budget ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                />
                {errors.budget && <p className="text-red-500 text-sm">{errors.budget}</p>}
              </>
            )}

            <textarea
              name="idea"
              placeholder="Tell me about your idea/project"
              value={formData.idea}
              onChange={handleChange}
              rows="5"
              className={`p-3 rounded bg-zinc-1000 border ${errors.idea ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
            ></textarea>
            {errors.idea && <p className="text-red-500 text-sm">{errors.idea}</p>}

            <button
              type="submit"
              className="p-3 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-600 hover:from-orange-700 hover:via-red-700 hover:to-yellow-700 rounded text-lg font-semibold transition duration-300 disabled:opacity-50 shadow-lg"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : status === "success" ? "Sent Successfully!" : status === "error" ? "Send Failed, Try Again" : "Send Message"}
            </button>

            {status === "error" && <p className="text-red-500 text-center mt-2">There was an issue sending your message. Please try again.</p>}
          </form>
        </motion.div>
      </div>
    </section>
  )
}