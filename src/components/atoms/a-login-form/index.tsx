/* eslint-disable react/no-children-prop */
"use client";

import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { useSetAtom } from "jotai";
import loginAtom from "@/state/atoms/loginAtom";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string({ message: "Please enter email" }),
  password: z.string({ message: "Please enter password" }),
});

type FormSchema = z.infer<typeof formSchema>;

const LoginForm = () => {
  const router = useRouter();
  const setLogedIn = useSetAtom(loginAtom);
  const [passwordVissible, setPasswordVissible] = React.useState(false);
  const form = useForm({
    defaultValues: {} as FormSchema,
    validatorAdapter: zodValidator(),
    validators: {
      onChange: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      setLogedIn(true);
      router.replace("/users");
    },
  });

  return (
    <div className={styles.section2Content}>
      <div className={styles.welcomeMessage}>
        <h1>Welcome</h1>
        <p>Enter details to login.</p>
      </div>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="email"
          children={(field) => (
            <div>
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                data-error={field.state.meta.errors.length > 0}
                className={styles.emailInput}
                type="text"
                placeholder="Email"
              />
              {field.state.meta.errors.length > 0 &&
                field.state.meta.errors.map((err) => (
                  <span key={Math.random()} className={styles.error}>
                    {err?.toString()}
                  </span>
                ))}
            </div>
          )}
        />
        <form.Field
          name="password"
          children={(field) => (
            <div>
              <div
                className={styles.passwordContainer}
                data-error={field.state.meta.errors.length > 0}
              >
                <input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className={styles.passwordInput}
                  type={passwordVissible ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setPasswordVissible((c) => !c)}
                >
                  {passwordVissible ? "Hide" : "Show"}
                </button>
              </div>
              {field.state.meta.errors.length > 0 &&
                field.state.meta.errors.map((err) => (
                  <span key={Math.random()} className={styles.error}>
                    {err?.toString()}
                  </span>
                ))}
            </div>
          )}
        />
        <Link className={styles.link} href="#">
          Forgot Password?
        </Link>
        <button className={styles.submitButton}>Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
