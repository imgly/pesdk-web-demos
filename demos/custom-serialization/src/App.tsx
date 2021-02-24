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
import React, { useCallback } from 'react';
import {
  ConfigurationProps,
  PhotoEditorSDKUIComponent,
  UIEvent,
} from 'photoeditorsdk';

import serialization from './serialization.json';

export const App: React.FC = () => {
  const config: ConfigurationProps = {
    license: '',
    image: './example.jpg',
    assetBaseUrl: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets',
    library: {
      enableUpload: true,
      enableWebcam: true,
    },
  };

  const setEvents = useCallback((node: PhotoEditorSDKUIComponent) => {
    if (node !== null) {
      node.ui.on(UIEvent.EDITOR_READY, () => {
        node.deserialize(serialization);
      });
    }
  }, []);

  return <PhotoEditorSDKUIComponent ref={setEvents} {...config} />;
};
