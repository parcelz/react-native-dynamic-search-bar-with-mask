import * as React from "react";
import { TextInput, ViewStyle, TextStyle, ImageStyle, TextInputProps, TouchableWithoutFeedbackProps } from "react-native";
export interface ISource {
    source: string | {
        uri: string;
    };
}
export interface ISearchBarProps extends TouchableWithoutFeedbackProps, TextInputProps {
    darkMode?: boolean;
    placeholder?: string;
    mask?: string;
    ImageComponent?: any;
    spinnerType?: string;
    spinnerSize?: number;
    spinnerColor?: string;
    spinnerVisibility?: boolean;
    searchIconComponent?: React.ReactChild;
    clearIconComponent?: React.ReactChild;
    searchIconImageSource?: ISource;
    clearIconImageSource?: ISource;
    style?: ViewStyle | Array<ViewStyle> | undefined;
    textInputStyle?: TextStyle | Array<TextStyle>;
    searchIconImageStyle?: ImageStyle | Array<ImageStyle>;
    clearIconImageStyle?: ImageStyle | Array<ImageStyle>;
    onBlur?: () => void;
    onFocus?: () => void;
    onPress?: () => void;
    onSearchPress?: () => void;
    onClearPress?: () => void;
}
interface IState {
}
export default class SearchBar extends React.Component<ISearchBarProps, IState> {
    inputRef: TextInput | null;
    handleSearchBarPress: () => void;
    handleOnClearPress: () => void;
    renderSpinner: () => JSX.Element;
    renderSearchIcon: () => JSX.Element;
    renderTextInput: () => JSX.Element;
    renderClearIcon: () => JSX.Element;
    render(): JSX.Element;
}
export {};
