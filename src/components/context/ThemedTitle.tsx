import React from "react";
import {ThemeContext} from "./ThemedPage";

export class ThemedTitle extends React.Component {
    render() {
        return <ThemeContext.Consumer>
                { themeColor =>
                    <div className="title">
                        <span className={themeColor.toString()}>제목</span>
                    </div>
                }
            </ThemeContext.Consumer>
    }
}
