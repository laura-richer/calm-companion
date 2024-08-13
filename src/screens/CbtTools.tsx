import React from 'react';
import { Text, View } from 'react-native';
import ScreenHeader from '~components/ScreenHeader/ScreenHeader';
import ContentWrapper from '~components/ContentWrapper/ContentWrapper';

const CbtTools = () => {
  return (
    <View>
      <ScreenHeader
        title={'CBT Tools'}
        image={require('~assets/images/screenHeaders/cbt-tools.png')}
        imageWidth={135}
        imageHeight={75}
        imageFlushToBottom={true}
      />
      <ContentWrapper>
        <Text style={{ color: 'black' }}>CBT tools</Text>
      </ContentWrapper>
    </View>
  );
};

export default CbtTools;
