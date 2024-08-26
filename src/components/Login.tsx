import { useState, useRef, FormEvent } from "react";

const Login: React.FC = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        const name = nameRef.current?.value || "";
        const email = emailRef.current?.value || "";
        const password = passwordRef.current?.value || "";

        // Validate inputs (basic example, you may want to enhance this)
        if (!email || !password || (isSignUp && !name)) {
            setErrorMessage("Please fill out all fields.");
            return;
        }

        // Add your login logic here
        // For example, you might call an API to authenticate the user

        console.log("Email:", email);
        console.log("Password:", password);
        if (isSignUp) {
            console.log("Name:", name);
        }

        // Clear error message on successful submission
        setErrorMessage(null);
    };

    return (
        <div className="my-[4%] px-4">
            <h1 className="text-center mb-6 mt-10 sm:mt-0 font-semibold text-3xl text-sky-950">
                MyStore
            </h1>

            <form
                className="max-w-[450px] m-auto bg-sky-950 p-6 rounded"
                onSubmit={handleLogin}
            >
                <h2 className="text-gray-100 font-semibold text-2xl mb-6">
                    {isSignUp ? "Sign Up" : "Sign In"}
                </h2>

                <div className="flex flex-col font-semibold text-sky-400">
                    {isSignUp && (
                        <input
                            ref={nameRef}
                            type="text"
                            placeholder="Enter Full Name"
                            className="login-input p-1 mb-4 bg-transparent outline-none border-b border-sky-800"
                        />
                    )}
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="Enter Email"
                        className="login-input p-1 bg-transparent outline-none border-b border-sky-800"
                    />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Enter Password"
                        className="login-input mt-4 p-1 bg-transparent outline-none border-b border-sky-800"
                    />
                </div>
                <p className="font-semibold text-red-400 mt-2">{errorMessage}</p>

                <div className="flex flex-col my-6 font-semibold">
                    <button
                        type="submit"
                        className="bg-sky-900 p-2 text-gray-100 rounded mb-2.5"
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                    <button
                        type="button"
                        className="border border-sky-900 p-2 rounded text-sky-400 opacity-95 flex items-center justify-center"
                    >
                        {/* Placeholder for Google login button */}
                        <span className="mr-2 text-lg">G</span>
                        Continue With Google
                    </button>
                </div>

                <p className="text-center text-gray-100">
                    {isSignUp ? "Already have an account?" : "New to Amazon?"}

                    <span
                        className="ml-1 underline text-sky-400 cursor-pointer"
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? "Sign in" : "Create an account"}
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;
