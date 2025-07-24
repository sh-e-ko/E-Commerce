import React, { useState } from 'react'
import BankCard from './BankCard';
import Cash from './Cash';
import Wallet from './Wallet';

export default function Payment()
{
    const [paymentMethod, setpaymentMethod] = useState();
    return (
        <section>
            <h2> choose the payment Method</h2>
            <select value={paymentMethod} onChange={(e) => setpaymentMethod(e.target.value)}>
                <option value="">choose</option>
                <option value="cash">cash</option>
                <option value="wallet">wallet</option>
                <option value="card"> Bank Card</option>
            </select>

            {
                paymentMethod === "cash" && (
                    <div>
                        <Cash />
                    </div>
                )
            }

            {
                paymentMethod === "wallet" && (
                    <div>
                        <Wallet />
                    </div>
                )
            }

            {
                paymentMethod === "card" && (
                    <div>
                        <BankCard />
                    </div>
                )
            }

        </section>
    )
}
