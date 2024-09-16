import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';


const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justifyt-center gap-2">
            <Image
            source={icon}
            resizeMode="contain"
            tintcolor={color}
            className="w-6 h-6"
            />
            <Text className={`${focused ? 'font-psemibold' : 
            'font-pregular'} text-xs`} style={{ color: color }}>
             {name}
           </Text>

        </View>
    )
}


const TabsLayout = () => {
    return ( 
        <>
        <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#FFA001',
            tabBarActiveTintColor: '#CDCDE0',
            tabBarStyle: {
                backgroundColor: '161622',
                borderTopWidth: 1,
                borderTopColor: '232533',
                height: 84
            }
          }}
        >
           <Tabs.Screen
              name="home"
              options={{
                title: 'Home',
                headerShown: false, 
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                       icon={icons.home}
                       color={color}
                       name='Home'
                       focused={focused}
                    />
                )
              }} 
           />
            <Tabs.Screen
              name="home"
              options={{
                title: 'Home',
                headerShown: false, 
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                       icon={icons.home}
                       color={color}
                       name='Home'
                       focused={focused}
                    />
                )
              }} 
           />
            <Tabs.Screen
              name="bookmark"
              options={{
                title: 'Bookmark',
                headerShown: false, 
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                       icon={icons.bookmark}
                       color={color}
                       name='BookMark'
                       focused={focused}
                    />
                )
              }} 
           />
            <Tabs.Screen
              name="create"
              options={{
                title: 'Create',
                headerShown: false, 
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                       icon={icons.plus}
                       color={color}
                       name='create'
                       focused={focused}
                       />
                )
              }} 
              />
              <Tabs.Screen
              name="profile"
              options={{
                title: 'Profile',
                headerShown: false, 
                tabBarIcon: ({ color, focused }) => (
                    <TabIcon
                       icon={icons.profile}
                       color={color}
                       name='profile'
                       focused={focused}
                       />
                    )
                  }} 
           />
        </Tabs> 
        
        
        </>
     )
}
 
export default TabsLayout