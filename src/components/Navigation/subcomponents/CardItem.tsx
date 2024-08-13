import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { CardItemProps } from '../types';
import styles from '../styles';
import { colors } from '~styles/variables';
import { dropShadowStyles, typographyStyles } from '~styles/global';

const CardItem = ({ item, handleChangeScreen }: CardItemProps) => {
  const formattedTitle = item.title.split(' ');

  return (
    <React.Fragment>
      <DropShadow style={[dropShadowStyles.default, styles.cardNavigationItem]}>
        <Pressable
          accessibilityLabel={item.title}
          style={({ pressed }) => [
            styles.cardNavigationItemInner,
            {
              backgroundColor: pressed ? colors.GREY : colors.WHITE,
            },
          ]}
          key={item.id}
          onPress={() => handleChangeScreen(item.id)}
        >
          <Text style={[typographyStyles.textMd, styles.cardNavigationItemText]}>
            {formattedTitle[0]}
            {'\n'}
            {formattedTitle[1]}
          </Text>
          <Image
            alt={`${item.title} icon`}
            accessibilityHint="Icon"
            style={styles.cardNavigationItemImage}
            resizeMode="contain"
            source={item.cardIcon}
          />
        </Pressable>
      </DropShadow>
    </React.Fragment>
  );
};

export default CardItem;
