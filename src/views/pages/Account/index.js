// define
import React, { PureComponent, Fragment } from 'react'

//components
import { Modal, Button } from 'antd'
import FormTransaction from '../../components/FormTransaction'
import CardAccount from '../../components/presentationals/CardAccount'





class Account extends PureComponent {
    state = { visible: false }



    showModal = () => {
        this.setState({
          visible: true,
        })
    }

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        })
    }

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        })
    }
  
    render() {
        const { match } = this.props

        const id = match.params.id

        return (
            <div className="">

                <div className="container-account">
                    <ul className="list list-account">
                        {accounts.map((account) => (
                            <li>
                                <CardAccount key={account.id} account={account} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="container-transaction">
                    <ul className="list list-transaction">
                        <li>
                            <div className="transaction">
                                <p className="transaction-label"><span className="bold">Super U</span>{` | Courses de la semaine`}</p>
                                <p className="transaction-price-negative">-32,12€</p>
                            </div>
                        </li>
                        <li>
                            <div className="transaction">
                                <p className="transaction-label"><span className="bold">Super U</span>{` | Courses de la semaine`}</p>
                                <p className="transaction-price-negative">-32,12€</p>
                            </div>
                        </li>
                        <li>
                            <div className="transaction">
                                <p className="transaction-label"><span className="bold">Super U</span>{` | Courses de la semaine`}</p>
                                <p className="transaction-price-negative">-32,12€</p>
                            </div>
                        </li>
                        <li>
                            <div className="transaction">
                                <p className="transaction-label"><span className="bold">Super U</span>{` | Courses de la semaine`}</p>
                                <p className="transaction-price-negative">-32,12€</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="container-bottom">
                    <Button type="primary" block onClick={this.showModal}> 
                        <svg className="white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 16">
                            <path fill="currentColor" d="M19.2940916,10.29 L17.0040916,12.59 L17.0040916,1 C17.0040916,0.44771525 16.5563764,0 16.0040916,0 C15.4518069,0 15.0040916,0.44771525 15.0040916,1 L15.0040916,12.59 L12.7140916,10.29 C12.3219695,9.89787783 11.6862138,9.89787783 11.2940916,10.29 C10.9019695,10.6821222 10.9019695,11.3178778 11.2940916,11.71 L15.2940916,15.71 C15.3891953,15.8010406 15.5013403,15.8724056 15.6240916,15.92 C15.8661315,16.0269768 16.1420517,16.0269768 16.3840916,15.92 C16.5068429,15.8724056 16.6189879,15.8010406 16.7140916,15.71 L20.7140916,11.71 C21.1062138,11.3178778 21.1062138,10.6821222 20.7140916,10.29 C20.3219695,9.89787783 19.6862138,9.89787783 19.2940916,10.29 Z M1.71409163,5.71023259 L4.00409163,3.41023259 L4.00409163,15.0002326 C4.00409163,15.5525173 4.45180688,16.0002326 5.00409163,16.0002326 C5.55637638,16.0002326 6.00409163,15.5525173 6.00409163,15.0002326 L6.00409163,3.41023259 L8.29409163,5.71023259 C8.6862138,6.10235476 9.32196946,6.10235476 9.71409163,5.71023259 C10.1062138,5.31811042 10.1062138,4.68235476 9.71409163,4.29023259 L5.71409163,0.29023259 C5.61898792,0.19919196 5.50684295,0.127826978 5.38409163,0.0802325896 C5.14205175,-0.0267441965 4.86613151,-0.0267441965 4.62409163,0.0802325896 C4.50134031,0.127826978 4.38919534,0.19919196 4.29409163,0.29023259 L0.294091629,4.29023259 C-0.0980305431,4.68235476 -0.0980305431,5.31811042 0.294091629,5.71023259 C0.686213802,6.10235476 1.32196946,6.10235476 1.71409163,5.71023259 Z"/>
                        </svg>
                        Ajouter une transation
                    </Button>
                    <Modal
                    title="add a spent"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <FormTransaction/>
                    </Modal>
                </div>

            </div>
        )
    }
}

export default Account
