import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const username = sessionStorage.getItem('username');
        if (username === null) {
            navigate('/user/authentication');
        }
    }, [navigate]);

    return (
        <h1>
            Hello dashboard
        </h1>
    );
};
