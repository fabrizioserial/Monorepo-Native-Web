import React from "react";

import ProviderComponent from "./components/ProviderComponent";

export function App({children}) {
    return (
        <ProviderComponent>
            {children}
        </ProviderComponent>

    );
}

export default App;