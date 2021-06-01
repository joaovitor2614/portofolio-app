import React from 'react'
import { Typography } from '../material-ui/material-ui'
import { BsPeopleCircle, HiOutlineMail } from '../icons/react-icons'
import { motion } from 'framer-motion';
const ContactFormData = ({ classes, formData }) => {
    const { name, email } = formData
    return (
        <Typography component="div" className={classes.databox}>
                     {name !== '' && (
                         <motion.div component="div" className={classes.dataitem}
                         initial={{ x: "-100vh" }}
                         animate={{ x: 0 }}
                         transition={{ duration: 0.5, ease: "easeOut" }}
                         >
                                <BsPeopleCircle size={20} style={{ margiRight: '10px'}}/>
                                <p>{name}</p>
                         </motion.div>
                     )}
                     {email !== '' && (
                         <motion.div component="div" className={classes.dataitem}
                         initial={{ x: "100vh" }}
                         animate={{ x: 0 }}
                         transition={{ duration: 0.5, ease: "easeOut" }}
                         
                         >
                                <HiOutlineMail size={20} style={{ margiRight: '10px'}} />
                                <p>{email}</p>
                         </motion.div>
                     )}
                     
        </Typography>
    )
}

export default ContactFormData
