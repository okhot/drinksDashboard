import Image from "next/image";
import React, { useState } from "react";
import registerStyle from "../styles/register.module.css";
import registerImage from "../public/assets/undraw_access_account_re_8spm.svg";
import CreateUser from "../components/CreateUser";
import { createUser } from "../services/userServices";
import Link from "next/link";
import { Router, useRouter } from "next/router";

export default function register() {

  const router = useRouter()

  const handleSubmit = ({
    firstName,
    lastName,
    email,
    password,
  }) => {
    createUser({firstName, lastName, email, password})
    .then(response => {
      console.log(response);
     router.push('/login')
  });
  };

  return (
    <>
      <CreateUser
        handleSubmit={handleSubmit}
      />
    </>
  );
}
