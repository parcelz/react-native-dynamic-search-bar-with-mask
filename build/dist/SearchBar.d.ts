import * as React from "react";
import { TextInput, ViewStyle, TextStyle, ImageStyle, TextInputProps, TouchableWithoutFeedbackProps, KeyboardTypeOptions } from "react-native";
import { TextInputMask, TextInputMaskOptionProp } from 'react-native-masked-text';
export interface ISource {
    source: string | {
        uri: string;
    };
}
export interface ISearchBarProps extends TouchableWithoutFeedbackProps, TextInputProps {
    darkMode?: boolean;
    withMask?: boolean;
    placeholder?: string;
    type?: any;
    options?: TextInputMaskOptionProp;
    value: any;
    keyboardType?: KeyboardTypeOptions | undefined;
    autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
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
    customTextInput?: any;
    customTextInputProps?: Object;
    includeRawValueInChangeText?: boolean;
    checkText?: (previous: string, next: string) => boolean;
    onChangeText?: (text: string, rawText?: string) => void;
    refInput?: (ref: any) => void;
    onBlur?: () => void;
    onFocus?: () => void;
    onPress?: () => void;
    onSearchPress?: () => void;
    onClearPress?: () => void;
}
interface IState {
}
export default class SearchBar extends React.Component<ISearchBarProps, IState> {
    inputRef: TextInput | TextInputMask | null;
    handleSearchBarPress: () => void;
    handleOnClearPress: () => void;
    focus: () => void;
    renderSpinner: () => JSX.Element;
    renderSearchIcon: () => JSX.Element;
    renderTextInput: () => JSX.Element;
    renderClearIcon: () => JSX.Element;
    render(): JSX.Element;
}
export {};
