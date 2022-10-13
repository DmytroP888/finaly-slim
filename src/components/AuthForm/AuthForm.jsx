import React, { useEffect, useState } from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form"

import { registerUser } from '../../store'
import Spinner from '../Spinner'
import Error from "./Error"

import {
    WrapperAuthform,
    TitleAuthform,
    FormBlockInputs,
    BlockInputs,
    LeftBlockInputs,
    Input,
    LabelInput,
    ButtonLoginAuthform,
    ButtonRegisterAuthform
} from './AuthForm.styled'

const AuthForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [customError, setCustomError] = useState(null)
    const { loading, userInfo, success, error } = useSelector((state) => state.user)

    useEffect(() => {
        if (userInfo) navigate('/calculator')
        if (success) navigate('/login')
    }, [navigate, userInfo, success])

    const submitForm = (data) => {
        if (data.password <= 7) {
            setCustomError('"password" length must be at least 8 characters long')
            return
        }
        data.email = data.email.toLowerCase()
        dispatch(registerUser(data))
    }

    return (
        <>
            {loading ? <Spinner /> :
                <WrapperAuthform >
                    <TitleAuthform  >
                        Register
                    </TitleAuthform>
                    <FormBlockInputs onSubmit={handleSubmit(submitForm)}>
                        <LeftBlockInputs>
                            <BlockInputs>
                                <LabelInput htmlFor="username" >Name *</LabelInput>
                                <Input type='text' {...register("username")} id="username" minlength="3" maxlength="254" required />
                            </BlockInputs>
                            <BlockInputs>
                                <LabelInput htmlFor="email" >Email *</LabelInput>
                                <Input type='email' {...register("email")} id="email" minlength="3" maxlength="254" required />
                            </BlockInputs>
                            <BlockInputs>
                                <LabelInput htmlFor="password">Password *</LabelInput>
                                <Input type='password' {...register("password")} id="password" minlength="8" maxlength="100" required />
                            </BlockInputs>
                        </LeftBlockInputs>
                        {error && <Error>{error}</Error>}
                        {customError && <Error>{customError}</Error>}
                        <NavLink to="/login">
                            <ButtonLoginAuthform>Login</ButtonLoginAuthform>
                        </NavLink>
                        <ButtonRegisterAuthform type="submit" disabled={loading}>Register</ButtonRegisterAuthform>
                    </FormBlockInputs>
                </WrapperAuthform>
            }
        </>
    )
}

export default AuthForm