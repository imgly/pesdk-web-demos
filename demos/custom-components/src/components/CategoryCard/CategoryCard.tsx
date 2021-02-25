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
import styled from 'styled-components';
import { CustomCardProps, AdvancedUICategoryCard } from 'photoeditorsdk';

const Card = styled(AdvancedUICategoryCard)`
  height: 50px;
  width: 180px;
  border-radius: 16px;
  margin-bottom: 16px;
`;

const Label = styled.div<{ isActive: boolean | void }>`
  width: 180px;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
  color: ${props =>
    props.isActive ? props.theme.primary : props.theme.card.labelForeground};
`;

export const CategoryCard: React.FC<CustomCardProps> = ({
  label,
  isActive,
  children,
  ...props
}) => (
  <div>
    <Label isActive={isActive}>{label}</Label>
    <Card {...props} isActive={isActive} label={label} />
  </div>
);
