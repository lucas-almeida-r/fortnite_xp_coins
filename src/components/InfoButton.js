//
// InfoButton is the button that wll show the Epic Games default disclaimer
//

import React, { useState } from 'react';
import { Text, View, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native';

import { Colors, Typography, Sizes  } from "../styles";
import { shortDimension } from '../utils/scaling';
import RoundButton from './RoundButton';


const InfoButton = () => {
const [visibility, setVisibility] = useState(false);

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
              Partes dos materiais utilizados são marcas comerciais e/ou obras com direitos autorais da Epic Games, Inc. Todos os direitos reservados pela Epic. Este material não é oficial e não é endossado pela Epic.
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
