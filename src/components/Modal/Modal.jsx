import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Box, ModalContent } from './modal.styled';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
    useEffect(() => {
        const handleKeydown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [onClose]);

    const handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return createPortal(
        <Box onClick={handleBackdropClick || onClose()}>
            <ModalContent>{children}</ModalContent>
        </Box>,
        modalRoot
    );
};

Modal.propTypes = {
    children: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
};
