import React from 'react';
import { Text, View } from 'react-native';
import ScreenHeader from '~components/ScreenHeader/ScreenHeader';
import ContentWrapper from '~components/ContentWrapper/ContentWrapper';

const AnxietyResources = () => {
  return (
    <View>
      <ScreenHeader
        title={'Anxiety resources'}
        image={require('~assets/images/screenHeaders/anxiety-resources.png')}
        imageWidth={75}
        imageHeight={75}
      />
      <ContentWrapper>
        <Text>Anxiety Resources</Text>
      </ContentWrapper>
    </View>
  );
};

export default AnxietyResources;
