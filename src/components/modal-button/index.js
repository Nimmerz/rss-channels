import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PieChart from 'react-minimal-pie-chart';
import { connect } from 'react-redux';

const modal = document.getElementById('modal-root');

const colors = ['#1abc9c', '#f1c40f', '#2ecc71', '#e67e22', '#3498db', '#e74c3c', '#9b59b6', '#bdc3c7', '#34495e', '#95a5a6', '#1488C8', '#F7E041', '#E91222', '#30A443', '#C7B29B', '#29475F', '#F8DE73', '#D76817', '#666666', '#F45750', '#FE6EDA', '#5BADAF', '#64543E', '#2C2D31', '#E08283', '#D83E40'];

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class Modal extends Component {

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
        showModal: false,

    };


    countLetters = () =>{
        let text = (this.props.item) ? this.props.item.title : '';
        text.toLowerCase();

        if(!text) {
            return 'Current message has no description';
        }

        let data = [];
        let lettersAmount = text.match(/[a-zA-Z]/g).length;

        alphabet.forEach((letter, i) => {
            let currentLetterAmount = text.match(new RegExp(`${letter}`, `g`));

            if(currentLetterAmount) {
                let percent = currentLetterAmount.length / lettersAmount * 100;

                data.push({
                    key: letter,
                    value: +percent.toFixed(2),
                    color: colors[i]
                });
            }

        });

        return data
    };

    handleShow = () => () => {
        (this.props.item) ? this.setState({showModal: true}) : alert ('Choose title for PipeChrat!')
    };

    handleHide = () => () => {
        this.setState({showModal: false});
    };

    render() {
        console.log('item: ', (this.props.item) ? this.props.item.title : 'empty title');
        const data = this.countLetters();
        console.log(data);
        const modal = this.state.showModal ? (
            <Modal>
                <div className="modal">
                    <div className="main__content--modal">
                        <div className="main__content--modal-main">
                            <p className="main__content--modal-content">Show Statistic</p>
                            <a className="main__content--modal-close" href="#" onClick={this.handleHide()}>x</a>
                        </div>

                        <div className="main__content--modal-buttons">

                            <PieChart className="pipe-chart"
                               data={ data }
                            />
                            <button className="main__content--modal-cancel" type="cancel"
                                    onClick={this.handleHide()}>
                                cancel
                            </button>
                        </div>
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


const mapStateToProps = (state) => ({
    item: state.news.activeNew
});

export default connect(mapStateToProps, null)(Show);

