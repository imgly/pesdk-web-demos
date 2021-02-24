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
import { ItemCard } from './components/ItemCard';
import { CategoryCard } from './components/CategoryCard';

export const App: React.FC = () => {
  const config: ConfigurationProps = {
    license: '',
    image: './example.jpg',
    assetBaseUrl: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets',
    custom: {
      components: {
        advancedUIItemCard: ItemCard,
        advancedUICategoryCard: CategoryCard,
      },
    },
    defaultTool: Tool.FILTER,
    tools: [
      Tool.FILTER,
      Tool.ADJUSTMENT,
      Tool.FOCUS,
      Tool.TEXT,
      Tool.TEXT_DESIGN,
      Tool.STICKER,
      Tool.BRUSH,
      Tool.OVERLAY,
      Tool.FRAME,
    ],
    filter: {
      flattenCategories: true,
    },
    library: {
      enableUpload: true,
      enableWebcam: true,
    },
  };

  return <PhotoEditorSDKUIComponent {...config} />;
};
