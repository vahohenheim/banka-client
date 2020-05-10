// define
import React, { PureComponent, Fragment } from 'react'

//components
import { Modal, Button, Select } from 'antd'
import FormTransaction from '../../components/FormTransaction'

class NoMatch extends PureComponent {


  
  
  render() {
    console.log(this)

    return (
      <Fragment>

            <h1>No Match for {location.pathname}</h1>

            

      </Fragment>
    )
  }
}

export default NoMatch
