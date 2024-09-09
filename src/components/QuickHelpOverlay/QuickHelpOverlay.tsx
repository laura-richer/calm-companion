import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~store/index';
import { selectItemById } from '~store/slices/quickHelp';
import FullHeightOverlayWrapper from '~components/FullHeightOverlayWrapper/FullHeightOverlayWrapper';
import RteWrapper from '~components/Rte/RteWrapper';
import { QuickHelpOverlayProps } from './types';

const QuickHelpOverlay = ({ show, onClose, itemId }: QuickHelpOverlayProps) => {
  const currentItem = useSelector((state: RootState) => selectItemById(state, itemId));

  return (
    <React.Fragment>
      {currentItem ? (
        <FullHeightOverlayWrapper show={show} onClose={onClose} title={currentItem.title}>
          <RteWrapper content={currentItem.content} />
        </FullHeightOverlayWrapper>
      ) : null}
    </React.Fragment>
  );
};

export default QuickHelpOverlay;
