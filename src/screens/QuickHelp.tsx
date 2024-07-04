import React from 'react';
import { View } from 'react-native';
import { useAppSelector } from '~store/hooks';
import { useDispatch } from 'react-redux';
import { toggleDoneState } from '~store/slices/quickHelp';
import ScreenHeader from '~components/ScreenHeader';
import ListContainer from '~components/List/ListContainer';

const QuickHelp = () => {
  const dispatch = useDispatch();
  const quickHelpItems = useAppSelector(state => state.quickHelp.items);

  const itemToUpdate = (id: number): void => {
    dispatch(toggleDoneState(id));
  };

  return (
    <View>
      <ScreenHeader title={'Quick Help'} icon={'~assets/images/calm-companion.png'} />
      <ListContainer listItems={quickHelpItems} handleListItemClick={itemToUpdate} />
    </View>
  );
};

export default QuickHelp;
