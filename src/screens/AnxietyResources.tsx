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
        <Text style={{ color: 'black' }}>Balance App</Text>
        <Text style={{ color: 'black' }}>Headspace app</Text>
        <Text style={{ color: 'black' }}>Calm app</Text>
        <Text style={{ color: 'black' }}>https://www.youtube.com/@GreatMeditation</Text>
        <Text style={{ color: 'black' }}>
          https://www.youtube.com/watch?v=Sxddnugwu-8&list=PLui6Eyny-UzwDdFPVSeYN3aTG_B1qtHtz
        </Text>
        <Text style={{ color: 'black' }}>
          https://www.nhsinform.scot/illnesses-and-conditions/mental-health/mental-health-self-help-guides/anxiety-self-help-guide/
        </Text>
        <Text style={{ color: 'black' }}>
          https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/treatment/
        </Text>
      </ContentWrapper>
    </View>
  );
};

export default AnxietyResources;
