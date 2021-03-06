// import React, { Component } from 'react';
 
// const stopColor = (state) => {
//   return state == 'STOP' ? 'red' : 'white';
// }
 
// const cautionColor = (state) => {
//   return state == 'CAUTION' ? 'yellow' : 'white';
// }
 
// const goColor = (state) => {
//   return state == 'GO' ? 'rgb(39,232,51)' : 'white';
// }
 
// export const Stoplight = ({
//   store
// }) => {
//   const state = store.getState();
 
//   return(
//     <div style={{textAlign: 'center'}}>
//       <svg height='170'>
//         <circle cx='145' cy='60' r='15'
//                 fill={stopColor(state)}
//                 stroke='black'/>
 
//         <circle cx='145' cy='100' r='15'
//                 fill={cautionColor(state)}
//                 stroke='black'/>
 
//         <circle cx='145' cy='140' r='15'
//                 fill={goColor(state)}
//                 stroke='black'/>
 
//       </svg>
//     </div>
//   )
// }

'use strict';
 
import React, { Component } from 'react';
 
const stopColor = (store) => {
  return store.getState() == 'STOP' ? 'red' : 'white';
}
 
const cautionColor = (store) => {
  return store.getState() == 'CAUTION' ? 'yellow' : 'white';
}
 
const goColor = (store) => {
  return store.getState() == 'GO' ? 'rgb(39,232,51)' : 'white';
}
 
export class Stoplight extends Component {
  componentWillMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
  }
 
  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <svg height='170'>
          <circle cx='145' cy='60' r='15'
                  fill={stopColor(this.props.store)}
                  stroke='black'/>
 
          <circle cx='145' cy='100' r='15'
                  fill={cautionColor(this.props.store)}
                  stroke='black'/>
 
          <circle cx='145' cy='140' r='15'
                  fill={goColor(this.props.store)}
                  stroke='black'/>
        </svg>
      </div>
    )
  }
}