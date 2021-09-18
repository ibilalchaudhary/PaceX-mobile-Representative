import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import Headings from '../Components/Headings';
import {
  DARK,
  DISABLE,
  PRIMARY,
  SECONDARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import {height, width} from '../Constants/Dimensions';
import Svg, {G, Path} from 'react-native-svg';
import Buttons from '../Components/Buttons';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';

export default class AddInfoScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        style={{height: height, flex: 1}}
        source={require('../Assets/Signup__bg.png')}>
        <Header
          heading="Add Info"
          onPress={() => {
            navigation.navigate('BottomTabDashboard');
          }}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{marginVertical: 14}}>
            <InputBox
              variant="primary"
              placeholder="Area Available"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={21.5}
                  height={21.5}>
                  <Path
                    d="M21.5 3.794V0h-3.794v1.265H3.794V0H0v3.794h1.265v13.912H0V21.5h3.794v-1.265h13.912V21.5H21.5v-3.794h-1.265V3.794zm-2.53 13.912h-1.264v1.264H3.794v-1.264H2.529V3.794h1.265V2.529h13.912v1.265h1.264z"
                    fill="#4571b0"
                  />
                  <Path
                    d="M5.383 9.855l4.472-4.472.894.895-4.472 4.471zM10.747 15.221l4.472-4.472.894.895-4.472 4.471zM6.724 13.879l7.155-7.155.894.895-7.155 7.154z"
                    fill="#4571b0"
                  />
                </Svg>
              }
            />
            <InputBox
              variant="primary"
              placeholder="Volume Available"
              svg={
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18.75}
                  height={18.75}>
                  <G data-name="Group 3012">
                    <G data-name="Group 1101">
                      <G data-name="Group 1100">
                        <Path
                          data-name="Path 3096"
                          d="M6.875 0C2.956 0 0 1.209 0 2.813v13.125c0 1.6 2.956 2.813 6.875 2.813s6.875-1.209 6.875-2.813V2.813C13.75 1.209 10.794 0 6.875 0zm6.25 15.938c0 1.035-2.567 2.187-6.25 2.187s-6.25-1.153-6.25-2.187V4.025c1.068.963 3.4 1.6 6.25 1.6s5.182-.637 6.25-1.6zM6.875 5C3.192 5 .625 3.847.625 2.813S3.192.625 6.875.625s6.25 1.153 6.25 2.187S10.558 5 6.875 5z"
                          fill="#4571b0"
                        />
                      </G>
                    </G>
                    <G data-name="Group 1102">
                      <Path
                        data-name="Path 3097"
                        d="M18.441 0h-3.75a.312.312 0 00-.312.312v18.126a.312.312 0 00.313.312h3.75a.312.312 0 00.313-.312V.312A.312.312 0 0018.441 0zm-.312 18.125h-3.125v-.937h.625a.313.313 0 000-.625h-.625v-1.25h1.25a.313.313 0 100-.625h-1.25v-1.25h.625a.313.313 0 000-.625h-.625v-1.25h1.25a.313.313 0 100-.625h-1.25v-1.25h.625a.313.313 0 000-.625h-.625v-1.25h1.25a.313.313 0 100-.625h-1.25v-1.25h.625a.313.313 0 000-.625h-.625v-1.25h1.25a.313.313 0 100-.625h-1.25V2.187h.625a.313.313 0 000-.625h-.625V.625h3.125z"
                        fill="#4571b0"
                      />
                    </G>
                  </G>
                </Svg>
              }
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
