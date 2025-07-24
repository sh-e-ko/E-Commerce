import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { object } from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import style from "./Form.module.css"
import { user } from '../../../../Api/user'
import { toast } from "react-toastify";
import img from "../../../../assets/Img/login.png"
export default function Form()
{
    const navigate = useNavigate();

    const loginFormik = useFormik({
        validateOnMount: true,

        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: object({
            email: Yup.string().email("Invalid email").required("Email is required"),
            password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
        }),

        onSubmit: (values) =>
        {
            user.post('/login', values)
                .then(res =>
                {
                    toast.success("Login successful ✅");
                    navigate("/home", { replace: true });
                })
                .catch(err =>
                {
                    toast.error("Login failed ❌ Please check your email or password");
                    console.log("Error:", err);
                });

        }

    })



    return (
        <section className={style.Form}>


            <form className={style.card}  >

                <div className={style.text}>
                    <div>
                        <h2 >step intop style - your fashion journey starts</h2>
                    </div>

                    <div className={style.input}>
                        <input type="email" placeholder='Enter You Email'{...loginFormik.getFieldProps("email")} />
                        {loginFormik.errors.email && loginFormik.touched.email && <span>{loginFormik.errors.email}</span>}
                    </div>

                    <div className={style.input}>
                        <input type="password" placeholder='Enter You password'{...loginFormik.getFieldProps("password")} />
                        {loginFormik.errors.password && loginFormik.touched.password && <span>{loginFormik.errors.password}</span>}
                    </div>

                    <div className={style.forgot}>
                        <Link>forgot password?</Link>
                    </div>

                    <div>
                        <button
                            className={style.btn}
                            onClick={loginFormik.handleSubmit}
                            disabled={!loginFormik.isValid}
                            type="submit"
                        >Login</button>
                    </div>

                    <div className={style.register}>
                        <p>dont't have account? <Link to='/register'>Register</Link></p>
                    </div>
                </div>

                <div>
                    <img src={img} loading="lazy" alt="phot" className={style.img} />
                </div>

            </form>

        </section>
    )
}
