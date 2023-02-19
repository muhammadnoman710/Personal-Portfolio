import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href='tel:03083338027'></LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto:nomi32655@gmail.com'></LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
<Slogan>InnovTing one project at a time</Slogan>
</CompanyContainer>
      <SocialIcons href='https://github.com'>
            <AiFillGithub size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://linkedIn.com'>
            <AiFillLinkedin size='3rem'/>
          </SocialIcons>
          <SocialIcons href='https://facebook.com'>
            <AiFillInstagram size='3rem'/>
          </SocialIcons>
          </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
