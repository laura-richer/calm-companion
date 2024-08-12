import React from 'react';
import { Text } from 'react-native';
import { RteWrapperProps } from './types';
import ContentWrapper from '~components/ContentWrapper/ContentWrapper';
import RteHeading from './components/RteHeading';
import RteParagraph from './components/RteParagraph';
import RteList from './components/RteList';
// import RteImage from './components/RteImage';
// import RteVideo from './components/RteVideo';

const RteWrapper = ({ content }: RteWrapperProps) => {
  return (
    <ContentWrapper>
      {content.map((item, index) => {
        switch (item.component) {
          case 'Heading':
            return <RteHeading content={item.text} />;
          case 'Paragraph':
            return <RteParagraph content={item.text} />;
          case 'List':
            return <RteList content={item.items} />;
          // case 'image':
          //   return <RteImage key={index} src={item.src} alt={item.alt} />;
          // case 'video':
          //   return <RteVideo key={index} src={item.src} />;
          default:
            return <Text key={index}>Unsupported content type</Text>;
        }
      })}
    </ContentWrapper>
  );
};

export default RteWrapper;
