import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { RxArrowTopRight } from "react-icons/rx";
import { motion } from "framer-motion";

import { Wrapper, Content, Grid, ContactForm } from "./Form.styles";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const container = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      delay: 0.5,
      duration: 0.3,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
      delayChildren: 0.2,
      duration: 0.3,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

const text = {
  hidden: { opacity: 0, y: 20 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      ...transition,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { ...transition } },
};

const btn = {
  hidden: { opacity: 0, y: 10 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      ...transition,
    },
  },
};

const arrow = {
  hidden: { x: 0, y: 0 },
  hover: { x: 6, y: -6, transition: { ...transition } },
};

const Form = () => {
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = (formData) => {
    console.log(formData);
    emailjs
      .send(
        "service_ueusljw",
        "template_a9alsgn",
        formData,
        "tFj1IO-_z-0dXRGbM"
      )
      .then(
        (result) => {
          console.log(result.status);
          if (result.status === 200) {
            setStatus("SUCCESS");
          }
        },
        (error) => {
          console.log(error);
          if (error) {
            setStatus("FAILD");
          }
        }
      );
    reset();
  };

  useEffect(() => {
    if (status === "SUCCESS" || status === "FAILD") {
      setTimeout(() => {
        setStatus("");
      }, 5000);
    }
  }, [status]);

  const showStatusMsg = () => {
    if (status === "SUCCESS") {
      return <span className="success">Your message was send.</span>;
    } else if (status === "FAILD") {
      return (
        <span className="error">
          Oops! Something went wrong. Please try again.
        </span>
      );
    } else return null;
  };

  return (
    <Wrapper>
      <Content>
        <Grid>
          <motion.p
            className="contact-text"
            variants={text}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Don't hesitate to contact me through the form or by direct email on{" "}
            <a href="mailto:hello.kusiu@gmail.com">hello.kusiu@gmail.com</a>.
          </motion.p>
          <ContactForm
            onSubmit={handleSubmit(sendEmail)}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <motion.div className="input-group" variants={item}>
              <label>What is your name? *</label>
              <input
                placeholder="Łukasz Kuś"
                type="text"
                id="name"
                name="name"
                aria-label="Your name"
                {...register("name", {
                  required: "Please, enter your name.",
                  minLength: {
                    value: 6,
                    message: "Your name is too short.",
                  },
                })}
              />
              <span>{errors.name?.message}</span>
            </motion.div>
            <motion.div className="input-group" variants={item}>
              <label>What is your email address? *</label>
              <input
                placeholder="hello.kusiu@gmail.com"
                type="email"
                id="email"
                name="email"
                aria-label="Email address"
                {...register("email", {
                  required: "Please, enter your email address.",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "The email address is incorrect.",
                  },
                })}
              />
              <span>{errors.email?.message}</span>
            </motion.div>
            <motion.div className="input-group" variants={item}>
              <label>What is your message? *</label>
              <textarea
                placeholder="Hi Łukasz, let's work!"
                id="message"
                name="message"
                rows="8"
                aria-label="Your message"
                {...register("message", {
                  required: "You need to write something.",
                  minLength: {
                    value: 20,
                    message: "Are you sure that's enough?.",
                  },
                })}
              />
              <span>{errors.message?.message}</span>
            </motion.div>
            <motion.button
              type="submit"
              variants={btn}
              animate="show"
              initial="hidden"
              whileHover="hover"
              whileTap="hover"
              exit="hidden"
            >
              Send message
              <motion.span variants={arrow}>
                <RxArrowTopRight />
              </motion.span>
            </motion.button>
            {status && showStatusMsg()}
          </ContactForm>
        </Grid>
      </Content>
    </Wrapper>
  );
};

export default Form;
