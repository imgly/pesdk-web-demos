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

import { PhotoEditorSDKUIComponent } from 'photoeditorsdk';

export default function Home() {
  const image =
    typeof window !== 'undefined'
      ? `${window.location.origin}/example.jpg`
      : '';
  const config = {
    license: '',
    image,
    assetBaseUrl: 'https://cdn.jsdelivr.net/npm/photoeditorsdk@latest/assets',
  };
  return <PhotoEditorSDKUIComponent {...config} />;
}
