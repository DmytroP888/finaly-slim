import React, { useEffect, useCallback } from "react"
import { NavLink } from 'react-router-dom'

import {
    Tintedwindow,
    ExitArrow,
    BoxModal,
    СrossСlosure,
    BlockContent,
    TitleModal,
    BlockKcal,
    NumberKcal,
    Kcal,
    Line,
    FoodsBlock,
    FoodsList,
    Buttonyellow
} from './Modal.styled'
import ExitArrowModal from '../../assets/svg/modal-exit-arrow.svg'

const Modal = ({ openModal, setOpenModal }) => {
    const stopPropagate = (e) => { e.stopPropagation() }
    const closeModal = () => { setOpenModal(false) }
    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && openModal) {
            setOpenModal(false)
        }
    }, [setOpenModal, openModal]
    )

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress]
    )

    return openModal ? (
        <>
            <Tintedwindow onClick={closeModal}>
                <NavLink to="calculator" >
                    <ExitArrow src={ExitArrowModal} alt='Return to the previous page ' onClick={closeModal} />
                </NavLink>
                <BoxModal onClick={stopPropagate}>
                    <СrossСlosure onClick={closeModal}>&times;</СrossСlosure>
                    <BlockContent>
                        <TitleModal>
                            Your recommended daily
                            calorie intake is
                        </TitleModal>
                        <BlockKcal>
                            <NumberKcal>2800</NumberKcal>
                            <Kcal>kcal</Kcal>
                        </BlockKcal>
                        <Line>Foods you should not eat</Line>
                        <FoodsBlock>
                            <FoodsList>Kdsdccccfs</FoodsList>
                            <FoodsList>Kdsdfsdfsdfs</FoodsList>
                        </FoodsBlock>
                        <NavLink to="/diary" >
                            <Buttonyellow onClick={closeModal}>Start losing weight</Buttonyellow>
                        </NavLink>
                    </BlockContent>
                </BoxModal>
            </Tintedwindow>
        </>
    )
        : null
}

export default Modal