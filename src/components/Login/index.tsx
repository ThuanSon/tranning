import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type User = {
    name: string;
    email: string;
    mobile: string;
    id: string;
    create_at: string;
    updated_at: string;
};
export const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [users, setUsers] = useState<User[]>();
    const navigate = useNavigate();
    const [error, setError] = useState();
    useEffect(()=>{
        getUsers()
    }, []);
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const validUser = users?.find((user) => user.email === formData.email && user.mobile === formData.password);
        if (validUser) {
            sessionStorage.setItem('username', validUser.email);
            navigate('/dashboard');
        } else {
            alert('Sai thông tin đăng nhập');
        }
    };
    
    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost/api/users');
            setUsers(response.data);
        } catch (error: any) {
            setError(error.response?.data.message || "An error occurred");
        }
    }
    // console.log(users);
    
    const handleClickSignUp = () => {
        // Điều hướng đến trang đăng ký
        navigate('/user/create');
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <>
            <h1 className="Auth-form-title">Đăng nhập</h1>
            <form className="Auth-form" onSubmit={handleSubmit}>
                <table cellSpacing={10}>
                    <tbody>
                        <tr>
                            <th>
                                <label htmlFor="email">Email: </label>
                            </th>
                            <td>
                                <input className="form-control" type="text" name="email" value={formData.email} onChange={handleChange} /> <br />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label htmlFor="password">Password: </label>
                            </th>
                            <td>
                                <input className="form-control" type="password" name="password" value={formData.password} onChange={handleChange} /> <br />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit" className="btn btn-primary"> Đăng nhập</button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary" onClick={handleClickSignUp}> Đăng ký</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    );
};

