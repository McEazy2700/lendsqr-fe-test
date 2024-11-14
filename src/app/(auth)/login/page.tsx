import Image from "next/image";
import styles from "./styles.module.scss";
import React from "react";
import LoginForm from "@/components/atoms/a-login-form";

const LogInPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section1}>
        <div className={styles.hero}>
          <Image
            className={styles.logo}
            src="/logo.svg"
            width={179}
            height={36}
            alt="Lendsqr"
          />
          <Image
            src="/images/pablo-sign-in.png"
            alt="Signin"
            width={600}
            height={337}
          />
        </div>
      </div>
      <div className={styles.section2}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LogInPage;
