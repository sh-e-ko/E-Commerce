import React, { useRef, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { object } from 'yup'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import img1 from '../../assets/Img/Orange_logo.svg.png'
import img2 from '../../assets/Img/InstaPay_Logo.png'
import img3 from '../../assets/Img/We_logo.svg.png'
import img4 from '../../assets/Img/pngegg (1).png'
import img5 from '../../assets/Img/pngegg (2).png'
import style from './Payment.module.css'

export default function Wallet()
{
    const imgref = useRef(null)
    const handleOnchangeImg = (e) =>
    {
        const imgReader = new FileReader
        imgReader.readAsDataURL(e.target.files[0])
        imgReader.onload = (e) =>
{
            imgref.current.src = e.target.result
        }
        paymentMethod.setFieldValue("file", e.currentTarget.files[0])
    }

    const navigate = useNavigate()
    const [activeModal, setActiveModal] = useState(null)

    const cards = [
        { id: 1, img: img1, phone: '01012345678' },
        { id: 3, img: img3, phone: '01211112222' },
        { id: 4, img: img4, phone: '01533334444' },
        { id: 5, img: img5, phone: '01055556666' },
        { id: 2, img: img2, phone: '01198765432' },
    ]

    const handleShow = (index) =>
    {
        setActiveModal(index)
        paymentMethod.resetForm()
    }

    const handleClose = () => setActiveModal(null)

    const paymentMethod = useFormik({
        validateOnMount: true,
        initialValues: {
            number: '',
            file: '',
        },
        validationSchema: object({
            number: Yup.string()
                .required("Phone number is required")
                .matches(/^01[0-9]{9}$/, "Invalid number. Must start with 01 and be 11 digits"),

            file: Yup.mixed()
                .required("Image file is required")
                .test("fileType", "File must be an image (jpg or png)", (value) =>
                {
                    if (!value) return false;
                    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
                    return allowedTypes.includes(value.type);
                }),
        }),
        onSubmit: (values) =>
        {
            const selectedCard = cards[activeModal]
            toast.success(' done ✅')
            handleClose()
            navigate("/home", { replace: true })
        }
    })

    return (
       
        <section className={style.wallet}>
            {cards.map((card, index) => (
                <div key={card.id} className={style.walletcard}>
                    <img src={card.img} width="150px" />
                    <Button variant="primary" onClick={() => handleShow(index)}>Edit</Button>
                </div>
            ))}

            {activeModal !== null && (
                <Modal show onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Payment</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p><span>Send the payment to this number:</span> {cards[activeModal].phone}</p>

                        <form onSubmit={paymentMethod.handleSubmit}>
                            <div>
                                <input
                                    type='text'
                                    placeholder="Your number"
                                    {...paymentMethod.getFieldProps("number")}
                                />
                                {paymentMethod.touched.number && paymentMethod.errors.number && (
                                    <span>{paymentMethod.errors.number}</span>
                                )}
                            </div>

                            <div>
                                <input
                                    type="file"
                                    name="file"
                                    accept="image/*"

                                    onBlur={paymentMethod.handleBlur}
                                    onChange={handleOnchangeImg}
                                />

                                {paymentMethod.touched.file && paymentMethod.errors.file && (
                                    <span>{paymentMethod.errors.file}</span>
                                )}

                                <img width='350px' height='350px' ref={imgref} />
                            </div>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={!paymentMethod.isValid}>
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal.Body>
                </Modal>
            )}
        </section>
    )
}
