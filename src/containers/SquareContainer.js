import { connect } from 'react-redux';
import Square from '../components/Square';
import * as actions from '../Actions';

const mapStateToProps = state => {
    console.log(state)
    return {
        color: state.color,
        button: state.onButton,
        input: state.onInput
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (color) => dispatch(actions.change(color)),
        onChangeButton: () => dispatch(actions.button()),
        onChangeInput: () => dispatch(actions.input())
    }
}

const SquareContainer = connect(mapStateToProps, mapDispatchToProps)(Square);

export default SquareContainer;
