import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { object } from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import img from "../../../../assets/Img/login.png"
import { user } from '../../../../Api/user';
import { toast } from 'react-toastify';
import style from './FormReg.module.css'
export default function Form()
{
    const navigate = useNavigate();

    const registerFormik = useFormik({
        validateOnMount: true,

        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
            name: "",
        },

        validationSchema: object({
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], "Passwords must match")
                .required("Confirm password is required"),

            name: Yup.string().required("name is required"),

        }),

        onSubmit: (values) =>
        {
            user.post('/register', values)
                .then(res =>
                {
                    toast.success("register successful ✅");
                    navigate("/login", { replace: true });
                })
                .catch(err =>
                {
                    toast.error("Register failed ❌ Please try again");
                    console.log("Error:", err);
                });

        }

    })



    return (
        <section className={style.container}>

            <form className={style.card}>
                <div className={style.Form}>

                    <div className={style.text}>
                        <h2 >step intop style - your fashion journey starts</h2>
                    </div>

                    <div className={style.input}>
                        <input type="text" placeholder='Enter Your name'{...registerFormik.getFieldProps("name")} />
                        {registerFormik.errors.name && registerFormik.touched.name && <span>{registerFormik.errors.name}</span>}
                    </div> 

                    <div className={style.input}>
                        <input type="email" placeholder='Enter Your Email'{...registerFormik.getFieldProps("email")} />
                        {registerFormik.errors.email && registerFormik.touched.email && <span>{registerFormik.errors.email}</span>}
                    </div>

                    <div className={style.input}>
                        <input type="password" placeholder='Enter Your password'{...registerFormik.getFieldProps("password")} />
                        {registerFormik.errors.password && registerFormik.touched.password && <span>{registerFormik.errors.password}</span>}
                    </div>

                    <div className={style.input}>
                        <input type="password" placeholder='Enter Your password'{...registerFormik.getFieldProps("confirmPassword")} />
                        {registerFormik.errors.confirmPassword && registerFormik.touched.confirmPassword && <span>{registerFormik.errors.confirmPassword}</span>}
                    </div>


                    <div>
                        <button
                            onClick={registerFormik.handleSubmit}
                            disabled={!registerFormik.isValid}
                            type="submit"
                            className={style.btn}
                        >register</button>
                    </div>

                    <div className={style.login}>
                        <p> have account? <Link to='/login'>login</Link></p>
                    </div>
                </div>
                <div>
                    <img loading="lazy" alt="phot" className={style.img}  src={img}/>
                </div>
            </form>

        </section>
    )
}
