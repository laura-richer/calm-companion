import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import { useSelector } from 'react-redux';
import { RootState } from '~store/index';
import { selectItemById } from '~store/slices/quickHelp';
import GradientDark from '~components/Gradient/GradientDark';
import { ListItemProps } from './types';
import styles from './styles';
import { dropShadowStyles, typographyStyles } from '~styles/global';

const ListItem = ({ item, handleItemClick, handleHintClick }: ListItemProps) => {
  const itemContent = useSelector((state: RootState) => selectItemById(state, item.id));

  return (
    <DropShadow style={[dropShadowStyles.default, styles.listItemWrapper]}>
      <GradientDark style={styles.listItem} disabled={!item.done}>
        <Pressable
          accessibilityLabel={`Toggle ${item.title} done state`}
          accessibilityHint={`Tap to ${item.done ? 'unmark' : 'mark'} as done`}
          role="button"
          style={styles.listItemPressableArea}
          onPress={() => handleItemClick(item.id)}
        >
          {item.done ? (
            <Image
              source={require('~assets/images/icon-checked.png')}
              resizeMode="contain"
              accessibilityLabel={`${item.title} is done`}
              style={styles.listItemIcon}
            />
          ) : (
            <View style={styles.listItemIcon} accessibilityLabel={`${item.title} is not done`} />
          )}

          <Text
            style={[
              styles.listItemText,
              typographyStyles.textMd,
              item.done ? styles.listItemCheckedText : null,
            ]}
          >
            {item.title}
          </Text>
        </Pressable>

        <React.Fragment>
          {itemContent ? (
            <Pressable
              accessibilityLabel={`Find out more about ${item.title}`}
              onPress={() => handleHintClick(item.id)}
            >
              <Text style={styles.listItemHelper}>Whats this?</Text>
            </Pressable>
          ) : null}
        </React.Fragment>
      </GradientDark>
    </DropShadow>
  );
};

export default ListItem;
