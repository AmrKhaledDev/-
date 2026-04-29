import { motion } from "framer-motion";
import ContactForm from "./_components/ContactForm";
// ===========================================================
function Contact() {
  return (
    <main className="text-white section-p">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mycontainer flex justify-center items-center"
      >
        <ContactForm />
      </motion.div>
    </main>
  );
}

export default Contact;
