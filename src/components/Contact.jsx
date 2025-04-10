import { Contacts } from "../constants"
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl">{t("footer.title")}</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0,y:100}}
        transition={{duration:1}}
        className="text-center tracking-tighter">
            <p className="my-4">{t("footer.address")}</p>
            <p whileInView={{ opacity: 1, y: 0 }}
            initial={{opacity:0,y:100}}
            transition={{duration:1}}
            className="my-4">{Contacts.phone}</p>
            <a href={`mailto:${Contacts.email}`} className="border-b">{Contacts.email}</a>
        </motion.div>
    </div>
  )
}

export default Contact;