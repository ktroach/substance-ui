import React from 'react';
import { FC, useState } from 'react';
import { CodeExample, DemoPage } from './DemoPage';
import { Modal, Button, } from '../components';
// import { HiOutlineExclamationCircle } from 'react-icons/hi';

const ModalPage: FC = () => {
    const [openModal, setOpenModal] = useState<string | undefined>();
    const examples: CodeExample[] = [
        {
            title: 'Default modal',
            code: (
                <>
                    <Button onClick={() => setOpenModal('default')}>Toggle modal</Button>
                    <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
                        <Modal.Header>What you will learn</Modal.Header>
                        <Modal.Body className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                User interface design best practices to solve problems effectively
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Learn how to turn your designs into an interactive prototype that you can then sync to a free InVision account to share, get feedback, and handoff your designs to a develop to build the real thing.
                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => setOpenModal(undefined)}>OK</Button>
                            <Button color="alternative" onClick={() => setOpenModal(undefined)}>
                                No Thanks
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ),
        },
    ];

    return <DemoPage examples={examples} />;
};

export default ModalPage;