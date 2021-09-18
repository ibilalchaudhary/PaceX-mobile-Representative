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
      <View>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{
            width: '100%',
            height: 85,
            backgroundColor: WHITE,
            borderRadius: 8,
            marginVertical: 18,
            padding: 14,
            justifyContent: 'center',
            position: 'relative',
          }}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View>
              <Image
                source={require('../Assets/warehouse__bg.png')}
                style={{width: 65, height: 65, borderRadius: 8}}
              />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 12,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginRight: 60,
                }}>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', color: TEXT_COLOR}}>
                  Warehouse Name
                </Text>
                <Text style={{fontSize: 12, color: DISABLE}}>Company Name</Text>
              </View>
              <Text style={{fontSize: 12, color: PRIMARY}}>5h ago</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            top: 84,
            left: 230,
          }}>
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              borderRadius: 20,
              borderWidth: 0.5,
              borderColor: '#D8D8D8',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: WHITE,
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={12.444}
              height={12.444}>
              <Path
                data-name="Path 9226"
                d="M12.27 1.105l-.86-.849a.617.617 0 00-.86 0L6.263 4.543 1.894.175a.616.616 0 00-.86 0l-.86.86a.616.616 0 000 .86l4.359 4.358L.256 10.55a.617.617 0 000 .86l.86.86a.617.617 0 00.86 0l4.287-4.288 4.287 4.288a.617.617 0 00.86 0l.86-.86a.617.617 0 000-.86l-4.3-4.288 4.288-4.288a.62.62 0 00.012-.869z"
                fill="#818181"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              borderRadius: 20,
              marginLeft: 6,
              borderWidth: 0.5,
              borderColor: PRIMARY,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: WHITE,
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={16.219}
              height={12.594}>
              <Path
                data-name="Path 9225"
                d="M6.21 12.351a.828.828 0 01-1.171 0L.363 7.674a1.242 1.242 0 010-1.756l.585-.585a1.242 1.242 0 011.756 0l2.919 2.919L13.512.363a1.242 1.242 0 011.756 0l.585.585a1.242 1.242 0 010 1.756z"
                fill="#42b875"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
