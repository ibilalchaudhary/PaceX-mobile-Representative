import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  DISABLE,
  INPUT_BG,
  PRIMARY,
  TEXT_COLOR,
  WHITE,
} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import Dimensions, {height, width} from '../Constants/Dimensions';
import InputBox from '../Components/InputBox';
import Selector from '../Components/Selector';
import {LineChart} from 'react-native-chart-kit';
import AvailableSpaceCard from '../Components/AvailableSpaceCard';
import RequestCard from '../Components/RequestCard';
export default class DashboardScreen extends Component {
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <Text style={{fontSize: 16, color: TEXT_COLOR}}>Info</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddInfo');
            }}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={18.155}
              height={18.064}>
              <Path
                data-name="Path 1393"
                d="M16.757 11.336a.452.452 0 00-.452.452v4.015a1.358 1.358 0 01-1.356 1.356H2.261A1.358 1.358 0 01.9 15.803V4.02a1.358 1.358 0 011.356-1.356h4.019a.452.452 0 100-.9H2.261A2.263 2.263 0 000 4.02v11.783a2.263 2.263 0 002.261 2.261h12.687a2.263 2.263 0 002.261-2.261v-4.016a.452.452 0 00-.452-.451zm0 0"
                fill="#4571b0"
              />
              <Path
                data-name="Path 1394"
                d="M17.03.596a2.035 2.035 0 00-2.878 0L6.085 8.663a.452.452 0 00-.116.2l-1.061 3.83a.452.452 0 00.556.557l3.83-1.061a.452.452 0 00.2-.116l8.067-8.067a2.037 2.037 0 000-2.878zM7.071 8.957l6.6-6.6 2.131 2.126-6.6 6.6zm-.425.853l1.7 1.7-2.353.652zm10.276-6.445l-.48.48-2.13-2.13.48-.48a1.13 1.13 0 011.6 0l.531.531a1.132 1.132 0 01-.002 1.598zm0 0"
                fill="#4571b0"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <AvailableSpaceCard
            svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={47.891}
                height={47.891}>
                <Path
                  d="M47.891 8.451V0h-8.452v2.817H8.451V0H0v8.451h2.817v30.988H0v8.451h8.451v-2.816h30.988v2.817h8.451v-8.452h-2.816V8.451zm-5.634 30.988h-2.818v2.817H8.451v-2.817H5.634V8.451h2.817V5.634h30.988v2.817h2.817z"
                  fill="#fff"
                />
                <Path
                  d="M11.991 21.953l9.96-9.96 1.992 1.992-9.96 9.96zM23.94 33.905l9.96-9.96 1.992 1.992-9.96 9.96zM14.978 30.916L30.914 14.98l1.992 1.992L16.97 32.908z"
                  fill="#fff"
                />
              </Svg>
            }
            meter="m"
            squre="2"
            text="Area Available "
            space="65"
          />

          <AvailableSpaceCard
            svg={
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={46.8}
                height={46.8}>
                <G data-name="Group 1101">
                  <G data-name="Group 1100">
                    <Path
                      data-name="Path 3096"
                      d="M17.267.4C7.651.4.4 3.366.4 7.3v32.2c0 3.934 7.251 6.9 16.867 6.9s16.867-2.966 16.867-6.9V7.3C34.133 3.366 26.882.4 17.267.4zM32.6 39.5c0 2.538-6.3 5.367-15.333 5.367S1.933 42.038 1.933 39.5V10.275c2.619 2.362 8.354 3.925 15.334 3.925s12.714-1.563 15.333-3.925zM17.267 12.667c-9.036 0-15.334-2.829-15.334-5.367s6.3-5.367 15.333-5.367S32.6 4.762 32.6 7.3s-6.3 5.367-15.333 5.367z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth={0.8}
                    />
                  </G>
                </G>
                <G data-name="Group 1103">
                  <G data-name="Group 1102">
                    <Path
                      data-name="Path 3097"
                      d="M45.633.4h-9.2a.766.766 0 00-.767.767v44.466a.766.766 0 00.767.767h9.2a.766.766 0 00.767-.767V1.167A.766.766 0 0045.633.4zm-.767 44.467h-7.667v-2.3h1.534a.767.767 0 000-1.533H37.2v-3.067h3.067a.767.767 0 000-1.533H37.2v-3.067h1.533a.767.767 0 000-1.533H37.2v-3.067h3.067a.767.767 0 000-1.533H37.2v-3.067h1.533a.767.767 0 000-1.533H37.2v-3.067h3.067a.767.767 0 000-1.533H37.2v-3.067h1.533a.767.767 0 000-1.533H37.2v-3.067h3.067a.767.767 0 000-1.533H37.2V5.766h1.533a.767.767 0 000-1.533H37.2v-2.3h7.667z"
                      fill="#fff"
                      stroke="#fff"
                      strokeWidth={0.8}
                    />
                  </G>
                </G>
              </Svg>
            }
            meter="m"
            squre="2"
            text="Volume Available "
            space="5"
          />
        </View>
        {/* <View>
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: WHITE,
              backgroundGradientFrom: PRIMARY,
              backgroundGradientTo: PRIMARY,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
              marginRight: 42,
            }}
          />
        </View> */}
        <Text style={{fontSize: 18, color: TEXT_COLOR, marginTop: 26}}>
          Requests
        </Text>
        <ScrollView style={{flex: 1}}>
          <RequestCard
            onPress={() => {
              navigation.navigate('AcceptRequest');
            }}
          />
          <RequestCard
            onPress={() => {
              navigation.navigate('AcceptRequest');
            }}
          />
          <RequestCard
            onPress={() => {
              navigation.navigate('AcceptRequest');
            }}
          />
          <RequestCard
            onPress={() => {
              navigation.navigate('AcceptRequest');
            }}
          />
          <RequestCard
            onPress={() => {
              navigation.navigate('AcceptRequest');
            }}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}
