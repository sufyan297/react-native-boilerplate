import React from 'react';
import Routes from '../container/routes';
import { View } from 'react-native';
import { Provider } from 'mobx-react/native';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';
import { PRIMARY_COLOR } from '../config/globals';
// import { MenuProvider } from 'react-native-popup-menu';

// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: PRIMARY_COLOR,
  },
  toolbar: {
    container: {
      height: 60,
    },
  },
};


export default (stores) => {
  return class Root extends React.Component {
    constructor() {
      super();
      this.state = {};
    }

    componentDidMount() {
      console.log("Component Mounted.");
      // To see all the requests in the chrome Dev tools in the network tab.
      XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
      GLOBAL.originalXMLHttpRequest :
      GLOBAL.XMLHttpRequest;

      // fetch logger
      global._fetch = fetch;
        global.fetch = function (uri, options, ...args) {
        return global._fetch(uri, options, ...args).then((response) => {
        console.log('Fetch', { request: { uri, options, ...args }, response });
        return response;
        });
      };

    }
    render() {
      return (
        <View style={{ flex: 1 }}>
          <ThemeContext.Provider value={getTheme(uiTheme)}>
            <Provider {...stores}>
              {/* <MenuProvider> */}
                <Routes />
              {/* </MenuProvider> */}
            </Provider>
          </ThemeContext.Provider>
        </View>
      )
    }
  }

}