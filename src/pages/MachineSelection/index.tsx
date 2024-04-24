import React, { useState, useCallback } from 'react';
import { Dimensions } from 'react-native';
import * as S from './styles';
import { Text } from 'react-native';
import Header from '../../components/Common/Header';

const MachineSelection = () => {
  const { width } = Dimensions.get('screen');

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = useCallback(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }, []);

  return (
    <S.Wrapper>
      <S.LogoWrapper>
            <Header/>
      </S.LogoWrapper>
      </S.Wrapper>
  );
};

export default MachineSelection;