//
// InfoButton is the button that wll show the Epic Games default disclaimer
//

import React, { useState, useContext } from 'react';
import { Text, View, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';

import { Colors, Typography, Sizes  } from "../styles";
import { shortDimension } from '../utils/scaling';
import RoundButton from './RoundButton';
import strings from '../strings';
import { Context as MapContext } from '../context/MapContext';


const InfoButton = () => {
const [visibility, setVisibility] = useState(false);
const { state: { language } } = useContext(MapContext);

  return (
    <View style={{ flex:1 }}>
      <RoundButton
        icon='info'
        onPress={() => setVisibility(true)}
      />
      <Modal
        visible={visibility}
        transparent
        animationType='slide'
        onRequestClose={() => setVisibility(false)}
      >
        <TouchableWithoutFeedback onPress={() => setVisibility(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalSurface}>
            <Text style={styles.text}>
              {strings[language].disclaimer}
            </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

InfoButton.defaultProps = {
  icon: 'zoom-in',
  onPress: () => {},
}


const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.MODAL_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalSurface: {
    backgroundColor: Colors.SURFACE,
    borderRadius: Sizes.BORDER_RADIUS,
    width: shortDimension * 0.70,
    padding: Sizes.BASE_SPACING,
  },
  text: {
    ...Typography.FILTER_ITEM,
    textAlign: 'center',
  }
});

export default InfoButton;
