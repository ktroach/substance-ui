import { FC } from 'react';
import { CodeExample, DemoPage } from './DemoPage';
import { Label } from '../lib';

const FormsPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Label examples',
      code: (
        <>
            <div>
                <Label className="mb-2 block" htmlFor="theInput">
                    A Label for An Input
                </Label>
                <input id="theInput" type="text" placeholder="Enter some text..."></input>
            </div>
            <div>
                <Label className="mb-2 block" color="default">
                    Default dark Label
                </Label>
            </div>               
            <div>
                <Label className="mb-2 block" color="blue">
                    Blue Label
                </Label>
            </div>      
            <div>
                <Label className="mb-2 block" color="red">
                    Red Label
                </Label>
            </div> 
            <div>
                <Label className="mb-2 block" color="green">
                    Green Label
                </Label>
            </div>  
            <div>
                <Label className="mb-2 block" color="yellow">
                    Yellow Label
                </Label>
            </div>   
            <div>
                <Label className="mb-2 block" color="purple">
                    Purple Label
                </Label>
            </div>                                                            
            <div>
                <Label htmlFor="accept">
                    A Label with a Link{' '}
                    <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
                        The Link to Follow
                    </a>
                </Label>         
            </div>
            <div className="flex flex-row gap-3 items-center">
                <div>
                    <Label className="mb-2 block" htmlFor="nextInput">
                        A Label next to an Input:
                    </Label>
                </div>
                <div>
                    <input id="nextInput" type="text" placeholder="Enter text here..."></input>
                </div>
            </div>
        </>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default FormsPage;