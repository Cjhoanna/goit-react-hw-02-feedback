import { ButtonContainer, ButtonOption } from './FeedbackOptions.styles';

const FeedbackOptions = ({ options, increment }) => {
  return (
    <ButtonContainer>
      {' '}
      {options.map(option => (
        <ButtonOption key={option} name={option} onClick={increment}>
          {option}
        </ButtonOption>
      ))}
    </ButtonContainer>
  );
};

export default FeedbackOptions;
