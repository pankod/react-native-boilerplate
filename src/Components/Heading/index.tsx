// #region Global Imports
import * as React from "react";
// #endregion Global Imports

// #region Interface Imports
import { IHeading } from "./Heading";
// #endregion Interface Imports

import { TitleText, FrontText, BackText } from "./styled";

const Heading: React.FunctionComponent<IHeading.IProps> = props => {
    const { text } = props;

    return (
        <TitleText>
            <FrontText>{text}</FrontText>
            <BackText>{text}</BackText>
        </TitleText>
    );
};

export { Heading };
