import React from 'react';

const withID = (WrappedComponent, id) => (<div id={id}> {WrappedComponent} </div>);

export default withID;
