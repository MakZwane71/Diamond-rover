"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import "/styles/Home.module.css";

const HomePage = () => {
	return (
		<div className='flex_container'>
			<h1>This Is The Home Page! Everyone can see it.</h1>
		</div>
	);
};

export default HomePage;
