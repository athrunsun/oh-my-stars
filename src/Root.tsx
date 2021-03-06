import lodash from 'lodash';
import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { cssRaw } from 'typestyle';

import * as routePathHelpers from '@app/helpers/routePath';

import App from '@app/components/App';

cssRaw(`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body {
        margin: 0;
    }
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
`);

function Root() {
    useEffect(() => {
        // Element `#first_screen` is automatically overriden when we mount `Root` component to `#root`.
        // (document.getElementById('first_screen') as HTMLElement).outerHTML = '';
        (document.getElementById('first_screen_styles') as HTMLElement).outerHTML = '';
    }, []);

    return (
        <BrowserRouter {...!lodash.isEmpty(process.env.APP_BASE_URL) && { basename: process.env.APP_BASE_URL }}>
            <Switch>
                <Redirect
                    exact={true}
                    from={routePathHelpers.routePathProvider.ROOT}
                    to={routePathHelpers.routePathProvider.APP}
                />
                <Route path={routePathHelpers.routePathProvider.APP} component={App} />
            </Switch>
        </BrowserRouter>
    );
}

export default Root;
