import { useState } from "react";
import styled from "styled-components";
import { MessageCircle } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
  $isOpen?: boolean;
}

const StyledButton = styled.button<ChatButtonProps>`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  padding: 1rem;
  border-radius: 9999px;
  background-color: #d4af37;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #c19b2c;
    transform: scale(1.05);
  }

  ${(props) =>
    props.$isOpen &&
    `
    transform: rotate(90deg);
  `}
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 5rem;
  right: 1rem;
  width: 300px;
  height: 400px;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const ChatButton:React.FC<ChatButtonProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <StyledButton onClick={toggleChat} $isOpen={isOpen}>
        <MessageCircle className="h-6 w-6" />
      </StyledButton>
      {isOpen && (
        <ChatContainer>
          <h3>Chatbot</h3>
          <p>Aqui é o chatbot aberto!</p>
        </ChatContainer>
      )}
    </>
  );
};
