import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {DISABLE, PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import Svg, {G, Circle, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';
import InputBox from '../Components/InputBox';
import Selector from '../Components/Selector';
import WarehouseCard from '../Components/WarehouseCard';
import CardDetails from '../Components/CardDetails';
export default class GateOutScreen extends Component {
  constructor() {
    super();
    this.state = {
      newNotifications: true,
    };
  }
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/main__background.png')}
        style={{
          height: height,
          flex: 1,
          paddingVertical: 16,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}>
            <Text style={{color: DISABLE, fontSize: 12}}>Hello</Text>
            <Text style={{color: TEXT_COLOR, fontSize: 16, fontWeight: 'bold'}}>
              Jhonny
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image
              source={require('../Assets/userPic.png')}
              style={{width: 45, height: 45}}
            />
          </TouchableOpacity>
        </View>
        <View style={{display: 'flex', alignItems: 'center', marginTop: 160}}>
          <Text style={{color: DISABLE, fontSize: 18, fontWeight: 'bold'}}>
            Gate Out
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BottomTabDashboard');
          }}
          style={{display: 'flex', alignItems: 'center', marginVertical: 20}}>
          <Svg xmlns="http://www.w3.org/2000/svg" width={245} height={245}>
            <G data-name="Group 3013" transform="translate(-6563 1180)">
              <Circle
                data-name="Ellipse 327"
                cx={122.5}
                cy={122.5}
                r={122.5}
                transform="translate(6563 -1180)"
                fill="#4571b0"
                opacity={0.14}
              />
              <Circle
                data-name="Ellipse 326"
                cx={91.5}
                cy={91.5}
                r={91.5}
                transform="translate(6594 -1149)"
                fill="#4571b0"
              />
              <Path
                data-name="Icon awesome-arrow-right"
                d="M6687.857-1044.2l-1.561 1.561a1.681 1.681 0 01-2.384 0l-13.668-13.661a1.681 1.681 0 010-2.384l13.669-13.673a1.681 1.681 0 012.384 0l1.56 1.557a1.689 1.689 0 01-.028 2.412l-8.477 8.075h20.212a1.683 1.683 0 011.688 1.688v2.25a1.683 1.683 0 01-1.688 1.687h-20.212l8.477 8.072a1.677 1.677 0 01.028 2.416z"
                fill="#f5f5f5"
              />
            </G>
          </Svg>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
