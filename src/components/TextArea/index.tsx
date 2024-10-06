import React from 'react';
import { TextAreaContainer, TextAreaInput } from './styles';

interface TextAreaProps {
  disabled?: boolean;
  value: string;
  onChangeText: (value: string) => void;
  onKeyUp?: () => void;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  disabled,
  value,
  onChangeText,
  onKeyUp,
  placeholder,
}) => {
  return (
    <TextAreaContainer>
      <TextAreaInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onKeyUp={onKeyUp}
        editable={!disabled}
        multiline
      />
    </TextAreaContainer>
  );
};

export default TextArea;
