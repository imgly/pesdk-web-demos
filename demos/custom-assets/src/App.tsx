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
  CanvasAction,
  ConfigurationProps,
  PhotoEditorSDKUIComponent,
  Tool,
} from 'photoeditorsdk';

export const App: React.FC = () => {
  const config: ConfigurationProps = {
    license: '',
    image: `${window.location.origin}/example.jpg`,
    assetBaseUrl: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets',
    sticker: {
      categories: [
        {
          identifier: 'custom_category',
          name: 'Custom Category',
          thumbnailURI: 'emoji_ape.png', // path to the sticker, relative to the sticker asset directory
          items: [
            {
              identifier: 'custom_sticker_ape',
              name: 'Ape',
              thumbnailURI: 'emoji_ape.png', // path to the thumbnail, relative to the sticker asset directory
              stickerURI: 'emoji_ape.png', // path to the sticker, relative to the sticker asset directory
              tintMode: 'none', // Default: 'none', Other options: 'solid', 'colorized'
              resizeMode: 'keepAspect', // Default: 'keepAspect', Other options:: 'keepAspect', 'unrestricted'
            },
            {
              identifier: 'custom_sticker_crying',
              name: 'Crying',
              thumbnailURI: 'emoji_crying.png', // path to the thumbnail, relative to the sticker asset directory
              stickerURI: 'emoji_crying.png', // path to the sticker, relative to the sticker asset directory
              tintMode: 'none', // Default: 'none', Other options: 'solid', 'colorized'
              resizeMode: 'keepAspect', // Default: 'keepAspect', Other options:: 'keepAspect', 'unrestricted'
            },
            {
              identifier: 'custom_sticker_happy_face',
              name: 'Happy Face',
              thumbnailURI: 'emoji_happyface.png', // path to the thumbnail, relative to the sticker asset directory
              stickerURI: 'emoji_happyface.png', // path to the sticker, relative to the sticker asset directory
              tintMode: 'none', // Default: 'none', Other options: 'solid', 'colorized'
              resizeMode: 'keepAspect', // Default: 'keepAspect', Other options:: 'keepAspect', 'unrestricted'
            },
            {
              identifier: 'custom_sticker_melon',
              name: 'Melon',
              thumbnailURI: 'emoji_melon.png', // path to the thumbnail, relative to the sticker asset directory
              stickerURI: 'emoji_melon.png', // path to the sticker, relative to the sticker asset directory
              tintMode: 'none', // Default: 'none', Other options: 'solid', 'colorized'
              resizeMode: 'keepAspect', // Default: 'keepAspect', Other options:: 'keepAspect', 'unrestricted'
            },
          ],
        },
        { identifier: 'imgly_sticker_emoticons' },
      ],
    },
    defaultTool: Tool.STICKER,
    mainCanvasActions: [
      CanvasAction.UNDO,
      CanvasAction.REDO,
      CanvasAction.EXPORT,
    ],
    tools: [Tool.STICKER, Tool.FILTER, Tool.TEXT, Tool.ADJUSTMENT],
    library: {
      enableUpload: true,
      enableWebcam: true,
    },
  };

  return <PhotoEditorSDKUIComponent {...config} />;
};
