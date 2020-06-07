import React, { Component } from 'react';

import Modal from '../../Components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const WithErrorHandler = (Wrappedcomponent,axios) => {
    return class extends Component{
        state={
            error:null
        }

        componentWillMount(){
            this.reqInterceptors=axios.interceptors.request.use(req=>{
                this.setState({error:null});
                return req
            });
            this.resInterceptros=axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:true});
            });
        }

        componentWillUnmount(){
            axios.interceptors.request.eject( this.reqInterceptor );
            axios.interceptors.response.eject( this.resInterceptor );
        }

        errorConfirmedHandler=()=>{
            this.setState({error:null})
        }

        render (){
            return (
                <Aux>
                    <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                        {this.state.error?this.state.error.message:null}
                    </Modal>
                    <Wrappedcomponent {...this.props} />
                </Aux>
            );
        }
    }
}
export default WithErrorHandler;
