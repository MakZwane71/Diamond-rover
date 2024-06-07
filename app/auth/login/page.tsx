"use client";
import Button from "@elements/Button";
import TextBox from "@elements/TextBox";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import "/styles/Home.module.css"; // Adjust the path if your styles directory is located elsewhere

interface IProps {
	searchParams?: { [key: string]: string | string[] | undefined };
}

const LoginPage = ({ searchParams }: IProps) => {
	const userName = useRef("");
	const pass = useRef("");

	const onSubmit = async () => {
		const result = await signIn("credentials", {
			username: userName.current,
			password: pass.current,
			redirect: true,
			callbackUrl: "/",
		});
	};
	return (
		<div className='flex-container'>
			<div className='form-container'>
				<TextBox
					className='black-bold-textbox'
					lableText='User Name'
					onChange={(e) => (userName.current = e.target.value)}
				/>
				<TextBox
					className='black-bold-textbox'
					lableText='Password'
					type={"password"}
					onChange={(e) => (pass.current = e.target.value)}
				/>
				<Button onClick={onSubmit}>SignIn</Button>
			</div>
		</div>
	);
};

export default LoginPage;
