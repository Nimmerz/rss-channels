import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const PieChart = require("react-chartjs").Pie;

class MyComponent extends React.Component{

    render() {
        return <PieChart data={this.state.chartData} redraw/>
    }
};


const modal = document.getElementById('modal-root');

class Modal extends Component  {

    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        modal.appendChild(this.el);
    }

    componentWillUnmount() {
        modal.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}



class Show extends Component {

    state = {
        showModal: false
    };

    handleShow = () => () => {
        this.setState({showModal: true});
    };

    handleHide = () => () => {
        this.setState({showModal: false});
    };

    render() {
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div className="main__content--modal">
                        <div className="main__content--modal-main">
                            <p className="main__content--modal-content">Show Statistic</p>
                            <a className="main__content--modal-close" href="#" onClick={this.handleHide()}>x</a>
                        </div>
                        <form>
                            <MyComponent/>
                            <div className="main__content--modal-buttons">
                                <button className="main__content--modal-cancel" type="cancel"
                                        onClick={this.handleHide()}>
                                    cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        ) : null;
        return (
            <div className="app">
                <button className="button-plus" onClick={this.handleShow()}>Statistic</button>
                {modal}
            </div>
        );
    }

}


export default Show;

