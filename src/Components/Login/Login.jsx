import style from "./Login.module.css"
import { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Joi from "joi";
import axios from 'axios';
import { Helmet } from 'react-helmet';
export default function Login() {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    let navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [error, setError] = useState('')
    const [errorList, setErrorList] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function getUser(e) {
        let _user = { ...user }
        _user[e.target.name] = e.target.value;
        setUser(_user)
        
    }
    function LoginValidator() {
        let schema = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().pattern(/([a-zA-Z0-9]){8,}/).required(),

        })
        return schema.validate(user, { abortEarly: false })
    }
    async function sendData() {
        await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, user).then((response) => {
            localStorage.setItem('user', response.data.token);
            navigate("/");
        }).catch((error) => {
            setError(error.response.data.message);
            setIsLoading(false);


        })
    }
    function submitForm(e) {
        e.preventDefault()
        setIsLoading(true)
        let validation = LoginValidator()
        if (validation.error) {
            setIsLoading(false)
            setErrorList(validation.error.details)
        }else {
            sendData()

        }


    }
    return <>
        <Helmet>
            <title>Sign In Page</title>
        </Helmet>
        <div className="py-5">
            <form onSubmit={submitForm} action="" className={` mx-auto ${style.form}`}>

                <h3 className=' text-start mb-5'>Sign In</h3>
                {errorList.length > 0 ? <div>
                    <ul className='p-1 text-danger'>
                        {errorList.map((error, index) => error.context.label === "password" ? <li key={index} className='p-1 '>password must more than 8 letter</li> : <li className='p-1' key={index} >{error.message}</li>)}

                    </ul>
                </div> : ""}
                <div className={`${style.group}`}>
                    <input onChange={getUser} placeholder='Email ' className={`${style.special} bg-transparent`} type="email" name="email" />
                </div>
                <div className={`${style.group}`}>
                    <input onChange={getUser} placeholder='Password ' className={`${style.special} bg-transparent`} type="password" name="password" />
                </div>



                {error !== '' ? <p className='text-danger fs-6 '>*{error}</p> : ''}


                <button className={`${style.button} `}>
                    {isLoading === true ? <div className="spinner-border " role="status">
                        <span className="visually-hidden  ">Loading...</span>
                    </div> : 'Login'}
                </button>

                <p className='text-start  fs-6 mt-5'>Create An Account ? <Link className={`${style.text}`} to='/register'>Register</Link> </p>

            </form>


        </div>
    </>
}

