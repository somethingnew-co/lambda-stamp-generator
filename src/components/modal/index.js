import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import theme from 'styles/Theme'

const ModalContainer = styled.div`
  position: fixed;
  min-width: 50vw;
  max-width: 100vw;
  bottom: 0;
  left: 50%;
  opacity: ${({ visible }) => visible ? 1 : 0};
  transform: translateX(-50%) translateY(${({ visible }) => visible ? 0 : '150%'});
  pointer-events: ${({ visible }) => visible ? 'all' : 'none'};
  transition: opacity 0.5s, transform 0.5s;

  display: flex;
  flex-direction: column;

  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.15);
  z-index: 10;
`

const CloseButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
  button { 
    color: ${theme.colors.red};
    text-align: center;
    appearance: none;
    border: none;
    background-color: Transparent;
    margin: 0 auto;
    font-size: 1em;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

const Modal = ({ visible, onClose, children }) => (
  <ModalContainer visible={visible}>
    <CloseButton>
      <button onClick={onClose}>Close</button>
    </CloseButton>
    {children}
  </ModalContainer>
)

Modal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.any,
}

export { Modal }
