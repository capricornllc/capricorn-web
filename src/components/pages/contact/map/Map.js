import React from 'react';

import { compose, withProps, withStateHandlers } from 'recompose';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';

export const Map = compose(
    withStateHandlers(() => ({
        isOpen: false,
    }), {
        onToggleOpen: ({ isOpen }) => () => ({
            isOpen: !isOpen,
        })
    }),
    withScriptjs,
    withGoogleMap
)(props => {
    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: props.lat, lng: props.long }}>
            <Marker
                position={{ lat: props.lat, lng: props.long }}
                onClick={() => window.open(props.website, '_blank')} />
        </GoogleMap>
    );
}
);

