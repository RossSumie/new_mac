import React from 'react';
import { Image } from 'react-native';
import * as S from './styles';
import { useNavigation } from '@react-navigation/core';
import { Text } from 'react-native';
import LogoImg from '../../../assets/icons/Volvo-Spread-Word-Mark-Black.svg';
import BackIcon from '../../../assets/icons/Symbol_Arrow left_Black.svg';
import InfoIcon from '../../../assets/icons/Symbol_Info_Black.svg'


const Header = () => {

  return (
    <S.Wrapper>
            <S.Button>
                <BackIcon width={32}/>
            </S.Button>
            <S.LogoContainer>
              <LogoImg/>
            </S.LogoContainer>
            <S.Button>
                <InfoIcon width={24}/>
            </S.Button>
    </S.Wrapper>
  );
};

export default Header;