import React, { ChangeEvent, FormEvent, useState } from 'react';

interface User {
    name: string,
    job: string
}

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);
    const handelIncrease = (): void => {
        setCounter(counter + 1);
    }
    const handelUserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: 'Mokles',
            job: 'Bekar',
        }
        setUser(userData);
    }

    const handelChangeName = (e: ChangeEvent<HTMLImageElement>): void => {

    }

    return (
        <div>
            <h2>This is counter</h2>
            <h2>{counter}</h2>
            <button onClick={handelIncrease}>Increase</button>
        </div>
    );
};

export default Counter;