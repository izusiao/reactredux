import { connect } from 'react-redux';
import Calculator from '../components/Calculator';
import { plus, changeVal1, changeVal2 } from '../Actions';

const mapStateToProps = state => {
    return {
        suma: state.suma,
        val1: state.val1,
        val2: state.val2
    }
}
const mapDispatchToProps = dispatch => {
    return {
        plus: (suma) => dispatch(plus(suma)),
        onChangeVal1: val1 => dispatch(changeVal1(val1)),
        onChangeVal2: val2 => dispatch(changeVal2(val2))
    }
}

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);

export default CalculatorContainer;