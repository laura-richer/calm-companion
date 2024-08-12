import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import BackButton from '~components/BackButton/BackButton';
import { FullHeightOverlayWrapperProps } from './types';
import styles from './styles';
import { typographyStyles } from '~styles/global';

const FullHeightOverlayWrapper = ({
  children,
  show,
  onClose,
  title,
}: FullHeightOverlayWrapperProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Modal animationType="slide" visible={show ? true : false} onRequestClose={onClose}>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.left,
        }}
      >
        <View style={styles.fullHeightOverlayHeader}>
          <Pressable
            accessibilityLabel="Navigate back to previous screen"
            style={styles.backButton}
            onPress={() => onClose()}
          >
            <BackButton type="dark" />
          </Pressable>
          <Text style={[typographyStyles.textMd, styles.fullHeightOverlayTitle]}>{title}</Text>
        </View>
        <View>{children}</View>
      </View>
    </Modal>
  );
};

export default FullHeightOverlayWrapper;
