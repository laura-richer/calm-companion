import React, { useState } from 'react';
import { View } from 'react-native';
import { useAppSelector } from '~store/hooks';
import { useDispatch } from 'react-redux';
import { toggleDoneState } from '~store/slices/quickHelp';
import ScreenHeader from '~components/ScreenHeader/ScreenHeader';
import ContentWrapper from '~components/ContentWrapper/ContentWrapper';
import ListContainer from '~components/List/ListContainer';
import QuickHelpOverlay from '~components/QuickHelpOverlay/QuickHelpOverlay';

const QuickHelp = () => {
  const dispatch = useDispatch();
  const quickHelpItems = useAppSelector(state => state.quickHelp.items);
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
        title={'Quick Help'}
        image={require('~assets/images/screenHeaders/quick-help.png')}
        imageWidth={117}
        imageHeight={75}
      />
      <ContentWrapper>
        <ListContainer
          listItems={quickHelpItems}
          handleItemClick={itemToUpdate}
          handleHintClick={showHintOverlay}
          accessabilityLabel="Quick help items"
        />
      </ContentWrapper>

      <QuickHelpOverlay show={showModal} onClose={hideHintOverlay} itemId={itemToShow} />
    </View>
  );
};

export default QuickHelp;
