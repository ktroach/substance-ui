import React from 'react';
import { FC } from 'react';
import { HiMail } from 'react-icons/hi';

import { CodeExample, DemoPage } from './DemoPage';
import { Button, TextField } from '../components';

const FormsPage: FC = () => {
    const examples: CodeExample[] = [
        {
            title: 'Form example',
            code: (
                <form className="flex flex-col gap-4">
                    <div>
                        <TextField id="email" type="email" placeholder="name@fakemail.com" required />
                    </div>
                    <div>
                        <TextField id="password" type="password" required />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            ),
        },
        {
            title: 'Input Sizing',
            code: (
                <div className="flex flex-col gap-4">
                    <div>
                        <TextField id="small" type="text" sizing="sm" />
                    </div>
                    <div>
                        <TextField id="base" type="text" sizing="md" />
                    </div>
                    <div>
                        <TextField id="large" type="text" sizing="lg" />
                    </div>
                </div>
            ),
        },
        {
            title: 'Disabled inputs',
            code: (
                <div className="flex flex-col gap-4">
                    <TextField type="text" placeholder="Disabled input" disabled />
                    <TextField type="text" placeholder="Disabled readonly input" disabled readOnly />
                </div>
            ),
        },
        {
            title: 'Shadow inputs',
            code: (
                <form className="flex flex-col gap-4">
                    <div>
                        <TextField id="email" type="email" placeholder="name@fakemail.com" required shadow />
                    </div>
                    <div>
                        <TextField id="password" type="password" required shadow />
                    </div>
                    <div>
                        <TextField id="repeat-password" type="password" required shadow />
                    </div>
                    <Button type="submit">Register</Button>
                </form>
            ),
        },
        {
            title: 'Input element with icon',
            code: (
                <div>
                    <TextField id="email" type="email" placeholder="name@fakemail.com" required icon={HiMail} />
                </div>
            ),
        },
        {
            title: 'Input element with addon',
            code: (
                <div>
                    <TextField id="username" placeholder="Bonnie Green" required addon="@" />
                </div>
            ),
        },
        {
            title: 'Success and error validation',
            code: (
                <div className="flex flex-col gap-4">
                    <div>
                        <TextField
                            id="username"
                            placeholder="Your Name"
                            required
                            color="green"
                            helperText={
                                <>
                                    <span className="font-medium">Yes!</span> Username available
                                </>
                            }
                        />
                    </div>
                    <div>
                        <TextField
                            id="username"
                            placeholder="Your Name"
                            required
                            color="red"
                            helperText={
                                <>
                                    <span className="font-medium">Nope!</span> Username already taken
                                </>
                            }
                        />
                    </div>
                </div>
            ),
        }
    ];

    return <DemoPage examples={examples} />;
};

export default FormsPage;