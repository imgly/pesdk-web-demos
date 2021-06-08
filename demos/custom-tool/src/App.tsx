/*
  This file is part of an img.ly Software Development Kit.
  Copyright (C) 2016-2021 img.ly GmbH <contact@img.ly>
  All rights reserved.
  Redistribution and use in source and binary forms, without
  modification, are permitted provided that the following license agreement
  is approved and a legal/financial contract was signed by the user.
  The license agreement can be found under the following link:
  https://www.photoeditorsdk.com/LICENSE.txt
*/
import React from 'react';
import {
  ConfigurationProps,
  PhotoEditorSDKUIComponent,
  Tool,
} from 'photoeditorsdk';
import { CustomToolbarIcon } from './CustomToolbarIcon';
import { CustomToolControlBar } from './CustomToolControlBar';

export const App: React.FC = () => {
  const config: ConfigurationProps = {
    layout: 'basic',
    license: '',
    image: `${window.location.origin}/example.jpg`,
    assetBaseUrl: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets',
    // include custom tool into tools list
    tools: [Tool.CUSTOM, Tool.TRANSFORM],
    // provide tool configuration
    [Tool.CUSTOM]: {
      // toolbar icon
      icon: CustomToolbarIcon,
      // See Toolbar component API
      toolControlBar: CustomToolControlBar,
    },
    custom: {
      languages: {
        en: {
          customTool: {
            // toolbar title
            title: 'Custom Tool',
            // ...other localization strings
          },
        },
      },
    },
  };

  return <PhotoEditorSDKUIComponent {...config} />;
};
