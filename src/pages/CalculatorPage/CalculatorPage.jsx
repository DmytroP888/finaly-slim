import React from "react"

import Calculateform from '../../components/Calculateform'
// import {
//     DesktopWidth,
//     TabletWidth,
//     ContainerRelative,
//     FigureBackgroundPNG,
//     MainpageTabletLeaves,
//     MainpageTabletStrawb,
//     MainpageTabletBanana,
//     Screensaver
// } from './CalculatorPage.styled'
// import {
//     FigureBackgroundAvif,
//     FigureBackgroundWebp,
//     FigureBackgroundPng,
//     FigureBackTabletAvif,
//     FigureBackTabletWebp,
//     FigureBackTabletPng,
//     MainPageImgAvif,
//     MainPageImgWebp,
//     MainPageImgPng,
//     MainpageTabletBananaAvif,
//     MainpageTabletBananaWebp,
//     MainpageTabletBananaPng,
//     MainpageTabletLeavesAvif,
//     MainpageTabletLeavesWebp,
//     MainpageTabletLeavesPng,
//     StrawberryMainTabletAvif,
//     StrawberryMainTabletWebp,
//     StrawberryMainTabletPng
// } from '../../assets/img'

const CalculatorPage = () => {
    return (
        <>
            <Calculateform />
            {/* <DesktopWidth>
                <picture>
                    <source srcSet={FigureBackgroundWebp} type="image/webp" />
                    <source srcSet={FigureBackgroundAvif} type="image/avif" />
                    <FigureBackgroundPNG src={FigureBackgroundPng} alt="Background figure" />
                </picture>
                <picture>
                    <source srcSet={MainPageImgAvif} type="image/webp" />
                    <source srcSet={MainPageImgWebp} type="image/avif" />
                    <Screensaver src={MainPageImgPng} alt="Screensaver picture" />
                </picture>
            </DesktopWidth>
            <TabletWidth>
                <ContainerRelative>
                    <picture>
                        <source srcSet={FigureBackTabletWebp} type="image/webp" />
                        <source srcSet={FigureBackTabletAvif} type="image/avif" />
                        <FigureBackgroundPNG src={FigureBackTabletPng} alt="Background figure" />
                    </picture>
                    <picture>
                        <source srcSet={MainpageTabletLeavesWebp} type="image/webp" />
                        <source srcSet={MainpageTabletLeavesAvif} type="image/avif" />
                        <MainpageTabletLeaves src={MainpageTabletLeavesPng} alt="Background figure" />
                    </picture>
                    <picture>
                        <source srcSet={StrawberryMainTabletWebp} type="image/webp" />
                        <source srcSet={StrawberryMainTabletAvif} type="image/avif" />
                        <MainpageTabletStrawb src={StrawberryMainTabletPng} alt="Background figure" />
                    </picture>
                    <picture>
                        <source srcSet={MainpageTabletBananaWebp} type="image/webp" />
                        <source srcSet={MainpageTabletBananaAvif} type="image/avif" />
                        <MainpageTabletBanana src={MainpageTabletBananaPng} alt="Background figure" />
                    </picture>
                </ContainerRelative>
            </TabletWidth> */}
        </>
    )
}

export default CalculatorPage