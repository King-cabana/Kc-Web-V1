import React from 'react'

import { Animation, 
    BodyStyle, 
    ParentBody,
    Button,
    Footer
 } from './MainBodyStyled';
import { useLottie } from "lottie-react";
import success from "./ebuLottie/congrats.json"




const MainBody = () => {
    const options = {
        animationData: success,
        loop: true,
      };
    const { View } = useLottie(options);
    return (
        <>
            <ParentBody>
                <BodyStyle>
                    <Animation>
                        {View}
                    </Animation>
                    <p>You have successfully generated a proposal.</p>
                </BodyStyle>
            </ParentBody>
            <Footer>
                <Button>Done</Button>
            </Footer>
        </>
    )
}

export default MainBody;