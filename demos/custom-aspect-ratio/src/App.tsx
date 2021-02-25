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

export const App: React.FC = () => {
  const config: ConfigurationProps = {
    license: '',
    image: `${window.location.origin}/example.jpg`,
    assetBaseUrl: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets',
    tools: [Tool.TRANSFORM, Tool.FILTER, Tool.TEXT, Tool.ADJUSTMENT],
    defaultTool: Tool.TRANSFORM,
    transform: {
      categories: [
        {
          identifier: 'custom_transforms_instagram',
          name: 'Custom Instagram',
          items: [
            {
              identifier: 'imgly_transform_instagram_story',
              name: 'Story',
              ratio: 4 / 5,
              forceDimensions: false,
              lockDimensions: false,
            },
            {
              identifier: 'imgly_transform_instagram_square',
              name: 'Profile',
              thumbnailURI: '',
              ratio: 1,
              forceDimensions: false,
              lockDimensions: false,
            },
          ],
        },
        { identifier: 'imgly_transforms_facebook' },
      ],
    },
    library: {
      enableUpload: true,
      enableWebcam: true,
    },
  };

  return <PhotoEditorSDKUIComponent {...config} />;
};
