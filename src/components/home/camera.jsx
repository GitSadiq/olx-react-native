import { Camera, CameraType } from "expo-camera";
import { useState, useRef } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Video from "react-native-video";

function CameraView() {
  const [type, setType] = useState(CameraType.back);
  const [cameraPermission, requestPermission] = Camera.useCameraPermissions();
  const [microPhonePermission, setMicroPhonePermission] =
    Camera.useMicrophonePermissions();
  const [currentPhoto, setCurrentPhoto] = useState();
  const [currentVideo, setCurrentVideo] = useState();
  const [match, setMatch] = useState(false);
  const camera = useRef(null);

  // console.log(cameraPermission, microPhonePermission);

  if (!cameraPermission) {
    // Camera permissions are still loading
    return <View />;
  }

  const permission = async () => {
    const respCamera = await requestPermission();
    const microCamera = await setMicroPhonePermission();
    // console.log("resp", respCamera, microCamera);
  };

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const snap = async () => {
    const photo = await camera.current.takePictureAsync();
    console.log("photo ===>", photo);
    setCurrentPhoto(photo.uri);
  };

  const record = async () => {
    const resp = await camera.current.recordAsync();
    console.log("record", resp.uri);
  };

  const flag = () => {
    if (match) {
      setMatch(false);
    } else {
      setMatch(true);
    }
  };

  if (!cameraPermission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.containerPremisson}>
        <Text style={styles.permission}>
          We need your permission to show the camera
        </Text>
        <Button
          style={[styles.permission]}
          color="#003f34"
          onPress={permission}
          title="grant permission"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera ref={camera} style={styles.camera} type={type}></Camera>
      <View style={styles.buttonContainer}>
        <View style={styles.switch}>
          <TouchableOpacity style={styles.switchTouch} onPress={flag}>
            <Text style={!match ? styles.text : styles.textHover}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.switchTouch} onPress={flag}>
            <Text style={!match ? styles.textHover : styles.text}>video</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.button}>
            <Image style={styles.Image} source={{ uri: currentPhoto }}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={!match ? snap : record}
          >
            <Entypo style={styles.icon} name={"circle"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <MaterialCommunityIcons
              name={"rotate-3d-variant"}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function CameraFeature() {
  const isFocused = useIsFocused();
  // console.log(isFocused);
  return isFocused && <CameraView />;
}

const styles = StyleSheet.create({
  containerPremisson: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  permission: {
    textAlign: "center",
    fontSize: 20,
    padding: 20,
    color: "#003f34",
  },
  container: {
    flex: 10,
  },
  camera: {
    flex: 8 / 10,
    marginTop: 50,
  },
  buttonContainer: {
    flex: 2 / 10,
    backgroundColor: "black",
    flexDirection: "column",
  },
  switch: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  switchTouch: {
    flex: 1,
    paddingStart: 30,
    paddingEnd: 30,
  },
  text: {
    flex: 7 / 10,
    color: "black",
    borderRadius: 10,
    fontSize: 20,
    lineHeight: 34,
    backgroundColor: "white",
    textAlign: "center",
  },
  textHover: {
    flex: 7 / 10,
    color: "white",
    borderRadius: 10,
    fontSize: 20,
    borderWidth: 2,
    borderColor: "white",
    textAlign: "center",
    lineHeight: 34,
    backgroundColor: "black",
  },
  buttonView: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#ffff",
    textAlign: "center",
  },
  Image: {
    flex: 1,
    borderWidth: 2,
    borderColor: "white",
    width: "80%",
    height: "100%",
  },
});
