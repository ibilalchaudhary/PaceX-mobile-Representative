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
export default class GateInScreen extends Component {
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
            Gate In
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BottomTabDashboard');
          }}
          style={{display: 'flex', alignItems: 'center', marginVertical: 20}}>
          <Svg xmlns="http://www.w3.org/2000/svg" width={188} height={188}>
            <G data-name="Group 3013">
              <G data-name="Group 3012">
                <G data-name="Group 3011">
                  <Circle
                    data-name="Ellipse 327"
                    cx={94}
                    cy={94}
                    r={94}
                    fill="#4571b0"
                    opacity={0.14}
                  />
                  <Circle
                    data-name="Ellipse 326"
                    cx={70.5}
                    cy={70.5}
                    r={70.5}
                    transform="translate(24 22)"
                    fill="#4571b0"
                  />
                  <Path
                    data-name="Icon awesome-arrow-right"
                    d="M92.006 82.328l1.2-1.2a1.292 1.292 0 011.833 0l10.512 10.506a1.292 1.292 0 010 1.833L95.04 103.978a1.292 1.292 0 01-1.833 0l-1.2-1.2a1.3 1.3 0 01.022-1.855l6.516-6.207H83.006a1.3 1.3 0 01-1.3-1.3v-1.73a1.3 1.3 0 011.3-1.3h15.54l-6.518-6.204a1.29 1.29 0 01-.022-1.854z"
                    fill="#f5f5f5"
                  />
                </G>
              </G>
            </G>
          </Svg>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
