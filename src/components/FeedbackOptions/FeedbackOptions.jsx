import PropTypes from "prop-types"
import { Button, Wrapper } from "./FeedbackOptions.styled";
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Wrapper>
            {options.map(option => {
                return (
                    <div key={option} >
                        <Button type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button>
                    </div>);   
            })}
        </Wrapper>);
    
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}
        
    
