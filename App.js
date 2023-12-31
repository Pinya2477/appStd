import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView, ActivityIndicator,Input, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FlatList } from "react-native";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Cat = () => {
  return (
    <ScrollView >
       
      <View style={styles.view1}>
        <Image 
          source={{
            uri: 'https://cdn.pic.in.th/file/picinth/22476e5caecd89b1b.png',
          }}
          style={{width: 100, height: 100, }} 
        />
      </View>
      <Text style={styles.text}>กนกกาญจน์ กุมลา</Text>
      <View>
        <Image
          source={{
            uri: 'https://cdn.pic.in.th/file/picinth/3c9302fd8e059d77b.png',
          }}
          style={{width: 100, height: 100}}
        />
      </View>
      <Text style={styles.text}>กมลลักษณ์ บุญก้อน</Text>
      <View>
        <Image
          source={{
            uri: 'https://cdn.pic.in.th/file/picinth/5187451f6c4a714ba.png',
          }}
          style={{width: 100, height: 100}}
        />
      </View>
      <Text style={styles.text}>กิตติกร กลมลา</Text>

      <View>
        <Image
          source={{
            uri: 'https://cdn.pic.in.th/file/picinth/7bc7e66e46a619129.png',
          }}
          style={{width: 100, height: 100}}
        />
      </View>
      <Text style={styles.text}>กุลธิดา มิควาฬ</Text>

      <View>
        <Image
          source={{
            uri: 'https://cdn.pic.in.th/file/picinth/17715dd903a3330ea.png',
          }}
          style={{width: 100, height: 100}}
        />
      </View>
      <Text style={styles.text}>จักรภัทร เลื่อนไชย</Text>

      <View>
        <Image
          source={{
            uri: 'https://cdn.pic.in.th/file/picinth/86d1f113d3c060518.png',
          }}
          style={{width: 100, height: 100}}
        />
      </View>
      <Text style={styles.text}>ชลลดา ราชวัตร</Text>
    </ScrollView>
  );
};

// function GetData() {
//   const [data, setData] = React.useState([]);
//   let host =
//     Platform.OS == "android"
//       ? "http://10.0.2.2:8000/std/"
//       : "http://localhost/:8000/std/";

//   React.useEffect(() => {
//     fetch(host)
//       .then((response) => response.json())
//       .then((result) => setData(result))
//       .catch((err) => Alert.alert(err.message));
// }, []);



// return (
//   <View style={styles.container}>
//     <FlatList 
//     data={data}
//     renderItem={renderFlatListItem}
//     style={styles.flatList}
//     contenContainaerStyle={styles.flatListContent}
//     />

//   </View>
// );

// }


// ข้อมูลตรงกลาง

function TabHome() {
  return (
    <View style={styles.container}>
      
      <Image 
        source={{ uri: 'https://cdn.pic.in.th/file/picinth/Group93820fff85620ba0.png'}}
        // source={{ uri: 'https://mis-school.com/2021/wp-content/uploads/2021/03/Group-565.png'}}
        style={{ width:350, height: 500}}
        containerStyle={{ marginLeft: 'auto', marginRight: 'auto'}}
      />
    <Text style={styles.text.color}></Text>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.button_disabled}>
        <TouchableOpacity>
          <View style={styles.imgButtonContainer}>
            <FontAwesome
              name="home"
              size={20}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Student")}>
          <View style={styles.imgButtonContainer}>
            <FontAwesome
              name="user"
              size={20}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Student</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <View style={styles.imgButtonContainer}>
            <FontAwesome
              name="address-book"
              size={20}
              color="white"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Contact</Text>

          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Student({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
          title="Add++"
          onPress={() => Alert.alert('Right button pressed')}
        />
      <Text style={styles.text}></Text>
      <Cat />
    </View>
  );
}

function Contact({ navigation }) {
  return (
    <View style={styles.container}>
    
      <Text style={styles.text2}></Text>
      <Text style={styles.text2}>วิทยาลัยธาตุพนม มหาวิทยาลัยนครพนม</Text>
      <Text style={styles.text2}>โทร. 042542442</Text>

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, iconName }) => {
            if (route.name == "Home") iconName = "home";
            if (route.name == "Student") iconName = "user";
            if (route.name == "Contact") iconName = "address-book";
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "royalblue",
          tabBarInactiveTintColor: "gray",
        })}
      >
       
        <Tab.Screen
          name="Home"
          component={TabHome}
          options={{
            tabBarLabel: "หน้าแรก",
            headerTitle: "หน้าแรก",
          }}
        />
        <Tab.Screen
          name="Student"
          component={Student}
          options={{
            tabBarLabel: "ข้อมูลนักศึกษา",
            headerTitle: "ข้อมูลนักศึกษา",
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarLabel: "ติดต่อ",
            headerTitle: "ติดต่อ",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: "หน้าแรก" }}
        />
        <Stack.Screen
          name="Student"
          component={Student}
          options={{ headerTitle: "ข้อมูลนักศึกษา", headerBackTitle: "" }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ headerTitle: "ติดต่อ", headerBackTitle: "" }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    width: 150,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "royalblue",
  },
  button_disabled: {
    width: 150,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "darkgrey",
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },

  button2: {
    color: "#069911",
    alignItems: "right"
    
  },
  imgButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  text2: {
    marginTop:0,
    textAlign: "left",
    color: "red",
    fontSize: 20,
  },
  text3: {
    marginTop:0,
    color: "red",
    fontSize: 16,
  },

});