import React, { useState } from "react"
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux"

import Modal from '../Modal'
import Spinner from '../Spinner'

import {
    WrapperCalcform,
    BoxcontrolWidth,
    TitleCalcform,
    FormBlockInputs,
    BlockInputs,
    LeftBlockInputs,
    RightBlockInputs,
    TitleRadio,
    BlockRadio,
    Input,
    RadioChecked,
    InputRadio,
    LabelInput,
    LabelRadio,
    ButtonCalcform
} from './Calculateform.styled'

const Calculateform = () => {
    const { loading, userInfo } = useSelector((state) => state.user)
    const tokenACC = userInfo && userInfo.accessToken
    const [openModal, setOpenModal] = useState(false)
    const openedModal = () => { setOpenModal(!openModal) }


    return (
        <>
            {loading ? <Spinner /> :
                <>
                    <WrapperCalcform>
                        <BoxcontrolWidth>
                            <TitleCalcform>
                                Calculate your daily calorie intake right now
                            </TitleCalcform>
                        </BoxcontrolWidth>
                        <FormBlockInputs>
                            <LeftBlockInputs>
                                <BlockInputs>
                                    <LabelInput htmlFor="calculateHeight" >Height*</LabelInput>
                                    <Input type='number' name='calculate' step="1" min="100" max="250" id="calculateHeight" required />
                                </BlockInputs>
                                <BlockInputs>
                                    <LabelInput htmlFor="calculateAge">Age *</LabelInput>
                                    <Input type='number' name='calculate' step="1" min="18" max="100" id="calculateAge" required />
                                </BlockInputs>
                                <BlockInputs>
                                    <LabelInput htmlFor="calculateCurWeight">Current weight *</LabelInput>
                                    <Input type='number' name='calculate' step="1" min="20" max="500" id="calculateCurWeight" required />
                                </BlockInputs>
                            </LeftBlockInputs>
                            <RightBlockInputs>
                                <BlockInputs>
                                    <LabelInput htmlFor="calculateDesWeight">Desired weight *</LabelInput>
                                    <Input type='number' name='calculate' step="1" min="20" max="500" id="calculateDesWeight" required />
                                </BlockInputs>
                                <TitleRadio>Blood type *
                                </TitleRadio>
                                <BlockRadio>
                                    <RadioChecked>
                                        <InputRadio type='radio' value={1} name='bloodtype' id="1" defaultChecked />
                                        <LabelRadio htmlFor="1">1</LabelRadio>
                                    </RadioChecked>
                                    <RadioChecked>
                                        <InputRadio type='radio' value={2} name='bloodtype' id="2" />
                                        <LabelRadio htmlFor="2">2</LabelRadio>
                                    </RadioChecked>
                                    <RadioChecked>
                                        <InputRadio type='radio' value={3} name='bloodtype' id='3' />
                                        <LabelRadio htmlFor="3">3</LabelRadio>
                                    </RadioChecked>
                                    <RadioChecked>
                                        <InputRadio type='radio' value={4} name='bloodtype' id='4' />
                                        <LabelRadio htmlFor="4">4</LabelRadio>
                                    </RadioChecked>
                                </BlockRadio>
                            </RightBlockInputs>
                            {tokenACC ?
                                <ButtonCalcform type="submit" onClick={openedModal} >Start losing weight</ButtonCalcform>
                                :
                                <NavLink to="/login">
                                    <ButtonCalcform>Start losing weight</ButtonCalcform>
                                </NavLink>
                            }
                        </FormBlockInputs>
                    </WrapperCalcform>
                    <Modal openModal={openModal} setOpenModal={setOpenModal} />
                </>
            }
        </>
    )
}

export default Calculateform