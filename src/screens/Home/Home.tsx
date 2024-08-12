import React from 'react';
import { View } from 'react-native';
import ScreenHeader from '~components/ScreenHeader/ScreenHeader';
import ContentWrapper from '~components/ContentWrapper/ContentWrapper';
import CardNavigationContainer from '~components/Navigation/NavigationContainers/CardNavigationContainer';

const Home = () => {
  return (
    <View>
      <ScreenHeader
        title={'Home'}
        image={require('~assets/images/screenHeaders/home.png')}
        imageWidth={184}
        imageHeight={75}
        imageFlushToBottom={true}
      />
      <ContentWrapper>
        <CardNavigationContainer />
      </ContentWrapper>
    </View>
  );
};

export default Home;
