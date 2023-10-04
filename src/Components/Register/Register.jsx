import style from './Register.module.css'
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Helmet } from 'react-helmet';
import Joi from 'joi';
export default function Register() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    let navigate = useNavigate()
    let [errorList, setErrorList] = useState([])

    const [user, setUser] = useState({
        name: "",
        password: "",
        rePassword: "",
        email: "",
        phone: ""
    })


    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    function getUser(e) {
        let _user = { ...user }
        _user[e.target.name] = e.target.value;
        setUser(_user)
        console.log(user)
    }
    function validateRegister() {
        let schema = Joi.object({
            name: Joi.string().min(2).max(30).required(),
            password: Joi.string().pattern(/([a-zA-Z0-9]){8,}/).required(),
            rePassword: Joi.string().pattern(/([a-zA-Z0-9]){8,}/).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            phone: Joi.string().pattern(/^01[0 1 2 5 ][0-9]{8}/).required()
        })
        return (schema.validate(user, { abortEarly: false }))
    }
    async function sendData() {
        await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, user).then((response) => {

            navigate("/login")
        }).catch((error) => {
            setError(error.response.data.message);
            setIsLoading(false)

        });
    }
    function submitForm(e) {
        e.preventDefault()
        setIsLoading(true)
        let validation = validateRegister()
        if (validation.error) {
            setIsLoading(false)
            setErrorList(validation.error.details)
        } else {
            console.log('true')
        }
    }
    return <>
        <Helmet>
            <title>Sign Up Page</title>
        </Helmet>
        <div className="py-5">
            <form onSubmit={submitForm} action="" className={` mx-auto ${style.form}`}>

                <h3 className=' text-start mb-5'>Create An Account</h3>
                {errorList.length > 0 ? <div>
                    <ul className='p-1 text-danger'>
                        {errorList.map((error, index) => error.context.label == "password" ? <li key={index} className='p-1 '>password must more than 8 letter</li> : <li className='p-1' key={index} >{error.message}</li>)}

                    </ul>
                </div> : ""}
                <div className={`${style.group}`}>
                    <input onChange={getUser} placeholder='Full Name' className={`${style.special} bg-transparent`} type="text" name="name" />
                </div>
                <div className={`${style.group}`}>
                    <input onChange={getUser} placeholder='Password ' className={`${style.special} bg-transparent`} type="password" name="password" />
                </div>
                <div className={`${style.group}`}>
                    <input onChange={getUser} placeholder='Confirm password ' className={`${style.special} bg-transparent`} type="password" name="rePassword" />
                </div>
                <div className={`${style.group}`}>
                    <input onChange={getUser} placeholder='Email Addriss ' className={`${style.special} bg-transparent`} type="email" name="email" />
                </div>
                <div className={`${style.group}`}>
                    <input onChange={getUser} placeholder='Phone Number' className={`${style.special} bg-transparent`} type="tel" name="phone" />
                </div>
                {error !== '' ? <p className='text-danger fs-6 '>*{error}</p> : ''}


                <button className={`${style.button} `}>
                    {isLoading == true ? <div class="spinner-border " role="status">
                        <span class="visually-hidden  ">Loading...</span>
                    </div> : 'Register'}
                </button>

                <p className='text-start  fs-6 mt-5'>Do you have already an account? <Link className={`${style.text}`} to='/login'>Log In</Link> </p>

            </form>


        </div>
    </>
}

