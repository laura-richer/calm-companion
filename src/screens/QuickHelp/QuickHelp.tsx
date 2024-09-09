import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useAppSelector } from '~store/hooks';
import { useDispatch } from 'react-redux';
import { toggleDoneState } from '~store/slices/quickHelp';
import ScreenHeader from '~components/ScreenHeader/ScreenHeader';
import ContentWrapper from '~components/ContentWrapper/ContentWrapper';
import ListContainer from '~components/List/ListContainer';
import QuickHelpOverlay from '~components/QuickHelpOverlay/QuickHelpOverlay';
import styles from './styles';

const QuickHelp = () => {
  const dispatch = useDispatch();
  const quickHelp = useAppSelector(state => state.quickHelp);
  const [itemToShow, setItemToShow] = useState<number | undefined>(undefined);
  const [showModal, setShowModal] = useState<boolean>(false);

  const itemToUpdate = (id: number): void => {
    dispatch(toggleDoneState(id));
  };

  const showHintOverlay = (id: number): void => {
    setItemToShow(id);
    setShowModal(true);
  };

  const hideHintOverlay = (): void => {
    setItemToShow(undefined);
    setShowModal(false);
  };

  return (
    <View>
      <ScreenHeader
        title={quickHelp.title}
        image={quickHelp.headerImage}
        imageWidth={117}
        imageHeight={75}
      />
      <ContentWrapper>
        <View style={styles.contentWrapper}>
          <Text>{quickHelp.description}</Text>
          <ListContainer
            listItems={quickHelp.items}
            handleItemClick={itemToUpdate}
            handleHintClick={showHintOverlay}
            accessabilityLabel="Quick help items"
          />
        </View>
      </ContentWrapper>

      <QuickHelpOverlay show={showModal} onClose={hideHintOverlay} itemId={itemToShow} />
    </View>
  );
};

export default QuickHelp;
