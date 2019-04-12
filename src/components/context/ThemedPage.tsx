import React from "react";
import {ThemedButton} from "./ThemedButton";
import {ThemedTitle} from "./ThemedTitle";

enum ThemeType {
    dark = "dark", light = "light"
}

export const ThemeContext = React.createContext(ThemeType.light);

interface ThemedPageState {
    theme: ThemeType
}

export class ThemedPage extends React.Component<any, ThemedPageState> {

    constructor(props, context) {
        super(props, context);
        this.state = {
            theme : ThemeType.light
        }
    }

    toggleTheme() {
        this.setState({
            theme : this.state.theme == ThemeType.dark ? ThemeType.light : ThemeType.dark
        });
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <div className="themed-page">
                    <button onClick={this.toggleTheme.bind(this)}>{this.state.theme.toString()}</button>
                    <ThemedTitle/>
                    <ThemedButton>버튼1</ThemedButton>
                    <ThemedButton>버튼2</ThemedButton>
                </div>
            </ThemeContext.Provider>
        )
    }
}
