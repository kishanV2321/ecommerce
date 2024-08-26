import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Replace with your actual authentication check
        const user = null; // Placeholder for actual user object
        if (user) {
            const { id, name, email, photoURL } = user;
            dispatch(
                addUser({
                    id: id,
                    name: name,
                    email: email,
                    photoURL: photoURL,
                })
            );
        } else {
            dispatch(removeUser());
            navigate("/");
        }
    }, [dispatch, navigate]);

    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Body;
