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
  ContainedPrimaryButton,
  CustomToolProps,
  useIsLayoutAdvanced,
  useSetImage,
} from 'photoeditorsdk';
import styled from 'styled-components';

const ToolbarWrapper = styled.div`
  display: flex;
  overflow: auto hidden;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: ${props =>
    props.theme.measurements.basicToolControlBar.itemsBarHeight}px;
`;

export const CustomToolControlBar: React.FC<CustomToolProps> = () => {
  const setImage = useSetImage();

  const onClick = () => {
    setImage(
      'https://images.unsplash.com/photo-1622983472974-4c5a568beeec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    );
  };

  const isAdvancedLayout = useIsLayoutAdvanced();

  if (isAdvancedLayout) {
    return (
      <ContainedPrimaryButton label="Remove Background" onClick={onClick} />
    );
  }

  return (
    <ToolbarWrapper>
      <ContainedPrimaryButton label="Remove Background" onClick={onClick} />
    </ToolbarWrapper>
  );
};
