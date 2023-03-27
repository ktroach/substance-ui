import React from 'react';
import { FC } from 'react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';
import { CodeExample, DemoPage } from './DemoPage';
import { Button, ButtonGroup } from '../components';

const ButtonGroupPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default example',
      code: (
        <ButtonGroup>
          <Button color="alternative">Profile</Button>
          <Button color="alternative">Settings</Button>
          <Button color="alternative">Messages</Button>
        </ButtonGroup>
      ),
    },
    {
      title: 'Group buttons with icons',
      code: (
        <ButtonGroup>
          <Button color="alternative">
            <HiUserCircle className="mr-3 h-4 w-4" /> Profile
          </Button>
          <Button color="alternative">
            <HiAdjustments className="mr-3 h-4 w-4" /> Settings
          </Button>
          <Button color="alternative">
            <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
          </Button>
        </ButtonGroup>
      ),
    },
    {
      title: 'Colors',
      code: (
        <div className="flex flex-wrap gap-2">
          <ButtonGroup>
            <Button color="blue">Profile</Button>
            <Button color="blue">Settings</Button>
            <Button color="blue">Messages</Button>
          </ButtonGroup>
        </div>
      ),
    },
    {
      title: 'Outline',
      code: (
        <div className="flex flex-wrap gap-2">
          <ButtonGroup outline>
            <Button color="alternative">Profile</Button>
            <Button color="alternative">Settings</Button>
            <Button color="alternative">Messages</Button>
          </ButtonGroup>
        </div>
      ),
    },
    {
      title: 'Outline with icons',
      code: (
        <div className="flex flex-wrap gap-2">
          <ButtonGroup outline>
            <Button color="alternative">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button color="alternative">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button color="alternative">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </ButtonGroup>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ButtonGroupPage;
