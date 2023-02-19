import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id ="tech">
<SectionDivider/>
<br/>
<SectionTitle>Technologies</SectionTitle>
<SectionText>Blah blah blah edit it</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem"/>
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>Experience With React.js</ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size="3rem"/>
    <ListContainer>
      <ListTitle>Backend</ListTitle>
      <ListParagraph>Experience With Node.js</ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size="3rem"/>
    <ListContainer>
      <ListTitle>UI/UX</ListTitle>
      <ListParagraph>Experience With Figma</ListParagraph>
    </ListContainer>
  </ListItem>
</List>
  </Section>
);

export default Technologies;
