import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { RxArrowTopRight } from "react-icons/rx";
import { motion } from "framer-motion";

import { Wrapper, Content, Grid, ContactForm } from "./Form.styles";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const btn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
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
          <p className="contact-text">
            Don't hesitate to contact me through the form or by direct email on{" "}
            <a href="mailto:hello.kusiu@gmail.com">hello.kusiu@gmail.com</a>.
          </p>
          <ContactForm onSubmit={handleSubmit(sendEmail)}>
            <div className="input-group">
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
            </div>
            <div className="input-group">
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
            </div>
            <div className="input-group">
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
            </div>
            <motion.button
              type="submit"
              variants={btn}
              animate="show"
              initial="hidden"
              whileHover="hover"
              whileTap="hover"
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
