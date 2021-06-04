import React from 'react';
import { Tab } from 'react-native-elements';
const Navigationbar = () => {
    return (
        <Tab>
            <Tab.Item title="Recent" />
            <Tab.Item title="favourite" />
            <Tab.Item title="cart" />
        </Tab>
    );
};

export default Navigationbar;