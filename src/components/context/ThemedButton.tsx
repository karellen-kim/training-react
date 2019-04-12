import React from 'react';
import {ThemeContext} from "./ThemedPage";

export class ThemedButton extends React.Component {
    render() {
        return <ThemeContext.Consumer>
            {themeColor =>
                <button className={themeColor.toString()}>
                    {this.props.children}
                </button>
            }
        </ThemeContext.Consumer>
    }
}
