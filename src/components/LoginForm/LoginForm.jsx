import React, { useEffect, useState } from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form"

import SourceStore from '../../storeLocationRules'
import { userLogin } from '../../store'
import { GoogleAds } from '../../store/userSlice'
import Spinner from '../Spinner'
import Error from "../AuthForm/Error"
import {
    WrapperLoginform,
    TitleLoginform,
    FormBlockInputs,
    BlockInputs,
    LeftBlockInputs,
    Input,
    LabelInput,
    ButtonLogin,
    ButtonRegister
} from './LoginForm.styled'

const LoginForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const [customError, setCustomError] = useState(null)
    const { loading, userInfo, cookieAgree, error } = useSelector((state) => state.user)
    const google = GoogleAds('google')
    const token = userInfo && userInfo.refreshToken
    useEffect(() => {
        if (google) navigate('/calculator')
    }, [navigate, google])
    const submitForm = (data) => {
        if (data.password <= 7) {
            setCustomError('"password" length must be at least 8 characters long')
            return
        }
        data.email = data.email.toLowerCase()
        dispatch(userLogin(data))
    }

    return !token && (
        <>
            {loading ? <Spinner /> :
                <>
                    {!cookieAgree && <SourceStore />}
                    <WrapperLoginform>
                        <TitleLoginform>
                            Sign in
                        </TitleLoginform>
                        <FormBlockInputs onSubmit={handleSubmit(submitForm)}>
                            <LeftBlockInputs>
                                <BlockInputs>
                                    <LabelInput htmlFor="email" >Email *</LabelInput>
                                    <Input type='email' {...register("email")} name='email' id="email" minlength="3" maxlength="254" required />
                                </BlockInputs>
                                <BlockInputs>
                                    <LabelInput htmlFor="password">Password *</LabelInput>
                                    <Input type='password' {...register("password")} name='password' id="password" minlength="8" maxlength="100" required />
                                </BlockInputs>
                            </LeftBlockInputs>
                            {error && <Error>{error}</Error>}
                            {customError && <Error>{customError}</Error>}
                            <ButtonLogin type="submit" disabled={loading}>Login</ButtonLogin>
                            <NavLink to="/auth">
                                <ButtonRegister>Register</ButtonRegister>
                            </NavLink>
                        </FormBlockInputs>
                    </WrapperLoginform>
                </>
            }
        </>
    )
}

export default LoginForm