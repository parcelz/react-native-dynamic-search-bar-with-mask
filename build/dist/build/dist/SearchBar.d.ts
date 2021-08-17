export var __esModule: boolean;
export default SearchBar;
declare class SearchBar extends React.Component<any, any, any> {
    constructor(...args: any[]);
    inputRef: react_native_masked_text_1.TextInputMask | null;
    handleSearchBarPress: () => void;
    handleOnClearPress: () => void;
    renderSpinner: () => JSX.Element;
    renderSearchIcon: () => JSX.Element;
    renderTextInput: () => JSX.Element;
    renderClearIcon: () => JSX.Element;
}
import react_native_masked_text_1 = require("react-native-masked-text");
