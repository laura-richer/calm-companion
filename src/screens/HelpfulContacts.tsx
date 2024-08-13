import React from 'react';
import { Text, View } from 'react-native';
import ScreenHeader from '~components/ScreenHeader/ScreenHeader';
import ContentWrapper from '~components/ContentWrapper/ContentWrapper';

const HelpfulContacts = () => {
  return (
    <View>
      <ScreenHeader
        title={'Helpful contacts'}
        image={require('~assets/images/screenHeaders/helpful-contacts.png')}
        imageWidth={76}
        imageHeight={75}
        imageFlushToBottom={true}
      />
      <ContentWrapper>
        <Text style={{ color: 'black' }}>Helpful contacts</Text>
      </ContentWrapper>
    </View>
  );
};

export default HelpfulContacts;
