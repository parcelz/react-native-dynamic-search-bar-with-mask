import * as React from "react";
import {
  View,
  Image,
  TextInput,
  ViewStyle,
  TextStyle,
  ImageStyle,
  TextInputProps,
  TouchableWithoutFeedbackProps,
  KeyboardTypeOptions
} from "react-native";
import Spinner from "react-native-spinkit";
import RNBounceable from "@freakycoder/react-native-bounceable";
import { TextInputMask, TextInputMaskOptionProp } from 'react-native-masked-text'
/**
 * ? Local Imports
 */
import styles, { _container, _textInputStyle } from "./SearchBar.style";

const defaultSearchIcon = require("./local-assets/search-icon.png");
const whiteSearchIcon = require("./local-assets/search-icon-white.png");
const defaultClearIcon = require("./local-assets/clear-icon.png");
const whiteClearIcon = require("./local-assets/clear-icon-white.png");

export interface ISource {
  source: string | { uri: string };
}
export interface ISearchBarProps
  extends TouchableWithoutFeedbackProps,
    TextInputProps {
  darkMode?: boolean;
  withMask?: boolean;
  placeholder?: string;
  selectionColor?: string;
  type?: any;
  options?:  TextInputMaskOptionProp;
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
  customTextInput?: any
  customTextInputProps?: Object
  includeRawValueInChangeText?: boolean
  checkText?: (previous: string, next: string) => boolean
  onChangeText?: (text: string, rawText?: string) => void
  refInput?: (ref: any) => void
  onBlur?: () => void;
  onFocus?: () => void;
  onPress?: () => void;
  onSearchPress?: () => void;
  onClearPress?: () => void;
}

interface IState {}

export default class SearchBar extends React.Component<
  ISearchBarProps,
  IState
> {
  inputRef: TextInput | TextInputMask | null = null;

  handleSearchBarPress = () => {
    // this.inputRef?.focus();
    this.props.onPress && this.props.onPress();
  };

  handleOnClearPress = () => {
    // this.inputRef?.clear();
    this.props.onClearPress && this.props.onClearPress();
  };

  focus = () => {
    if(this.props.withMask){
      this.inputRef!['_inputElement'].focus();
      return;
    }
    
    this.inputRef!['focus']();
  
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  renderSpinner = () => {
    const {
      darkMode = false,
      spinnerSize = 15,
      spinnerType = "FadingCircleAlt",
      spinnerColor = darkMode ? "#fdfdfd" : "#19191a",
      spinnerVisibility = false,
    } = this.props;
    return (
      <View style={styles.spinnerContainer}>
        <Spinner
          size={spinnerSize}
          // @ts-ignore
          type={spinnerType}
          color={spinnerColor}
          isVisible={spinnerVisibility}
        />
      </View>
    );
  };

  renderSearchIcon = () => {
    const {
      onSearchPress,
      darkMode = false,
      searchIconComponent,
      searchIconImageStyle,
      ImageComponent = Image,
      searchIconImageSource = darkMode ? whiteSearchIcon : defaultSearchIcon,
    } = this.props;
    return (
      <RNBounceable style={styles.searchContainer} onPress={onSearchPress}>
        {searchIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={searchIconImageSource}
            style={[styles.searchIconImageStyle, searchIconImageStyle]}
          />
        )}
      </RNBounceable>
    );
  };

  renderTextInput = () => {
    const {
      type,
      options,
      onBlur,
      onFocus,
      textInputStyle,
      darkMode = false,
      withMask = false,
      keyboardType = 'default',
      autoCapitalize = 'none',
      placeholder = "Search here...",
      selectionColor = "#FFF",
    } = this.props;
    
    if(withMask){
      return (
        <TextInputMask
          type={type}
          options={options}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
          placeholderTextColor={darkMode ? "#fdfdfd" : "#19191a"}
          {...this.props}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={(ref) => (this.inputRef = ref)}
          style={[_textInputStyle(darkMode), textInputStyle]}
          placeholder={placeholder}
          selectionColor={selectionColor}
        />
      );
    }
    
    return (
      <TextInput
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        placeholderTextColor={darkMode ? "#fdfdfd" : "#19191a"}
        {...this.props}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={(ref) => (this.inputRef = ref)}
        style={[_textInputStyle(darkMode), textInputStyle]}
        placeholder={placeholder}
        selectionColor={selectionColor}
      />
    );
  };

  renderClearIcon = () => {
    const {
      darkMode = false,
      clearIconComponent,
      clearIconImageStyle,
      ImageComponent = Image,
      clearIconImageSource = darkMode ? whiteClearIcon : defaultClearIcon,
    } = this.props;
    return (
      <RNBounceable
        bounceEffect={0.8}
        style={styles.clearIconContainer}
        onPress={this.handleOnClearPress}
      >
        {clearIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={clearIconImageSource}
            style={[styles.clearIconImageStyle, clearIconImageStyle]}
          />
        )}
      </RNBounceable>
    );
  };

  render() {
    const { style, darkMode = false, spinnerVisibility } = this.props;
    return (
      <RNBounceable
        {...this.props}
        bounceEffect={0.97}
        style={[_container(darkMode), style]}
        onPress={this.handleSearchBarPress}
      >
        {spinnerVisibility ? this.renderSpinner() : this.renderSearchIcon()}
        {this.renderTextInput()}
        {this.renderClearIcon()}
      </RNBounceable>
    );
  }
}
