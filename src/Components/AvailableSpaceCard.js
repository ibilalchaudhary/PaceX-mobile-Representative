import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {DISABLE, PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import {height, width} from '../Constants/Dimensions';

export default function AvailableSpaceCard({svg, space, meter, squre, text}) {
  return (
    <View>
      <View
        style={{
          height: 110,
          width: '100%',
          backgroundColor: PRIMARY,
          borderRadius: 8,
          padding: 26,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 12,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          {svg}
          <Text
            style={{
              fontSize: 26,
              color: WHITE,
              paddingLeft: 6,
            }}>
            {space}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingLeft: 2,
            }}>
            <Text style={{fontSize: 18, color: WHITE, color: '#A6DEBB'}}>
              {meter}
            </Text>
            <Text style={{fontSize: 10, color: WHITE, color: '#A6DEBB'}}>
              {squre}
            </Text>
          </View>
        </View>
        <Text style={{color: '#A6DEBB', marginTop: 6, fontSize: 12}}>
          {text}
        </Text>
      </View>
    </View>
  );
}
