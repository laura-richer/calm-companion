import React from 'react';
import { Text, View } from 'react-native';
import { useAppSelector } from '~store/hooks';
import { ListContainer } from '~components/List/ListContainer';

const QuickHelp = () => {
  const quickHelpItems = useAppSelector(state => state.quickHelp.items);

  return (
    <View>
      <Text>Quick help</Text>
      <ListContainer listItems={quickHelpItems} />
    </View>
  );
};

export default QuickHelp;
