import { useState } from "react";
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {

    const { login } = useAuth();

    const [email,setEmail] = useState("");
    const [ password,setPassword] = useState("");
    const [error,setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
       await login(email,password);
        navigate("/admin/dashboard") 
        }catch(error){
            console.log(error)
            setError("Correo y/o contraseña incorrecto")
        }
    }

    return(
        <div className="login-container">

            <div className="login">
            <h2>Iniciar sesion</h2>

            <form onSubmit={handleSubmit} className="form-login">

                <div className="input-login">
                <label>E-mail</label>
                <input type="email" name="email" id="email" placeholder="Ingrese su correo eletronico" onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
                <div className="input-login">
                <label>Contraseña</label>
                <input type="password" name="password" placeholder="Ingrese su contraseña" id="password" onChange={(e) => setPassword(e.target.value)} required></input>
                </div>
                {error && <p className="errorMessage">Correo y/o contraseña incorrecto</p>}
                <button type="submit" className="button-login">Iniciar sesion</button>
            </form>
            </div>
        </div>
    )
}